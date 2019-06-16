import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AsignacionRedService } from '../../services/asignacion-red.service';
import { NgForm } from '@angular/forms';
import { AsignacionRed } from 'src/app/models/asignacion-red';
import { ToastrService } from 'ngx-toastr';

import { RedService } from '../../services/red.service';
import { Red } from 'src/app/models/red';

import { CursoService } from '../../services/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-asignacion-red',
  templateUrl: './asignacion-red.component.html',
  styleUrls: ['./asignacion-red.component.css']
})
export class AsignacionRedComponent implements OnInit {

  redDetalle : string = ""
  cursoDetalle = [] 

  cursoArray = [];
  cursoInput: string = "";

  constructor(  private asignacionRedService: AsignacionRedService,
                private redService: RedService,
                private toastr: ToastrService,
                private cursoService: CursoService
                ) { this.cursoArray = [] }

  @ViewChild('btnClose') btnClose: ElementRef;

  private asignacionesRed: AsignacionRed[];
  private redes: Red[];
  private cursos: Curso[]

  filter_red_de_estudio = '';
  filterCurso = '';

  ngOnInit() {
    this.getAsignacionesRed();
    this.getRedes();
    this.getCursos(); 
  }

  AddAsignacionRed(form: NgForm) {
    if (form.valid) {
      if (form.value._id) {
        if (this.asignacionRedService.selectedAsignacionRed.cursos.length > 0) {
          this.asignacionRedService.selectedAsignacionRed.cursos = this.cursoArray;
          this.asignacionRedService.putASignacionRed(form.value)
            .subscribe(res => {
              this.toastr.success('Accion realizada exitosamente', 'Asignacion actualizada.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
              this.getAsignacionesRed();
              console.log(res);
              this.btnClose.nativeElement.click();
              this.resetForm(form);
              this.cursoArray = []
            })
        } else {
          this.toastr.error('Ningún curso aignado')
        }

      } else {
        if (this.asignacionRedService.selectedAsignacionRed.cursos.length > 0 && this.cursoArray.length > 0) {
          this.asignacionRedService.selectedAsignacionRed.cursos = this.cursoArray;
          this.asignacionRedService.postAsignacionRed(form.value)
            .subscribe(res => {
              this.toastr.success('Accion realizada exitosamente', 'Asignacion guardada.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
              this.getAsignacionesRed();
              console.log(res);
              this.btnClose.nativeElement.click();
              this.resetForm(form);
              this.cursoArray = []
            })
        } else {
          this.toastr.error('Ningún curso aignado')
        }
      }
    } else {
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  getAsignacionesRed() {
    this.asignacionRedService.getASignacionesRed()
      .subscribe(res => {
        this.asignacionRedService.asignacionesRed = res as AsignacionRed[]
        this.toastr.info('Acción realizada exitosamente', 'Asignaciones de Cursos a redes', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
        console.log(res);
      })
  }

  getAsignacionRed(asignacionRed: AsignacionRed){
    this.asignacionRedService.getAsignacionRed(asignacionRed)
    .subscribe(res => {
      console.log(res)
      this.redDetalle = asignacionRed.red_de_estudio;
      this.cursoDetalle = asignacionRed.cursos
    })
  }

  editAsignacionRed(asignacionRed: AsignacionRed) {
    this.asignacionRedService.selectedAsignacionRed._id = asignacionRed._id,
      this.asignacionRedService.selectedAsignacionRed.red_de_estudio = asignacionRed.red_de_estudio,
      this.asignacionRedService.selectedAsignacionRed.cursos = asignacionRed.cursos,
      this.cursoArray = this.asignacionRedService.selectedAsignacionRed.cursos
  }

  deleteASignacionRed(_id: string) {
    if (confirm('¿Quieres eliminar esta asignación?')) {
      this.asignacionRedService.deleteAsignacionREd(_id)
        .subscribe(res => {
          this.getAsignacionesRed();
          this.toastr.warning('Acción realizada exitosamente',
            'Asignacion eliminada.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
        })
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.asignacionRedService.selectedAsignacionRed = new AsignacionRed();
    }
  }

  getRedes() {
    this.redService.getRedes()
      .subscribe(res => {
        this.redService.redes = res as Red[]
        console.log(res);
      })
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
          this.asignacionRedService.selectedAsignacionRed.cursos.push(this.cursoInput);
          this.toastr.success('Agregado')
          this.cursoInput = ""
          console.log(this.cursoArray)
          console.log(this.asignacionRedService.selectedAsignacionRed.cursos)
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
    const curss = this.asignacionRedService.selectedAsignacionRed.cursos.indexOf(curso)

    if (cursos >= 0 && curss >= 0) {
      this.cursoArray.splice(cursos, 1)
      this.asignacionRedService.selectedAsignacionRed.cursos.splice(curss, 1)
      console.log(this.cursoArray)
      console.log(this.asignacionRedService.selectedAsignacionRed.cursos)
      this.toastr.warning('Curso removido')
    }
  }
}
