export class Usuario {
    constructor(_id='', nombre='', password='', rol='', gettoken=true){
        this._id = _id;
        this.nombre = nombre;
        this.password = password;
        this.rol = rol;
        this.gettoken = gettoken
    }

    _id: string;
    nombre: string;
    password: string;
    rol: string;
    gettoken:boolean;
}

