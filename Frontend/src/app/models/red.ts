export class Red {

    constructor(    _id='',
                    nombre_red='',
                    carrera='',
                    fecha_inicio='',
                    fecha_final='',
                    jornada='',
                    seccion='',
                    grado='',
                    cursos = []
                    ){
                        this._id = _id;
                        this.nombre_red = nombre_red;
                        this.carrera = carrera;
                        this.fecha_inicio = fecha_inicio;
                        this.fecha_final = fecha_final;

                        this.jornada = jornada;
                        this.seccion = seccion;
                        this.grado = grado;
                        this.cursos = cursos;
                    }

                    _id:string;
                    nombre_red: string;
                    carrera: string;
                    fecha_inicio: string;
                    fecha_final: string;

                    jornada:string;
                    seccion:string;
                    grado:string;
                    cursos: Array<any>;
}


