import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { NgForm } from '@angular/forms';
import { Intructor } from 'src/app/models/intructor';
import { ToastrService } from 'ngx-toastr';

import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  codigo_profesor_detalle: string = ""
  persona_detalle: string = "" 
  profesion_detalle: string = ""

  constructor(  private instructorService: InstructorService,
                private personaService: PersonaService,
                private toastr: ToastrService) { }

@ViewChild('btnClose') btnClose: ElementRef;

private instructor: Intructor[];
private personas: Persona[];

filterInstructor = '';

  ngOnInit() {
    this.getInstructores();
    this.getPersonas();
  }

  addInstructor(form: NgForm){
     if(form.valid){
      if(form.value._id){
        this.instructorService.putInstructor(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Instructor actualizado.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getInstructores();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }else{
        this.instructorService.postInstructor(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Instructor guardado.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            this.getInstructores();
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

  getInstructores(){
    this.instructorService.getInstructores()
      .subscribe(res => {
        this.instructorService.instructores = res as Intructor[]
        this.toastr.info('Acción realizada exitosamente', 'Instructores obtenidos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
      })
  }

  getInstructor(instructor: Intructor){
    this.instructorService.getInstructor(instructor)
    .subscribe(res => {
      this.codigo_profesor_detalle = instructor.codigo_profesor
      this.persona_detalle = instructor.persona
      this.profesion_detalle = instructor.profesion
    })
  }

  editInstructor(instructor: Intructor){
    this.instructorService.selectedInstructor = instructor;
  }

  deleteInstructor(_id: string){
    if(confirm('¿Quieres eliminar a este instructor?')){
      this.instructorService.deleteInstructor(_id)
      .subscribe(res => {
        this.getInstructores();
        this.toastr.warning('Acción realizada exitosamente',
        'Instructor eliminado.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      })
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.instructorService.selectedInstructor = new Intructor();
    }
  }

  getPersonas(){
    this.personaService.getPersonas()
    .subscribe(res=> {
      this.personaService.personas = res as Persona[]
      console.log(res);
    })
  }

  generarCodigo(){
   var A = Math.round(Math.random()*200)
   var B = ' - INS'
 
 console.log(A + B)
    this.instructorService.selectedInstructor.codigo_profesor = A + B;
  }

}
