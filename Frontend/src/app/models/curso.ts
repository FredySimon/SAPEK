export class Curso {

    constructor(
        _id = '',
        codigo_curso = '',
        nombre_curso = '',
        descripcion = ''
    ) {
        this._id = _id;
        this.codigo_curso = codigo_curso;
        this.nombre_curso = nombre_curso;
        this.descripcion = descripcion;
    }

    _id: string;
    codigo_curso: string;
    nombre_curso: string;
    descripcion: string;
}
