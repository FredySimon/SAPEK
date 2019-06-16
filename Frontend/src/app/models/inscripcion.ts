export class Inscripcion {

    constructor( _id='', estudiante='', unidad_academica='', jornada='', cuota_mensual='', grado='', carrera='', seccion='', curso=''){
        this._id = _id;
        this.estudiante = estudiante;
        this.unidad_academica = unidad_academica;
        this.jornada = jornada;
        this.cuota_mensual = cuota_mensual;
        this.grado = grado;
        this.carrera = carrera;
        this.seccion = seccion;
        this.curso = curso
    }
    _id: string;
    estudiante: string;
    unidad_academica: string;
    jornada: string;
    cuota_mensual: string;
    grado: string;
    carrera: string;
    seccion: string;
    curso: string;
}


