import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AsignacionCarrerasService } from '../../services/asignacion-carreras.service';
import { NgForm } from '@angular/forms';
import { AsignacionCarreras } from 'src/app/models/asignacion-carreras';
import { ToastrService } from 'ngx-toastr';

import { AsignacionCursosService } from '../../services/asignacion-cursos.service';
import { AsignacionCursos} from 'src/app/models/asignacion-cursos';

import { CursoService } from '../../services/curso.service';
import { Curso } from 'src/app/models/curso';

import { CarreraService } from '../../services/carrera.service';
import { Carrera } from 'src/app/models/carrera';

import { InstructorService } from '../../services/instructor.service';
import { Intructor } from 'src/app/models/intructor';
import { callbackify } from 'util';
import { ValueSansProvider } from '@angular/core/src/di/provider';

@Component({
  selector: 'app-asignacion-carreras',
  templateUrl: './asignacion-carreras.component.html',
  styleUrls: ['./asignacion-carreras.component.css']
})
export class AsignacionCarrerasComponent implements OnInit {

  asignarCarrera: Boolean = false;
  asignarCurso: Boolean = false;

  mostrarInstructor2: Boolean = false;
  mostrarInstructor3: Boolean = false;

  mostrarInstructorDos: Boolean = false;
  mostrarInstructorTres: Boolean = false;

  constructor(  private asignacionCarrerasService: AsignacionCarrerasService,
                private carreraService: CarreraService, 
                private instructorService: InstructorService,
                private asignacionCursosService: AsignacionCursosService,
                private cursoService: CursoService,
                private toastr: ToastrService) { }

                @ViewChild('btnClose') btnClose: ElementRef;

                private asignacionesCarreras: AsignacionCarreras[];
                private carreras: Carrera[];
                private instructores: Intructor[];
                private asignacionesCursos: AsignacionCursos[];
                private cursos: Curso[];

                filterCarrera = '';
                filterInstructor = '';
                filterInstructor1 = '';
                filterInstructor2= '';
                filterCurso = '';
                filterInstructorI = '';
                filterInstructorII = '';
                filterInstructorIII = '';

  ngOnInit() {
    this.getAsignacionesCarreras();
    this.getCarreras();
    this.getInstructores();
    this.getAsignacionesCursos();
    this.getCursos();
  }

