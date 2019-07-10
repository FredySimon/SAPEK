import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AsignacionCarrerasService } from '../../services/asignacion-carreras.service';
import { AsignacionCarreras } from 'src/app/models/asignacion-carreras';

import { AsignacionCursosService } from '../../services/asignacion-cursos.service';
import { AsignacionCursos} from 'src/app/models/asignacion-cursos';

import { CursoService } from '../../services/curso.service';
import { Curso } from 'src/app/models/curso';

import { CarreraService } from '../../services/carrera.service';
import { Carrera } from 'src/app/models/carrera';

import { InstructorService } from '../../services/instructor.service';
import { Intructor } from 'src/app/models/intructor';

@Component({
  selector: 'app-asignacion-carreras',
  templateUrl: './asignacion-carreras.component.html',
  styleUrls: ['./asignacion-carreras.component.css']
})
export class AsignacionCarrerasComponent implements OnInit {

  detalle_grado_jornada:string = ''
  detalle_grado_seccion:string = ""
  detalle_grado_grado:string = ""
  detalle_grado_carrera:string = ""
  detalle_grado_instructores = []

  detalle_curso_jornada: string = ""
  detalle_curso_curso: string = ""
  detalle_curso_instructores = []

  asignarCarrera: Boolean = false;
  asignarCurso: Boolean = false;

  instructoresArrayCarrera = [];
  instructorInputCarrera: string = "";

  instructoresArrayCurso = [];
  instructorInputCurso: string = "";

  constructor(  private asignacionCarrerasService: AsignacionCarrerasService,
                private carreraService: CarreraService, 
                private instructorService: InstructorService,
                private asignacionCursosService: AsignacionCursosService,
                private cursoService: CursoService,
                private toastr: ToastrService) { 
                  this.instructoresArrayCarrera = [];
                  this.instructoresArrayCurso = [];
                }

                @ViewChild('btnClose') btnClose: ElementRef;

                private asignacionesCarreras: AsignacionCarreras[];
                private carreras: Carrera[];
                private instructores: Intructor[];
                private asignacionesCursos: AsignacionCursos[];
                private cursos: Curso[];

