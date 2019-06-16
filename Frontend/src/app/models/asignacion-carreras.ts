export class AsignacionCarreras {

    constructor (   _id='', jornada='', seccion='', grado='', nombre_carrera='',  instructor='', nombre_instructor='', instructor1=null, nombre_instructor1='', instructor2=null, nombre_instructor2=''){
                        this._id = _id;
                        this.jornada = jornada;
                        this.seccion = seccion;
                        this.grado = grado;

                        this.nombre_carrera = nombre_carrera;

                        this.instructor = instructor;
                        this.nombre_instructor = nombre_instructor;
                        this.instructor1 = instructor1;
                        this.nombre_instructor1 = nombre_instructor1;
                        this.instructor2 = instructor2;
                        this.nombre_instructor2 = instructor2
                        this.nombre_instructor2 = nombre_instructor2
                    }

                    _id: string;
                    jornada: string;
                    seccion: string;
                    grado: string;

                    nombre_carrera: string;

                    instructor: string;
                    nombre_instructor: string;
                    instructor1: string;
                    nombre_instructor1: string;
                    instructor2: string;
                    nombre_instructor2: string;
}
