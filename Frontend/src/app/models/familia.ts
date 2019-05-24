export class Familia  {

    constructor (   _id='', 
                    nombre_familia='',

                    hijo1='',
                    nombreHijo1='',

                    hijo2="",
                    nombreHijo2="",

                    hijo3="",
                    nombreHijo3="",

                    hijo4="",
                    nombreHijo4="",

                    hijo5="",
                    nombreHijo5='',

                    encargado= '',
                    nombreEncargado='',

                    padre="",
                    nombrePadre='',

                    madre="",
                    nombreMadre='',     
                    ){
                        this._id = _id;
                        this.nombre_familia = nombre_familia;

                        this.hijo1 = hijo1;
                        this.nombreHijo1 = nombreHijo1;

                        this.hijo2 = hijo2;
                        this.nombreHijo2 = nombreHijo2;

                        this.hijo3 = hijo3;
                        this.nombreHijo3 = nombreHijo3;

                        this.hijo4 = hijo4;
                        this.nombreHijo4 = nombreHijo4;

                        this.hijo5 = hijo5;
                        this.nombreHijo5 = nombreHijo5;

                        this.encargado = encargado;
                        this.nombreEncargado = nombreEncargado;

                        this.padre = padre;
                        this.nombrePadre = nombrePadre;

                        this.madre = madre;
                        this.nombreMadre = nombreMadre;
                        
                        }
                        
    _id: string;
    nombre_familia: string;

    hijo1: string;
    nombreHijo1: string;

    hijo2: string;
    nombreHijo2: string; 

    hijo3: string;
    nombreHijo3: string;

    hijo4: string;
    nombreHijo4: string;

    hijo5: string;
    nombreHijo5: string;

    encargado: string;
    nombreEncargado: string;

    padre: string;
    nombrePadre: string;

    madre: string;
    nombreMadre: string;
   
   }