                filter_instructor_carrera = '';
                filter_instructor_curso = '';
                filter_asignacion_carreras = '';
                filter_asignacion_cursos = '';

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
        if(this.asignacionCarrerasService.selectedAsignacionCarreras.instructores.length > 0 ){
          this.asignacionCarrerasService.putAsignacionCarreras(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Asignacion actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            this.getAsignacionesCarreras();
            console.log(res);
            this.btnClose.nativeElement.click();
            this.resetForm(form);
            this.instructoresArrayCarrera = []
          })
        } else {
          this.toastr.error('Mínimo un instructor.')
        }
        
      }else {
        if(this.asignacionCarrerasService.selectedAsignacionCarreras.instructores.length > 0 ){
          this.asignacionCarrerasService.postAsignacionCarreras(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Asignacion guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            this.getAsignacionesCarreras();
            console.log(res);
            this.btnClose.nativeElement.click();
            this.resetForm(form);
            this.instructoresArrayCarrera = []
          })
        } else {
          this.toastr.error('Mínimo un instructor.')
        }
        
      }
    }else{
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  addAsignacionCursos(form : NgForm){
    if(form.valid){
      if(form.value._id){
        if(this.asignacionCursosService.selectedAsignacionCursos.instructores.length > 0){
          this.asignacionCursosService.putAsignacionCursos(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Asignacion actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            this.getAsignacionesCursos();
            console.log(res);
            this.btnClose.nativeElement.click();
            this.resetForm(form);
          })
        }else {
          this.toastr.error('Mínimo un instructor.')
        }  
      }else {
        if(this.asignacionCursosService.selectedAsignacionCursos.instructores.length > 0){
          this.asignacionCursosService.postAsignacionCursos(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Asignacion guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getAsignacionesCursos();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
        } else {
          this.toastr.error('Mínimo un instructor.')
        }      
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

  getAsignacionCarrera(asignacionCarreras: AsignacionCarreras){
    this.asignacionCarrerasService.getAsignacionCarreras(asignacionCarreras)
      .subscribe(res => {
        this.detalle_grado_jornada = asignacionCarreras.jornada
        this.detalle_grado_seccion = asignacionCarreras.seccion
        this.detalle_grado_grado = asignacionCarreras.grado
        this.detalle_grado_carrera = asignacionCarreras.carrera
        this.detalle_grado_instructores = asignacionCarreras.instructores
      }) 
  }

  getASignacionCurso(asignacionCursos: AsignacionCursos){
    this.asignacionCursosService.getAsignacionCursos(asignacionCursos)
    .subscribe(res => {
      this.detalle_curso_jornada = asignacionCursos.jornada
      this.detalle_curso_curso = asignacionCursos.curso
      this.detalle_curso_instructores = asignacionCursos.instructores
    })
  }

  editAsignacionCarreras(asignacionCarreras: AsignacionCarreras){
    this.asignacionCarrerasService.selectedAsignacionCarreras = asignacionCarreras;
    this.instructoresArrayCarrera = asignacionCarreras.instructores
  }

  editAsignacionCursos(asignacionCursos: AsignacionCursos){
    this.asignacionCursosService.selectedAsignacionCursos = asignacionCursos;
    this.instructoresArrayCurso = asignacionCursos.instructores
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

  getInstructores(){
    this.instructorService.getInstructores()
    .subscribe(res =>{
      this.instructorService.instructores = res as Intructor[]
      console.log(res);
    })
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

  pasarInstructorCarrera(instructor: Intructor){
    this.instructorInputCarrera = instructor.persona
  }

  pasarInstructorCurso(instructor: Intructor){
    this.instructorInputCurso = instructor.persona
  }

  seleccionarInstructorCarrera(){
    if(this.instructorInputCarrera !== ""){
      if (this.instructoresArrayCarrera.length < 3){
        if (this.instructoresArrayCarrera.indexOf(this.instructorInputCarrera) > -1){
          this.toastr.error('Instructor duplicado')
        } else {
          this.asignacionCarrerasService.selectedAsignacionCarreras.instructores.push(this.instructorInputCarrera)
          this.instructoresArrayCarrera = this.asignacionCarrerasService.selectedAsignacionCarreras.instructores
          this.toastr.success('Agregado')
          this.instructorInputCarrera = ""
          console.log(this.instructoresArrayCarrera)
          console.log(this.asignacionCarrerasService.selectedAsignacionCarreras.instructores)
        }
      } else {
        this.toastr.error('Máximo 3 instructores.')
      }
    } else {
      this.toastr.error('Escoja un instructor.')
    }
  }

  seleccionarInstructorCurso(){
    if(this.instructorInputCurso !== ""){
      if(this.instructoresArrayCurso.length < 3){
        if(this.instructoresArrayCurso.indexOf(this.instructorInputCurso) > -1){
          this.toastr.error('Instructor duplicado')
        }else {
          this.asignacionCursosService.selectedAsignacionCursos.instructores.push(this.instructorInputCurso)
          this.instructoresArrayCurso = this.asignacionCursosService.selectedAsignacionCursos.instructores
          this.toastr.success('Agregado')
          this.instructorInputCurso = ""
        }
      } else {
        this.toastr.error('Máximo 3 instructores.')
      }
    } else {
      this.toastr.error('Escoja un instructor.')
    }
  }

  quitarInstructorCarrera(instructor: any){
    const instructores = this.instructoresArrayCarrera.indexOf(instructor);
    const instructors = this.asignacionCarrerasService.selectedAsignacionCarreras.instructores.indexOf(instructor)

    if(instructores >= 0 && instructors >= 0){
      this.instructoresArrayCarrera.splice(instructores, 1)
      this.asignacionCarrerasService.selectedAsignacionCarreras.instructores.splice(instructors, 1)
      this.toastr.warning('Instructor removido')
    }
  }

  quitarInstructorcurso(instructor: any){
    const instructores = this.instructoresArrayCurso.indexOf(instructor)
    const instructors = this.asignacionCursosService.selectedAsignacionCursos.instructores.indexOf(instructor)

    if(instructores >= 0 && instructors >= 0){
      this.instructoresArrayCurso.splice(instructores, 1)
      this.asignacionCursosService.selectedAsignacionCursos.instructores.splice(instructors, 1)
      this.toastr.warning('Instructor removido.')
    }
  }
}
