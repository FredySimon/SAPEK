export class AsignacionCarreras {

    constructor (   _id='', grado='', seccion='', jornada='',  carrera='', instructores=[]){
                        this._id = _id;
                        this.jornada = jornada;
                        this.seccion = seccion;
                        this.grado = grado;

                        this.carrera = carrera;

                        this.instructores = instructores
                    }

                    _id: string;
                    jornada: string;
                    seccion: string;
                    grado: string;

                    carrera: string;

                    instructores: Array<any>;
                    
}
