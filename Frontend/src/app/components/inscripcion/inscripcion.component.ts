import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { InscripcionService } from '../../services/inscripcion.service';
import { Inscripcion } from 'src/app/models/inscripcion';

import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/persona';

import { UnidadService } from '../../services/unidad.service';
import { Unidad } from 'src/app/models/unidad';

import { CarreraService } from '../../services/carrera.service';
import { Carrera } from 'src/app/models/carrera';

import { CursoService } from '../../services/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  estudiante_detalle : string = ""
  unidad_academca_detalle : string = ""
  jornada_detalle : string = ""
  cuota_mensual_detalle : string = ""
  grado_detalle : string = ""
  carrera_detalle : string = ""
  seccion_detalle : string = ""
  curso_detalle : string = ""

  constructor(private toastr: ToastrService,
                private inscripcionService: InscripcionService,
                private personaService: PersonaService,
                private unidadService: UnidadService,
                private carreraService: CarreraService,
                private cursoService: CursoService) { }

                @ViewChild('btnClose') btnClose: ElementRef;

                private inscripciones: Inscripcion[];
                private personas: Persona[];
                private unidades: Unidad[];
                private carreras: Carrera[];
                private cursos: Curso[];

                filter_inscripcion = '';

  ngOnInit() {
    this.getInscripciones();
    this.getPersonas();
    this.getUnidades();
    this.getCarreras();
    this.getCursos();
  }

  addInscripcion(form: NgForm){
    if(form.valid){
      if(form.value._id){
        this.inscripcionService.putInscripcion(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Inscripción actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getInscripciones();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }else {
        this.inscripcionService.postInscripcion(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Inscripción guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getInscripciones();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }
    } else {
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  getInscripciones(){
    this.inscripcionService.getInscripciones()
    .subscribe(res => {
      this.inscripcionService.inscripciones = res as Inscripcion[]
      this.toastr.info('Acción realizada exitosamente', 'Inscripciones obtenidas',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    })
  }

  getInscripcion(inscripcion: Inscripcion){
    this.inscripcionService.getInscripcion(inscripcion)
    .subscribe(res => {
      console.log(res)
      this.estudiante_detalle = inscripcion.estudiante
      this.unidad_academca_detalle = inscripcion.unidad_academica
      this.jornada_detalle = inscripcion.jornada
      this.cuota_mensual_detalle = inscripcion.cuota_mensual
      this.grado_detalle = inscripcion.grado
      this.carrera_detalle = inscripcion.carrera
      this.seccion_detalle = inscripcion.seccion
      this.curso_detalle = inscripcion.curso
    })
  }

  editInscripcion(inscripcion: Inscripcion){
    this.inscripcionService.selectedInscripcion = inscripcion;
  }

  deleteInscripcion(_id: string){
    if(confirm('¿Quieres eliminar esta inscripción?')){
      this.inscripcionService.deleteInscripcion(_id)
      .subscribe(res => {
        this.getInscripciones();
        this.toastr.warning('Acción realizada exitosamente',
          'Inscripción eliminada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.inscripcionService.selectedInscripcion = new Inscripcion();
    }
  }

  getPersonas(){
    this.personaService.getPersonas()
    .subscribe(res=> {
      this.personaService.personas = res as Persona[]
      console.log(res);
    })
  }

  getUnidades(){
    this.unidadService.getUnidades()
    .subscribe(res => {
      this.unidadService.unidades = res as Unidad[]
      console.log(res);
    })
  }

  getCarreras(){
    this.carreraService.getCarreras()
    .subscribe(res => {
      this.carreraService.carreras = res as Carrera[]
      console.log(res);
    })
  }

  getCursos(){
    this.cursoService.getCursos()
    .subscribe(res => {
      this.cursoService.cursos = res as Curso[]
      console.log(res)
    })
  }

}
