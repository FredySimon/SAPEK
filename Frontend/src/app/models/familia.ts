export class Familia  {

    constructor (   _id='', nombre_familia='', hijos=[], encargado= '', padre="",
madre=""){
                        this._id = _id;
                        this.nombre_familia = nombre_familia;

                        this.hijos = hijos;
                        this.encargado = encargado;
                        this.padre = padre;
                        this.madre = madre;
                        
                        }
                        
    _id: string;
    nombre_familia: string;
    hijos: Array<any>;
    encargado: string;
    padre: string;
    madre: string;
   
   }