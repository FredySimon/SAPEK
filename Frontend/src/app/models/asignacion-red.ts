export class AsignacionRed {
    constructor(_id = '', red_de_estudio = '', cursos = []) {
        this._id = _id;
        this.red_de_estudio = red_de_estudio;
        this.cursos = cursos;
    }

    _id: string;
    red_de_estudio: string;
    cursos: Array<any>;
}
