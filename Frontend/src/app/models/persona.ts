
export class Persona {

    constructor (   _id='', genero='', estado_civil='', primer_nombre='', segundo_nombre='', primer_apellido='', segundo_apellido='', apellido_conyugal= '', fecha_nacimiento= '',
religion='', correos = [], departamento='', municipio='', zona='', avenida='', calle='', noCasa='', colonia='', boulevard='', lote='', residenciales='', diagonal='', calzada='',ruta='', manzana='', cuadra='', sector='', edificio='', nivel='', apartamento='', kilometro='', carretera='', aldea='', otra_direccion='', celulares=[]){
                        this._id = _id;

                        this.genero = genero;
                        this.estado_civil = estado_civil;
                        
                        this.primer_nombre = primer_nombre;
                        this.segundo_nombre = segundo_nombre;
                        this.primer_apellido = primer_apellido;
                        this.segundo_apellido = segundo_apellido;
                        this.apellido_conyugal = apellido_conyugal;
                        this.fecha_nacimiento = fecha_nacimiento;
                        this.religion = religion;

                        this.correos = correos;
                        
                        this.departamento = departamento;
                        this.municipio = municipio;
                        this.zona = zona;

                        this.avenida = avenida;
                        this.calle = calle;
                        this.noCasa = noCasa;

                        this.colonia = colonia;
                        this.boulevard = boulevard;
                        this.lote = lote;
                        this.residenciales = residenciales;
                        this.diagonal = diagonal;
                        this.calzada = calzada;
                        this.ruta = ruta;
                        this.manzana = manzana;
                        this.cuadra = cuadra;
                        this.sector = sector;
                        this.edificio = edificio;
                        this.nivel = nivel;
                        this.apartamento = apartamento;
                        this.kilometro = kilometro;
                        this.carretera = carretera;
                        this.aldea = aldea;
                        this.otra_direccion = otra_direccion;
                        
                        this.celulares = celulares;
}
                        
    _id: string;

    genero :string;
    estado_civil :string;

    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido :string;
    segundo_apellido :string;
    apellido_conyugal :string;
    fecha_nacimiento :string;
    religion :string;

    correos: Array<any>;
    
    departamento :string;
    municipio :string;
    zona :string;
    
    avenida :string;
    calle :string;
    noCasa :string;

    colonia :string;
    boulevard :string;
    lote :string;
    residenciales :string;
    diagonal :string;
    calzada :string;
    ruta :string;
    manzana :string;
    cuadra :string;
    sector :string;
    edificio :string;
    nivel :string;
    apartamento :string;
    kilometro :string;
    carretera :string;
    aldea :string;
    otra_direccion :string;
    
    celulares :  Array<any>;

}



