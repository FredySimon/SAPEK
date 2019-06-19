'use strict'
const Usuario = require('../models/usuario');
const usuarioCtrl = {};
const bcrypt = require('bcrypt-nodejs');

usuarioCtrl.getUsuarios  = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = (req, res) => {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        password: req.body.password,
        rol: req.body.rol
    });
    Usuario.findOne({nombre: usuario.nombre.toLowerCase()}, (err, isset) => {
        if(err){
            res.json({status: 'Error, el usuario ya existe.'});
        } else {
            if(!isset){
                bcrypt.hash(req.body.password, null, null, function(err, hash){
                    usuario.password = hash;

                     usuario.save((stored) => {
                        res.status(200).send({usuario: stored})
                    })
                })
            }
        }
    })
}

usuarioCtrl.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = (req, res) => {
    const { id } = req.params;
    const usuario = {
        nombre: req.body.nombre,
        password: req.body.password,
        rol: req.body.rol
    }
    bcrypt.hash(req.body.password, null, null, function(hash){
        usuario.password = hash;

        Usuario.findByIdAndUpdate(id, {$set: usuario});
        res.json({ status : 'Usuario actualizado.'})
    }) 
};

usuarioCtrl.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({ status : 'Usuario eliminado.'})
}

module.exports = usuarioCtrl;