export class AsignacionCursos {
    constructor( _id='', jornada='', curso='', instructores=[] ){
                        this._id = _id;
                        this.jornada = jornada;
                        this.curso = curso;
                        this.instructores = instructores
    }

    _id: string;
    jornada: string;
    curso: string;
    instructores: Array<any>;
}
