import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RedService } from 'src/app/services/red.service';
import { NgForm } from '@angular/forms';
import { Red } from 'src/app/models/red';
import { ToastrService } from 'ngx-toastr';

import { CarreraService } from '../../services/carrera.service';
import { Carrera } from 'src/app/models/carrera';

import { AsignacionCarrerasService } from '../../services/asignacion-carreras.service';
import { AsignacionCarreras } from 'src/app/models/asignacion-carreras';

import { CursoService } from '../../services/curso.service';
import { Curso } from 'src/app/models/curso';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  cursoArray = [];
  cursoInput: string = "";

  constructor(  private redService: RedService,
                private carreraService: CarreraService,
                private asignacionCarrerasService: AsignacionCarrerasService,
                private cursoService: CursoService,
                private toastr: ToastrService) { }

                @ViewChild('btnClose') btnClose: ElementRef;

                private redes: Red[];
                private carreras: Carrera[];
                private asignacionesCarreras: AsignacionCarreras[];
                private cursos: Curso[]

                filterCarrera = '';
                filter_asignacion_carreras ='';
                filterCurso = '';

  ngOnInit() {
    this.getRedes();
    this.getCarreras();
    this.getAsignacionesCarreras();
    this.getCursos();
  }

  addRed(form: NgForm){
    if(form.valid){
      if(form.value._id){
        this.redService.putRed(form.value)
        .subscribe (res => {
          this.toastr.success('Accion realizada exitosamente', 'Red actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getRedes();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }else{
        this.redService.postRed(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Red guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getRedes();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }
    }else {
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  getRedes(){
    this.redService.getRedes()
    .subscribe(res => {
      this.redService.redes = res as Red[]
      this.toastr.info('Acción realizada exitosamente', 'Redes obtenidas',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    })
  }

  editRed(red: Red){
    this.redService.selectedRed = red;
  }

  deleteRed(_id: string){
    if(confirm('¿Quieres eliminar esta red?')){
      this.redService.deleteRed(_id)
      .subscribe(res => {
        this.getRedes();
        this.toastr.warning('Acción realizada exitosamente',
          'Red eliminada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.redService.selectedRed = new Red();
    }
  }

  getCarreras(){
    this.carreraService.getCarreras()
    .subscribe(res => {
      this.carreraService.carreras = res as Carrera[]
      console.log(res);
    })
  }

  getAsignacionesCarreras(){
    this.asignacionCarrerasService.getAsignacionesCarreras()
    .subscribe(res => {
      this.asignacionCarrerasService.asignacionesCarreras = res as AsignacionCarreras[]
      console.log(res);
    })
  }

  seleccionarAsignacionCarreras(asignacionCarreras: AsignacionCarreras){
    let jornada:string = asignacionCarreras.jornada
    let seccion:string = asignacionCarreras.seccion
    let grado:string = asignacionCarreras.grado

    this.redService.selectedRed.jornada = jornada
    this.redService.selectedRed.seccion = seccion
    this.redService.selectedRed.grado = grado
  }

  getCursos() {
    this.cursoService.getCursos()
      .subscribe(res => {
        this.cursoService.cursos = res as Curso[]
        console.log(res);
      })
  }

  pasarCurso(curso: Curso) {
    this.cursoInput = curso.nombre_curso
  }

  seleccionarCurso() {
    if (this.cursoInput !== "") {
      if (this.cursoArray.length < 20) {
        if (this.cursoArray.indexOf(this.cursoInput) > -1) {
          this.toastr.error('Curso duplicado')
        } else {
          this.cursoArray.push(this.cursoInput)
          this.redService.selectedRed.cursos.push(this.cursoInput);
          this.toastr.success('Agregado')
          this.cursoInput = ""
          console.log(this.cursoArray)
          console.log(this.redService.selectedRed.cursos)
        }

      } else {
        this.toastr.error('Máximo 20 cursos.')
      }
    } else {
      this.toastr.error('Ingrse un curso.')
    }
  }

  quitarCurso(curso: any) {
    const cursos = this.cursoArray.indexOf(curso);
    const curss = this.redService.selectedRed.cursos.indexOf(curso)

    if (cursos >= 0 && curss >= 0) {
      this.cursoArray.splice(cursos, 1)
      this.redService.selectedRed.cursos.splice(curss, 1)
      console.log(this.cursoArray)
      console.log(this.redService.selectedRed.cursos)
      this.toastr.warning('Curso removido')
    }
  }

}
