export class Carrera {

    constructor (   _id='',
                    nombre_carrera='',
                    codigo='',
                    inicio='',
                    final='',
                    descripcion='',
    ){
        this._id = _id;
        this.nombre_carrera = nombre_carrera;
        this.codigo = codigo;
        this.inicio =inicio;
        this.final =final;
        this.descripcion = descripcion;
    }

_id: string;
nombre_carrera: string;
codigo: string;
inicio: string;
final: string;
descripcion: string;
}
