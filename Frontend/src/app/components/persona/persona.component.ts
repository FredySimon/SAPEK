import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  nombre_persona_detalle: string = ""
  apellido_casada_detalle = ""
  genero_detalle: string = ""
  estado_civil_detalle: string = ""
  fecha_nacimiento_detalle: string = ""
  religion_detalle: string = ""
  correos_detalle = []
  departamento_detalle: string = ""
  municipio_detalle: string = ""
  zona_detalle: string = ""
  avenida_detalle: string = ""
  calle_detalle: string = ""
  casa_detalle: string = ""
  colonia_detalle: string = ""
  boulevard_detalle: string = ""
  lote_detalle: string = ""
  residenciales_detalle: string = ""
  diagonal_detalle: string = ""
  calzada_detalle: string = ""
  ruta_detalle: string = ""
  manzana_detalle: string = ""
  cuadra_detalle: string = ""
  sector_detalle: string = ""
  edificio_detalle: string = ""
  nivel_detalle: string = ""
  apartamento_detalle: string = ""
  kilometro_detalle: string = ""
  carretera_detalle: string = ""
  aldea_detalle: string = ""
  otra_direccion_detalle: string = ""
  celulares_detalle = []

  correoArray = [];
  correoInput: string = "";

  celularArray = [];
  celularInput: number = null

  mostrarMas1: Boolean = false;
  mostrarMas2: Boolean = false;
  mostrarMas3: Boolean = false;

  departamentos = [
    'ALTA VERAPAZ',
    'BAJA VERAPAZ',
    'CHIMALTENANGO',
    'CHIQUIMULA',
    'EL PROGRESO',
    'ESCUINTLA',
    'GUATEMALA',
    'HUEHUETENANGO',
    'IZABAL',
    'JALAPA',
    'JUTIAPA',
    'PETÉN',
    'QUETZALTENANGO',
    'QUICHÉ',
    'RETALHULEU',
    'SACATEPÉQUEZ',
    'SAN MARCOS',
    'SANTA ROSA',
    'SOLOLÁ',
    'SUCHITEPÉQUEZ',
    'TOTONICAPÁN',
    'ZACAPA',
  ]


  municipios = []
  altaVerapaz = ['COBÁN', 'CHISEC', 'CHAHAL', 'FRAY BARTOLOMÉ DE LAS CASAS', 'LANQUÍN', 'PANZOS', 'TAMAHÚ', 'TUCURÚ', 'TACTIC', 'SANTA MARIA CAHABÓN', 'SENAHÚ', 'SAN CRISTÓBAL VERAPAZ', 'SAN JUAN CHAMELCO', 'SAN PEDRO CARCHÁ', 'SANTA CRUZ VERAPAZ', 'SANTA CATALINA LA TINTA', 'RAXRUHÁ']
  bajaVerapaz = ['CUBULCO', 'SANTA CRUZ EL CHOL', 'GRANADOS', 'PURULHÁ', 'RABINAL', 'SALAMÁ', 'SAN MIGUEL CHICAJ', 'SAN JERÓNIMO']
  chimaltenango = ['CHIMALTENANGO', 'SAN JOSE POAQUIL', 'SAN MARTIN JILOTEPEQUE', 'SAN JUAN COMALAPA', 'SANTA APOLONIA', 'SANTA CRUZ BALANYÁ', 'TECPÁN', 'PATZÚN', 'POCHUTA', 'PATZICÍA', 'EL TEJAR', 'PARRAMOS', 'ACATENANGO', 'YEPOCAPA', 'SAN ANDRES ITZAPA', 'ZARAGOZA']
  chiquimula = ['CHIQUIMULA', 'CAMOTAN', 'CONCEPCIÓN LAS MINAS', 'ESQUIPULAS', 'IPALA', 'JOCOTAN', 'OLOPA', 'QUETZALTEPEQUE', 'SAN JOSÉ LA ARADA', 'SAN JUAN ERMITA', 'SAN JACINTO']
  elProgreso = ['GUASTATOYA', 'MORAZÁN', 'EL JICARO', 'SAN AGUSTIN ACASAGUASTLÁN', 'SAN CRISTOBAL ACASAGUASTLÁN', 'SAN ANTONIO LA PAZ', 'SANARATE', 'SANSARE']
  escuintla = ['ESCUINTLA', 'GUANAGAZAPA', 'IZTAPA', 'LA DEMOCRACIA', 'LA GOMERA', 'MASAGUA', 'NUEVA CONCEPCIÓN', 'PALÍN', 'SAN JOSÉ', 'SAN VICENTE PACAYA', 'SANTA LUCIA COTZUMALGUAPA', 'SIQUINALÁ', 'TIQUISATE']
  guatemala = ['GUATEMALA', 'SANTA CATARINA PINULA', 'SAN JOSÉ PINULA', 'SAN JOSÉ DEL GOLFO', 'PALENCIA', 'CHINAUTLA', 'SAN PEDRO AYAMPUC', 'MIXCO', 'SAN PEDRO SACATEPÉQUEZ', 'SAN JUAN SACATEPÉQUEZ', 'CHUARRANCHO', 'VILLA NUEVA', 'VILLA CANALES', 'AMATITLÁN', 'FRAIJANES', 'SAN MIGUEL PETAPA', 'SAN RAYMUNDO']
  huehuetenango = ['AGUACTÁN', 'CHIANTLA', 'COLOTENANGO', 'CONCEPCIÓN HUISTA', 'CUILCO', 'HUEHUETENANGO', 'JACALTENANGO', 'LA DEMOCRACIA', 'LA LIBERTAD', 'MALACATANCITO', 'NENTÓN', 'SAN ANTONIO HUISTA', 'SAN GASPAR IXCHIL', 'SAN IDEFONSO IXTAHUACÁN', 'SAN JUAN ATITÁN', 'SAN JUAN IXCOY', 'SAN MATEO IXTATÁN', 'SAN MIGUEL ACATÁN', 'SAN PEDRO NECTA', 'SAN PEDRO SOLOMA', 'SAN RAFAEL LA INDEPENDENCIA', 'SAN RAFAEL PETZAL', 'SAN SEBASTIÁN COATÁN', 'SAN SEBASTIÁN HUEHUETENANGO', 'SAN ANA HUISTA', 'SAN BÁRBARA', 'SANTA CRUZ BARILLAS', 'SANTA EULALIA', 'SANTIAGO CHIMALTENANGO', 'TECTITÁN', 'TODOS SANTOS CUCHUMATÁN', 'UNIÓN CANTINIL']
  izabal = ['PUERTO BARRIOS', 'EL ESTOR', 'LIVINGSTON', 'LOS AMATES', 'MORALES']
  jalapa = ['JALAPA', 'MATAQUESCUINTLA', 'MONJAS', 'SAN PEDRO PINULA', 'SAN LUIS JILOTEPEQUE', 'SAN MANUEL CHAPARRÓN', 'SAN CARLOS ALZATATE']
  jutiapa = ['JUTIAPA', 'AGUA BLANCA', 'ASUNCIÓN MITA', 'ATESCATEMPA', 'COMAPA', 'CONGUACO', 'EL ADELANTADO', 'EL PROGRESO', 'JALPATAGUA', 'JEREZ', 'MOYUTA', 'PASACO', 'QUESADA', 'SAN JOSÉ ACATEMPA', 'SANTA CATARINA MITA', 'YUPILTEPEQUE', 'ZAPOTITLÁN']
  peten = ['DOLORES', 'FLORES', 'LA LIBERTAD', 'MELCHOR DE MENCOS', 'POPTÚN', 'SAN ANDRES', 'SAN BENITO', 'SAN FRANCISCO', 'SAN JOSÉ', 'SAN LUIS', 'SANTA ANA', 'SAYAXCHÉ']
  quetzaltenango = ['QUETZALTENANGO', 'ALMOLONGA', 'CABRICÁN', 'CAJOLÁ', 'CANTEL', 'COATEPEQUE', 'COLOMBA', 'CONCEPCIÓN CHIQUIRICHAPA', 'EL PALMAR', 'FLORES COSTA CUCA', 'GÉNOVA', 'HUITÁN', 'LA ESPERANZA', 'OLINTEPEQUE', 'SAN JUAN OSTUNCALCO', 'PALESTINA LOS ALTOS', 'SALCAJÁ', 'SAN CARLOS SIJA', 'SAN FRANCISCO LA UNIÓN', 'SAN MARTÍN SACATEPÉQUEZ', 'SAN MATEO', 'SAN MIGUEL SIGÜILÁ', 'SIBILIA', 'ZUNIL']
  quiche = ['SANTA CRUZ DEL QUICHÉ', 'CANILLÁ', 'CHAJUL', 'CHICAMÁN', 'CHICHÉ', 'CHICHICASTENANGO', 'CHINIQUE', 'CUNÉN', 'IXCÁN', 'JOYABAJ', 'NEBAJ', 'PACHALUM', 'PATZITÉ', 'SACAPULAS', 'SAN ANDRÉS SAJCABAJÁ', 'SAN ANTONIO ILOTENANGO', 'SAN BARTOLOMÉ JOCOTENANGO', 'SAN JUAN COTZAL', 'SAN PEDRO JOCOPILAS', 'USPANTÁN', 'ZACUALPA']
  retalhuleu = ['RETALHULEU', 'CHAMPERICO', 'EL ASINTAL', 'NUEVO SAN CARLOS', 'SAN ANDRÉS VILLA SECA', 'SAN MARTÍN ZAPOTITLÁN', 'SAN FELIPE', 'SAN SEBASTIÁN', 'SANTA CRUZ MULUÁ']
  sacatepequez = ['ANTIGUA GUATEMALA', 'ALOTENANGO', 'CIUDAD VIEJA', 'JOCOTENANGO', 'MAGDALENA MILPAS ALTAS', 'PASTORES', 'SAN ANTONIO AGUAS CALIENTES', 'SAN BARTOLOMÉ MILPAS ALTAS', 'SAN LUCAS SACATEPÉQUEZ', 'SAN MIGUEL DUEÑAS', 'SAN CATARINA BARAHONA', 'SANTA LUCIA MILPAS ALTAS', 'SATA MARIA DE JESÚS', 'SANTIAGO SACATEPÉQUEZ', 'SANTO DOMINGO XENACOJ', 'SUMPANGO']
  sanMarcos = ['SAN MARCOS', 'AYUTLA', 'CATARINA', 'COMITANCILLO', 'CONCEPCIÓN TUTUAPA', 'EL QUETZAL', 'EL RODEO', 'EL TUMBADOR', 'ESQUIPULAS PALO GORDO', 'IXCHIGUÁN', 'LA REFORMA', 'MALACATÁN', 'NUEVO PROGRESO', 'OCÓS', 'PAJAPITA', 'RÍO BLANCO', 'SAN ANTONIO SACATEPÉQUEZ', 'SAN CRISTÓBAL CUCHO', 'SAN JOSÉ OJETENAM', 'SAN LORENZO', 'SAN MIGUEL IXTAHUACÁN', 'SAN PABLO', 'SAN PEDRO SACATÉPEQUEZ', 'SAN RAFAÉL PIE DE LA CUESTA', 'SIBINAL', 'SIPACAPA', 'TACANÁ', 'TAJUMULCO', 'TEJUTLA', 'LA BLANCA']
  santaRosa = ['CUILAPA', 'CASILLAS', 'CHIQUIMULILLA', 'GUAZACAPÁN', 'NUEVA SANTA ROSA', 'ORATORIO', 'PUEBLO NUEVO VIÑAS', 'SAN JUAN TECUACO', 'SAN RAFAEL LAS FLORES', 'SANTA CRUZ NARANJO', 'SANTA MARIA IXHUATÁN', 'SANTA ROSA DE LIMA', 'TAXISCO', 'BARBERENA']
  solola = ['SOLOLÁ', 'CONCEPCIÓN', 'NAHUALÁ', 'PANAJACHEL', 'SAN ANDRES SEMETABAJ', 'SAN ANTONIO PALOPÓ', 'SAN JOSÉ CHACAYÁ', 'SAN JUAN LA LAGUNA', 'SAN LUCAS TOLIMÁN', 'SAN MARCOS LA LAGUNA', 'SAN PABLO LA LAGUNA', 'SAN PEDRO LA LAGUNA', 'SANTA CATARINA IXTAHUACAN', 'SANTA CATARINA PALOPÓ', 'SANTA CLARA LA LAGUNA', 'SANTA CRUZ LA LAGUNA', 'SANTA LUCÍA UTATLÁN', 'SANTA MARÍA VISITACIÓN', 'SANTIAGO ATITLÁN']
  suchitepequez = ['MAZATENANGO', 'CHICACAO', 'CUYOTENANGO', 'PATULUL', 'PUEBLO NUEVO', 'RÍO BRAVO', 'SAMAYAC', 'SAN ANTONIO SUCHITEPÉQUEZ', 'SAN BERNARDINO', 'SAN JOSÉ EL ÍDOLO', 'SAN FRANCISCO ZAPOTITLÁN', 'SAN GABRIEL', 'SAN JUAN BAUTISTA', 'SAN LORENZO', 'SAN MIGUEL PANÁN', 'SAN PABLO JOCOPILAS', 'SANTA BÁRBARA', 'SANTO DOMINGO SUCHITPÉQUEZ', 'SANTO TOMAS LA UNIÓN', 'ZUNILITO', 'SAN JOSÉ LA MAQUINA']
  totonicapan = ['TOTONICAPÁN', 'MOMOSTENANGO', 'SAN ANDRÉS XECUL', 'SAN BARTOLO', 'SAN CRISTOBAL TOTONICAPÁN', 'SAN FRANCISCO EL ALTO', 'SANTA LUCÍA LA REFORMA', 'SANTA MARÍA CHIQUIMULA']
  zacdpa = ['CABAÑAS', 'ESTANZUELA', 'GUALÁN', 'HUITÉ', 'LA UNIÓN', 'RÍO HONDO', 'SAN DIEGO', 'SAN JORGE', 'TECULUTÁN', 'USUMATLÁN', 'ZACAPA']

  constructor(private personaService: PersonaService,
    private toastr: ToastrService) {
    this.celularArray = [];
    this.correoArray = []
  }

  @ViewChild('btnClose') btnClose: ElementRef;

  private personas: Persona[];

  filter_persona = '';

  ngOnInit() {
    this.getPersonas();
  }

  addPersona(form: NgForm) {
    if (form.valid) {
      if (form.value._id) {
        if (this.personaService.selectedPersona.correos.length > 0 && this.personaService.selectedPersona.celulares.length > 0) {
          this.personaService.putPersona(form.value)
            .subscribe(res => {
              this.toastr.success('Accion realizada exitosamente', 'Persona actualizada.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
              this.getPersonas();
              console.log(res);
              this.btnClose.nativeElement.click();
              this.resetForm(form);
              this.correoArray = [];
              this.celularArray = []
            })
        } else {
          this.toastr.error('Campos celulares y correos tienen un minimo de 1.')
        }
      } else {
        if (this.personaService.selectedPersona.correos.length > 0 && this.personaService.selectedPersona.celulares.length > 0) {
          this.personaService.postPersona(form.value)
            .subscribe(res => {
              this.toastr.success('Accion realizada exitosamente', 'Persona guardada.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
              console.log(res);
              this.getPersonas();
              this.btnClose.nativeElement.click();
              this.resetForm(form);
              this.correoArray = [];
              this.celularArray = []
            })
        } else {
          this.toastr.error('Campos celulares y correos tienen un minimo de 1.')
        }
      }
    } else {
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  getPersonas() {
    this.personaService.getPersonas()
      .subscribe(res => {
        this.personaService.personas = res as Persona[]
        this.toastr.info('Acción realizada exitosamente', 'Personas obtenidas', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
        console.log(res);
      });
  }

  getPersona(persona: Persona) {
    this.personaService.getPersona(persona)
      .subscribe(res => {
        console.log(res)
        this.nombre_persona_detalle = persona.primer_nombre + ' ' + persona.segundo_nombre + ' ' + persona.primer_apellido + ' ' + persona.segundo_apellido
        this.apellido_casada_detalle = persona.apellido_conyugal
        this.genero_detalle = persona.genero
        this.estado_civil_detalle = persona.estado_civil
        this.fecha_nacimiento_detalle = persona.fecha_nacimiento
        this.religion_detalle = persona.religion
        this.correos_detalle = persona.correos

        this.departamento_detalle = persona.departamento
        this.municipio_detalle = persona.municipio
        this.zona_detalle = persona.zona
        this.avenida_detalle = persona.avenida
        this.calle_detalle = persona.calle
        this.casa_detalle = persona.noCasa
        this.colonia_detalle = persona.colonia
        this.boulevard_detalle = ""
        this.lote_detalle = ""
        this.residenciales_detalle = ""
        this.diagonal_detalle = ""
        this.calzada_detalle = ""
        this.ruta_detalle = ""
        this.manzana_detalle = ""
        this.cuadra_detalle = ""
        this.sector_detalle = ""
        this.edificio_detalle = ""
        this.nivel_detalle = ""
        this.apartamento_detalle = ""
        this.kilometro_detalle = ""
        this.carretera_detalle = ""
        this.aldea_detalle = ""
        this.otra_direccion_detalle = ""

        this.celulares_detalle = persona.celulares
      })
  }

  editPersona(persona: Persona) {
    this.personaService.selectedPersona = persona;
    this.personaService.selectedPersona.celulares = persona.celulares;
    this.personaService.selectedPersona.correos = persona.correos;
    this.celularArray = persona.celulares;
    this.correoArray = persona.correos
  }

  deletePersona(_id: string) {
    if (confirm('¿Quieres eliminar a esta persona?')) {
      this.personaService.deletePersona(_id)
        .subscribe(res => {
          this.getPersonas();
          this.toastr.warning('Acción realizada exitosamente',
            'Persona eliminada.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.personaService.selectedPersona = new Persona();
    }
  }

  mostrar1() {
    this.mostrarMas1 = true;
  }

  ocultar1() {
    this.mostrarMas1 = false;
  }

  mostrar2() {
    this.mostrarMas2 = true;
  }

  ocultar2() {
    this.mostrarMas2 = false;
  }

  mostrar3() {
    this.mostrarMas3 = true;
  }

  ocultar3() {
    this.mostrarMas3 = false;
  }

  seleccionarCorreo() {
    if (this.correoInput !== "") {
      if (this.correoArray.length < 5) {
        if (this.correoInput.indexOf("@") > -1 && this.correoInput.indexOf(".com") > -1 || this.correoInput.indexOf('.edu') > -1 || this.correoInput.indexOf('.gt') > -1) {
          if (this.correoArray.indexOf(this.correoInput) > -1) {
            this.toastr.error('Correo duplicado')
          } else {
            this.correoArray.push(this.correoInput)
            this.personaService.selectedPersona.correos.push(this.correoInput);
            this.toastr.success('Agregado')
            this.correoInput = ""
            console.log(this.correoArray)
            console.log(this.personaService.selectedPersona.correos)
          }
        } else {
          this.toastr.error('Correo invalido.')
        }

      } else {
        this.toastr.error('Máximo 5 correos.')
      }
    } else {
      this.toastr.error('Ingrese un correo.')
    }
  }

  seleccionarCelular() {
    if (this.celularInput !== null) {
      if (this.celularInput > 11111111 && this.celularInput < 99999999) {
        if (this.celularArray.length < 5) {
          if (this.celularArray.indexOf(this.celularInput) > -1) {
            this.toastr.error('Celular duplicado')
          } else {
            this.celularArray.push(this.celularInput)
            this.personaService.selectedPersona.celulares.push(this.celularInput)
            this.toastr.success('Agregado')
            this.celularInput = null
          }
        } else {
          this.toastr.error('Máximo 5 celulares.')
        }
      } else {
        this.toastr.error('Celular invalido.')
      }
    } else {
      this.toastr.error('Ingrese un celular.')
    }
  }

  quitarCorreo(correo: any) {
    const correos = this.correoArray.indexOf(correo);
    const corres = this.personaService.selectedPersona.correos.indexOf(correo)

    if (correos >= 0 && corres >= 0) {
      this.correoArray.splice(correos, 1)
      this.personaService.selectedPersona.correos.splice(correos, 1)
      console.log(this.correoArray)
      console.log(this.personaService.selectedPersona.correos)
      this.toastr.warning('Correo removido')
    }
  }

  quitarCelular(celular: any) {
    const celulares = this.celularArray.indexOf(celular);
    const celulars = this.personaService.selectedPersona.celulares.indexOf(celular)

    if (celulares >= 0 && celulars >= 0) {
      this.celularArray.splice(celulares, 1)
      this.personaService.selectedPersona.celulares.splice(celulars, 1)
      console.log(this.celularArray)
      console.log(this.personaService.selectedPersona.celulares)
      this.toastr.warning('Celular removido')
    }
  }
}
