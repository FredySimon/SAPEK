export class AsignacionRed {
    constructor(_id='', red='', nombre_red='', fecha_inicio='', fecha_final='', cursos=[]){
        this._id = _id;
        this.red = red;
        this.nombre_red = nombre_red;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
        this.cursos = cursos;
    }

    _id: string;
    red: string;
    nombre_red: string;
    fecha_inicio: string;
    fecha_final: string;
    cursos: Array<any>;
}
