export class Usuario {
    constructor(_id='', nombre='', password='', rol=''){
        this._id = _id;
        this.nombre = nombre;
        this.password = password;
        this.rol = rol;
    }

    _id: string;
    nombre: string;
    password: string;
    rol: string;
}

