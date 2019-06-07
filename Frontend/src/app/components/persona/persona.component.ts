import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { NgForm, EmailValidator } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { ToastrService } from 'ngx-toastr';
import { createAotUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  mostrarCorreo2: Boolean = false;
  mostrarCorreo3: Boolean = false;
  mostrarCorreo4: Boolean = false;
  mostrarCorreo5: Boolean = false;

  mostrarMas1: Boolean = false;
  mostrarMas2: Boolean = false;
  mostrarMas3: Boolean = false;

  mostrarOtro1: Boolean = false;
  mostrarOtro2: Boolean = false;

  departamentos = [
    'ALTA VERAPAZ',
    'BAJA VERAPA',
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
    'SAN AMRCOS',
    'SANTA ROSA',
    'SOLOLÁ',
    'SUCHITEPÉQUEZ',
    'TOTONICAPÁN',
    'ZACAPA',
  ]

  municipios = [
    'ACATENAGO',
    'AGUA BLANCA',
    'AGUACATÁN',
    'ALMOLONGA',
    'ALOTENANGO',
    'AMATITLÁN',
    'ANTIGUA GUATEMALA',
    'ASUNCIÓN MITA',
    'ATESCATEMPA',
    'AYUTLA',
    'BARBARENA',
    'CABAÑAS',
    'CABRICÁN',
    'CAJOLÁ',
    'CAMOTAN',
    'CANILLÁ',
    'CANTEL',
    'CASILLAS',
    'CATARINA',
    'CHAHAL',
    'CHAJUL',
    'CHAMPERICO',
    'CHIANTLA',
    'CHICACAO',
    'CHICAMÁN',
    'CHICHÉ',
    'CHICHICASTENANGO',
    'CHIMALTENANGO',
    'CHINIQUE',
    'CHIQUIMULA',
    'CHIQUIMULILLA',
    'CHINAUTLA',
    'CHISEC',
    'CHUARRANCHO',
    'CIUDAD VIEJA',
    'COATEPEQUE',
    'COBÁN',
    'COLOMBA',
    'COLOTENANGO',
    'COMAPA',
    'COMITANCILLO',
    'CONCEPCIÓN',
    'CONCEPCIÓN CHIQUIRICHAPA',
    'CONCEPCIÓN HUISTA',
    'CONCEPCIÓN LAS MINAS',
    'CONCEPCIÓN TUTUAPA',
    'CONGUACO',
    'CUBULCO',
    'CUILAPA',
    'CUILCO',
    'CUNÉN',
    'CUYOTENANGO',
    'DOLORES',
    'EL ADELANTADO',
    'EL ASINTAL',
    'EL ESTOR',
    'EL JICARO',
    'EL PALMAR',
    'EL PROGRESO',
    'EL QUETZAL',
    'EL RODEO',
    'EL TEJAR',
    'EL TUMBADOR',
    'ESCUINTLA',
    'ESQUIPULAS',
    'ESQUIPULAS PALO GORDO',
    'ESTANZUELA',
    'FLORES',
    'FLORES COSTA CUCA',
    'FRAIJANES',
    'FRAY BARTOLOMÉ DE LAS CASAS',
    'GÉNOVA',
    'GRANADOS',
    'GUALÁN',
    'GUANAGAZAPA',
    'GUASTATOYA',
    'GUATEMALA',
    'GUAZACAPÁN',
    'HUEHUETENANGO',
    'HUITLÁN',
    'HUITÉ',
    'IPALA',
    'IXCÁN',
    'IXCHIGUÁN',
    'IZTAPA',
    'JACALTENANGO',
    'JALAPA',
    'JALPATAGUA',
    'JEREZ',
    'JOCOTAN',
    'JOCOTENANGO',
    'JOYABAJ',
    'JUTIAPA',
    'LA BLANCA',
    'LA DEMOCRACIA',
    'LA ESPERANZA',
    'LA GOMERA',
    'LA LIBERTAD',
    'LA REFORMA',
    'LA UNIÓN',
    'LANQUÍN',
    'LIVINGSTON',
    'LOS AMATES',
    'MAGDALENA MILPAS ALTAS',
    'MALACATÁN',
    'MALACATANCITO',
    'MASAGUA',
    'MATAQUESCUINTLA',
    'MAZATENANGO',
    'MELCHOR DE MENCOS',
    'MIXCO',
    'MOMOSTENANGO',
    'MONJAS',
    'MORALES',
    'MORAZÁN',
    'MOYUTA',
    'NAHUALÁ',
    'NEBAJ',
    'NENTÓN',
    'NUEVA CONCEPCIÓN',
    'NUEVA SANTA ROSA',
    'NUEVO PROGRESO',
    'NUEVO SAN CARLOS',
    'OCÓS',
    'OLINTEPEQUE',
    'OLOPA',
    'ORATORIO',
    'PACHULUM',
    'PAJAPITA',
    'PALENCIA',
    'PALESTINA LOS ALTOS',
    'PALÍN',
    'PANAJACHEL',
    'PANZÓS',
    'PARRAMOS',
    'PASACO',
    'PASTORES',
    'PATULUL',
    'PATZICÍA',
    'PATZITÉ',
    'PATZÚN',
    'POCHUTA',
    'PUEBLO NUEVO',
    'PUEBLO NUEVO VIÑAS',
    'PUERTO BARRIOS',
    'PURULHÁ',
    'QUESADA',
    'QUETZALTENANGO',
    'QUETZALTEPEQUE',
    'RABINAL',
    'RAXRUHÁ',
    'RETALHULEU',
    'RÍO BLANCO',
    'RÍO BRAVO',
    'RÍO HONDO',
    'SACAPULAS',
    'SALAMÁ',
    'SALCAJÁ',
    'SAMAYAC',
    'SAN AGUSTIN ACASAGUASTLÁN',
    'SAN ANA HUISTA',
    'SAN ANDRES',
    'SAN ANDRÉS ITAZAPA',
    'SAN ANDRES SAJCABAJÁ',
    'SAN ANDRÉS SEMETABAJ',
    'SAN ANDRÉS VILLA SECA',
    'SAN ANDRÉS XECUL',
    'SAN ANTONIO AGUAS CALIENTES',
    'SAN ANTONIO HUISTA',
    'SAN ANTONIO ILOTENANGO',
    'SAN ANTONIO LA PAZ',
    'SAN ANTONIO PALOPÓ',
    'SAN ANTONIO SACATEPÉQUEZ',
    'SAN ANTONIO SUCHITEPÉQUEZ',
    'SAN BÁRBARA',
    'SAN BARTOLO',
    'SAN BARTOLOMÉ JOCOTENANGO',
    'SAN BARTOLOMÉ MILPAS ALTAS',
    'SAN BENITO',
    'SAN BERNARDINO',
    'SAN CARLOS ALZATATE',
    'SAN CARLOS SIJA',
    'SAN CATARINA BARAHONA',
    'SAN CRISTOBAL ACASAGUASTLÁN',
    'SAN CRISTOBAL CUCHO',
    'SAN CRISTOBAL TOTONICAPÁN',
    'SAN CRISTÓBAL VERAPAZ',
    'SAN DIEGO',
    'SAN FELIPE',
    'SAN FRANCISCO',
    'SAN FRANCISCO EL ALTO',
    'SAN FRANCISCO LA UNIÓN',
    'SAN FRANCISCO ZAPOTITLÁN',
    'SAN GASPAR IXCHIL',
    'SAN GABRIEL',
    'SAN ILDEFONSO IXTAHUACÁN',
    'SAN JACINTO',
    'SAN JERÓNIMO',
    'SAN JORGE',
    'SAN JOSÉ',
    'SAN JOSÉ ACATEMPA',
    'SAN JOSÉ CHACAYÁ',
    'SAN JOSÉ DEL GOLFO',
    'SAN JOSÉ EL ÍDOLO',
    'SAN JOSÉ LA ARADA',
    'SAN JOSÉ LA MAQUINA',
    'SAN JOSÉ OJETENAM',
    'SAN JOSE PINULA',
    'SAN JOSE POAQUIL',
    'SAN JUAN ATITÁN',
    'SAN JUAN BAUTISTA',
    'SAN JUAN CHAMELCO',
    'SAN JUAN COTZAL',
    'SAN JUAN COMALAPA',
    'SAN JUAN ERMITA',
    'SAN JUAN IXCOY',
    'SAN JUAN LA LAGUNA',
    'SAN JUAN OSTUNCALCO',
    'SAN JUAN SACATEPÉQUEZ',
    'SAN LUIS',
    'SAN LUIS JILOTEPEQUE',
    'SAN LUCAS TOLIMÁN',
    'SAN MANUEL CHAPARRÓN',
    'SAN MARCOS',
    'SAN MARCOS LA LAGUNA',
    'SAN MATIN JILOTEPEQUE',
    'SAN MARTIN SACATEPÉQUEZ',
    'SAN MARTÍN ZAPOTITLÁN',
    'SAN MATEO',
    'SAN MATEO IXTATÁN',
    'SAN MIGUEL ACATÁN',
    'SAN MIGUEL CHICAJ',
    'SAN MIGUEL DUEÑAS',
    'SAN MIGUEL IXTAHUACÁN',
    'SAN MIGUEL PANÁN',
    'SAN MIGUEL PETAPA',
    'SAN MIGUEL SIGÜILÁ',
    'SAN PABLO',
    'SAN PABLO JOCOPILAS',
    'SAN PABLO LA LAGUNA',
    'SAN PEDRO NECTA',
    'SAN PEDRO PINULA',
    'SAN PEDRO SACATEPÉQUEZ',
    'SAN PEDRO SOLOMA',
    'SAN RAFAEL LA INDEPENDENCIA',
    'SAN RAFAÉL LAS FLORES',
    'SAN RAFAEL PETZAL',
    'SAN RAFAEL PIE DE LA CUESTA',
    'SAN SEBASTÁN',
    'SAN SEBASTIÁN COATÁN',
    'SAN SEBASTIÁN HUEHUETENANGO',
    'SAN VICENTE PACAYA',
    'SAN RAYMUNDO',
    'SANARATE',
    'SANSARE',
    'SANTA ANA',
    'SANTA APOLONIA',
    'SANTA BÁRBARA',
    'SANTA CATALINA LA TINTA',
    'SANTA CATARINA IXTAHUACAN',
    'SANTA CATARINA MITA',
    'SANTA CATARINA PALOPÓ',
    'SANTA CATARINA PINULA',
    'SANTA CLARA LA LAGUNA',
    'SANTA CRUZ BALANYÁ',
    'SANTA CRUZ BARILLAS',
    'SANTA CRUZ DEL QUICHE',
    'SANTA CRUZ EL CHOL',
    'SANTA CRUZ LA LAGUNA',
    'SANTA CRUZ MULUÁ',
    'SANTA CRUZ NARANJO',
    'SANTA CRUZ VERAPAZ',
    'SANTA EULALIA',
    'SANTA LUCIA COTZUMALGUAPA',
    'SANTA LUCÍA LA REFORMA',
    'SANTA LUCÍA MILPAS ALTAS',
    'SANTA LUCÍA UTATLÁN',
    'SANTA MARÍA CAHABÓN',
    'SANTA MARÍA CHIQUIMULA',
    'SANTA MARÍA DE JESÚS',
    'SANTA MARÍA IXHUATÁN',
    'SANTA MARÍA VISITACIÓN',
    'SANTA ROSA DE LIMA',
    'SANTIAGO ATITLÁN',
    'SANTIAGO CHIMALTENANGO',
    'SANTIAGO SACATEPÉQUEZ',
    'SANTO DOMINGO SUCHITEPÉQUEZ',
    'SANTO DOMINGO XENACOJ',
    'SANTO TOMAS LA UNIÓN',
    'SAYAXCHÉ',
    'SENAHÚ',
    'SIBILIA',
    'SIBINAL',
    'SIPACAPA',
    'SIQUINALÁ',
    'SOLOLÁ',
    'SUMPANGO',
    'TACANÁ',
    'TACTIC',
    'TAJUMULCO',
    'TAMAHÚ',
    'TAXISCO',
    'TECPÁN',
    'TECTITÁN',
    'TECULUTÁN',
    'TEJUTLA',
    'TIQUISATE',
    'TODOS SANTOS CUCHUMATANES',
    'TOTONICAPÁN',
    'TUCURÚ',
    'UNION CANTINIL',
    'USAPANTÁN',
    'USUMATLÁN',
    'VILLA CANALES',
    'VILLA NUEVA',
    'YEPOCAPA',
    'YUPILTEPEQUE',
    'ZACAPA',
    'ZACUALPA',
    'ZAPOTITLÁN',
    'ZARAGOZA',
    'ZUNIL',
    'ZUNILITO'
  ]

  correo='';

  constructor(private personaService: PersonaService,
              private toastr: ToastrService) {
  }

  @ViewChild('btnClose') btnClose: ElementRef;

  private personas: Persona[];

  ngOnInit() {
    this.getPersonas();
  }

  addCorreo(){
    if(this.correo !== ''){
      this.personaService.selectedPersona.correo.push(this.correo)
      console.log(this.personaService.selectedPersona.correo)
    }else {
      this.toastr.error('Error', 'Introduzca su correo.')
    }
    
  }

  resetCorreo(form?: NgForm){
    if (form) {
      form.reset();
      this.correo = '';
    }
  }

  addPersona(form: NgForm) {
    if (form.valid) {
      if (form.value._id) {
        this.personaService.putPersona(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Persona actualizada.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            this.getPersonas();
            console.log(res);
            this.btnClose.nativeElement.click();
            this.resetForm(form);
          })
      } else {
        this.personaService.postPersona(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Persona guardada.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            console.log(res);
            this.getPersonas();
            this.btnClose.nativeElement.click();
            this.resetForm(form);
          })
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

  editPersona(persona: Persona) {
    this.personaService.selectedPersona = persona;
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

  mostrarCorreoII() {
    this.mostrarCorreo2 = true;
  }

  ocultarCorreoII() {
    this.mostrarCorreo2 = false;
  }

  mostrarCorreoIII() {
    this.mostrarCorreo3 = true;
  }

  ocultarCorreoIII() {
    this.mostrarCorreo3 = false;
  }

  mostrarCorreoIV() {
    this.mostrarCorreo4 = true;
  }

  ocultarCorreoIV() {
    this.mostrarCorreo4 = false;
  }

  mostrarCorreoV() {
    this.mostrarCorreo5 = true;
  }

  ocultarCorreoV() {
    this.mostrarCorreo5 = false;
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

  mostrarOtroI() {
    this.mostrarOtro1 = true;
  }

  ocultarOtroI() {
    this.mostrarOtro1 = false;
  }

  mostrarOtroII() {
    this.mostrarOtro2 = true;
  }

  ocultarOtroII() {
    this.mostrarOtro2 = false;
  }

}
