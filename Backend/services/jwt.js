'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'password'

exports.createTokenUser = function(usuario){
    var payload = {
        sub: usuario._id,
        nombre: usuario.nombre,
        password: usuario.password,
        rol: usuario.rol,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix
    };
    return jwt.encode(payload, secret)
}