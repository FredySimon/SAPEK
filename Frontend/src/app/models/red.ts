export class Red {

    constructor(    _id='',
                    nombre_red='',
                    curso='',
                    nombre_curso='',
                    fecha_inicio='',
                    fecha_final='',
                    observaciones='',
                    ){
                        this._id = _id;
                        this.nombre_red = nombre_red;
                        this.curso = curso;
                        this.nombre_curso = nombre_curso;
                        this.fecha_inicio = fecha_inicio;
                        this.fecha_final = fecha_final;
                        this.observaciones = observaciones;
                    }

                    _id:string;
                    nombre_red: string;
                    curso: string;
                    nombre_curso: string;
                    fecha_inicio: string;
                    fecha_final: string;
                    observaciones: string;
}


