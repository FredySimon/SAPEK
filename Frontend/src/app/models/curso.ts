export class Curso {

    constructor(_id = '', codigo_curso = '', nombre_curso = '', inicio='', final='') {
        this._id = _id;
        this.codigo_curso = codigo_curso;
        this.nombre_curso = nombre_curso;
        this.inicio =inicio;
        this.final =final;
    }

    _id: string;
    codigo_curso: string;
    nombre_curso: string;
    inicio: string;
    final: string;
}
