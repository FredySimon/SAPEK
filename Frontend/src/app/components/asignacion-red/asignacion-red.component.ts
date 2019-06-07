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

    cursoArray = [];
    cursoInput: string = "";

  constructor(  private asignacionRedService: AsignacionRedService,
                private redService: RedService,
                private toastr: ToastrService,
                private cursoService: CursoService 
                ) { this.cursoArray = []}

                @ViewChild('btnClose') btnClose: ElementRef;

                private asignacionesRed: AsignacionRed[];
                private redes: Red[];
                private cursos: Curso[]

                filterRed = '';
                filterCurso = '';

  ngOnInit() {
    this.getAsignacionesRed();
    this.getRedes();
    this.getCursos();
  }

  AddAsignacionRed(form: NgForm){
    if(form.valid){
      if(form.value._id){
        this.asignacionRedService.selectedAsignacionRed.cursos = this.cursoArray;
        this.asignacionRedService.putASignacionRed(form.value)
        .subscribe (res => {
          this.toastr.success('Accion realizada exitosamente', 'Asignacion actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getAsignacionesRed();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
          this.cursoArray = []
        })
      } else {
        this.asignacionRedService.selectedAsignacionRed.cursos = this.cursoArray;
        this.asignacionRedService.postAsignacionRed(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Asignacion guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getAsignacionesRed();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
          this.cursoArray = []
        })
      }
    }else {
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  getAsignacionesRed(){
    this.asignacionRedService.getASignacionesRed()
    .subscribe(res => {
      this.asignacionRedService.asignacionesRed = res as AsignacionRed[]
      this.toastr.info('Acción realizada exitosamente', 'Asignaciones de Carreras obtenidas',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    })
  }

  editAsignacionRed(asignacionRed: AsignacionRed){
    this.asignacionRedService.selectedAsignacionRed = asignacionRed
  }

  deleteASignacionRed(_id: string){
    if(confirm('¿Quieres eliminar esta asignación?')){
      this.asignacionRedService.deleteAsignacionREd(_id)
      .subscribe(res => {
        this.getAsignacionesRed();
        this.toastr.warning('Acción realizada exitosamente',
        'Asignacion eliminada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.asignacionRedService.selectedAsignacionRed = new AsignacionRed();
    }
  }

  getRedes(){
    this.redService.getRedes()
    .subscribe(res => {
      this.redService.redes = res as Red[]
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

  seleccionarRed(red: Red){
    let idRed:string = red._id;
    let nombre_red:string =red.nombre_red;
    let fecha_inicio:string = red.fecha_inicio;
    let fecha_final:string = red.fecha_final;
    this.asignacionRedService.selectedAsignacionRed.red = idRed;
    this.asignacionRedService.selectedAsignacionRed.nombre_red = nombre_red;
    this.asignacionRedService.selectedAsignacionRed.fecha_inicio = fecha_inicio;
    this.asignacionRedService.selectedAsignacionRed.fecha_final = fecha_final;
    this.toastr.success('Agregada')
  }

  pasarCurso(curso: Curso){
    this.cursoInput = curso.nombre_curso
  }

  seleccionarCurso(){
    if(this.cursoInput !== "" ){
      if(this.cursoArray.length < 15){
        if(this.cursoArray.indexOf(this.cursoInput) > -1){
          this.toastr.error('Curso duplicado')
        }else {  
          this.cursoArray.push(this.cursoInput)
          this.asignacionRedService.selectedAsignacionRed.cursos.push(this.cursoInput);
          this.toastr.success('Agrgado')
          this.cursoInput = ""
          console.log(this.cursoArray)       
          console.log(this.asignacionRedService.selectedAsignacionRed.cursos)
        }
        
      }else{
        this.toastr.error('Máximo 15')
      }
    }else{
      this.toastr.error('Ingrse un curso.')
    }
  }

  quitarCurso(curso: any){
    const cursos = this.cursoArray.indexOf(curso);
    const curss = this.asignacionRedService.selectedAsignacionRed.cursos.indexOf(curso)

    if(cursos >= 0 && curss >= 0){
      this.cursoArray.splice(cursos, 1)
      this.asignacionRedService.selectedAsignacionRed.cursos.splice(curss, 1)
      console.log(this.cursoArray)       
        console.log(this.asignacionRedService.selectedAsignacionRed.cursos)
        this.toastr.warning('Curso removido')
    }
  }

}