  addAsignacionCarreras(form : NgForm){

    if(form.valid ){
      if(form.value._id){
        this.asignacionCarrerasService.putAsignacionCarreras(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Asignacion actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getAsignacionesCarreras();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }else {
        this.asignacionCarrerasService.postAsignacionCarreras(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Asignacion guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getAsignacionesCarreras();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }
    }else{
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  addAsignacionCursos(form : NgForm){
    if(form.valid){
      if(form.value._id){
        this.asignacionCursosService.putAsignacionCursos(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Asignacion actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getAsignacionesCursos();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }else {
        this.asignacionCursosService.postAsignacionCursos(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Asignacion guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getAsignacionesCursos();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }
    }else{
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  getAsignacionesCarreras(){
    this.asignacionCarrerasService.getAsignacionesCarreras()
    .subscribe(res => {
      this.asignacionCarrerasService.asignacionesCarreras = res as AsignacionCarreras[]
      this.toastr.info('Acción realizada exitosamente', 'Asignaciones de Carreras obtenidas',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    })
  }

  getAsignacionesCursos(){
    this.asignacionCursosService.getASignacionesCursos()
    .subscribe(res => {
      this.asignacionCursosService.asignacionesCursos = res as AsignacionCursos[]
      this.toastr.info('Acción realizada exitosamente', 'Asignaciones de Cursos obtenidas',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    })
  }

  editAsignacionCarreras(asignacionCarreras: AsignacionCarreras){
    this.asignacionCarrerasService.selectedAsignacionCarreras = asignacionCarreras;
  }

  editAsignacionCursos(asignacionCursos: AsignacionCursos){
    this.asignacionCursosService.selectedAsignacionCursos = asignacionCursos;
  }

  deleteAsignacionCarreras(_id: string){
    if(confirm('¿Quieres eliminar esta asignación?')){
      this.asignacionCarrerasService.deleteAsignacionCarreras(_id)
      .subscribe(res => {
        this.getAsignacionesCarreras();
        this.toastr.warning('Acción realizada exitosamente',
        'Asignacion eliminada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      })
    }
  }

  deleteAsignacionCursos(_id: string){
    if(confirm('¿Quieres eliminar esta asignación?')){
      this.asignacionCursosService.deleteAsignacionCursos(_id)
      .subscribe(res => {
        this.getAsignacionesCursos();
        this.toastr.warning('Acción realizada exitosamente',
        'Asignacion eliminada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      })
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.asignacionCarrerasService.selectedAsignacionCarreras = new AsignacionCarreras();
      this.asignacionCursosService.selectedAsignacionCursos = new AsignacionCursos();
    }
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
      console.log(res);
    })
  }

  seleccionarCarrera(carrera: Carrera){
    let idCarrera:string = carrera._id;
    let nombre_carrera:string = carrera.nombre_carrera;
    let codigo_carrera:string = carrera.codigo;
    this.asignacionCarrerasService.selectedAsignacionCarreras.carrera = idCarrera;
    this.asignacionCarrerasService.selectedAsignacionCarreras.nombre_carrera = nombre_carrera;
    this.asignacionCarrerasService.selectedAsignacionCarreras.codigo_carrera = codigo_carrera;
  }

  seleccionarCurso(curso: Curso){
    let idCurso:string = curso._id;
    let nombre_curso:string = curso.nombre_curso;
    let codigo_curso:string = curso.codigo_curso;
    this.asignacionCursosService.selectedAsignacionCursos.curso = idCurso;
    this.asignacionCursosService.selectedAsignacionCursos.nombre_curso = nombre_curso;
    this.asignacionCursosService.selectedAsignacionCursos.codigo_curso = codigo_curso;
  }

  getInstructores(){
    this.instructorService.getInstructores()
    .subscribe(res =>{
      this.instructorService.instructores = res as Intructor[]
      console.log(res);
    })
  }

  seleccionarInstructor(instructor: Intructor){
    let idInstructor:string = instructor._id;
    let nombre_instructor:string = instructor.nombre_persona;
    this.asignacionCarrerasService.selectedAsignacionCarreras.instructor = idInstructor;
    this.asignacionCarrerasService.selectedAsignacionCarreras.nombre_instructor = nombre_instructor;
  }

  seleccionarInstructor1(instructor: Intructor){
    let idInstructor:string = instructor._id;
    let nombre_instructor:string = instructor.nombre_persona;
    this.asignacionCarrerasService.selectedAsignacionCarreras.instructor1 = idInstructor;
    this.asignacionCarrerasService.selectedAsignacionCarreras.nombre_instructor1 = nombre_instructor;
    console.log(nombre_instructor)
  }

  seleccionarInstructor2(instructor: Intructor){
    let idInstructor:string = instructor._id;
    let nombre_instructor:string = instructor.nombre_persona;
    this.asignacionCarrerasService.selectedAsignacionCarreras.instructor2 = idInstructor;
    this.asignacionCarrerasService.selectedAsignacionCarreras.nombre_instructor2 = nombre_instructor;
  }

  seleccionarInstructorI(instructor: Intructor){
    let idInstructor:string = instructor._id;
    let nombre_instructor:string = instructor.nombre_persona;
    this.asignacionCursosService.selectedAsignacionCursos.instructor = idInstructor;
    this.asignacionCursosService.selectedAsignacionCursos.nombre_instructor = nombre_instructor;
  }

  seleccionarInstructorII(instructor: Intructor){
    let idInstructor:string = instructor._id;
    let nombre_instructor:string = instructor.nombre_persona;
    this.asignacionCursosService.selectedAsignacionCursos.instructor1 = idInstructor;
    this.asignacionCursosService.selectedAsignacionCursos.nombre_instructor1 = nombre_instructor;
  }

  seleccionarInstructorIII(instructor: Intructor){
    let idInstructor:string = instructor._id;
    let nombre_instructor:string = instructor.nombre_persona;
    this.asignacionCursosService.selectedAsignacionCursos.instructor2 = idInstructor;
    this.asignacionCursosService.selectedAsignacionCursos.nombre_instructor2 = nombre_instructor;
  }

  mostrarInstructorII(){
    this.mostrarInstructor2 = true;
  }

  ocultarInstructorII(){
    this.mostrarInstructor2 = false;
  }

  mostrarInstructorIII(){
    this.mostrarInstructor3 = true;
  }

  ocultarInstructorIII(){
    this.mostrarInstructor3 = false;
  }

  mostrarInstruc2(){
    this.mostrarInstructorDos = true;
  }

  ocultarInstruc2(){
    this.mostrarInstructorDos = false;
  }

  mostrarInstruc3(){
    this.mostrarInstructorTres = true;
  }

  ocultarInstruc3(){
    this.mostrarInstructorTres = false;
  }

  moCarrera(){
    if(this.asignarCarrera != false){
      this.asignarCarrera = false
      this.asignarCurso = false
    } else {
      this.asignarCarrera = true
      this.asignarCurso = false
    }
  }

  moCurso(){
    if(this.asignarCurso != false){
      this.asignarCurso = false
      this.asignarCarrera = false
    } else {
      this.asignarCurso = true
      this.asignarCarrera = false
    }
  }
}
