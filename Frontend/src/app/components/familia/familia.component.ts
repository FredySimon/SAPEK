import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { FamiliaService } from '../../services/familia.service';
import { Familia } from 'src/app/models/familia';

import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit {

  nombre_familia_detalle: string = ""
  hijos_detalle = []
  encargado_detalle: string = ""
  madre_detalle: string = ""
  padre_detalle:string = ""

  hijosArray = []
  hijoInput: string = "";

  constructor(  private familiaService: FamiliaService,
                private personaService: PersonaService,
                private toastr: ToastrService) { 
                  this.hijosArray = []
                }

  @ViewChild('btnClose') btnClose: ElementRef;

  private familias: Familia[];
  private personas: Persona[];
  
  filterHijos='';
  filter_familia='';

  ngOnInit() {
    this.getFamilias();
    this.getPersonas();
  }

  addFamilia(form: NgForm){
    if(form.valid){
      if(form.value._id){
        if(this.familiaService.selectedFamilia.hijos.length > 0 ){
          this.familiaService.putFamilia(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Familia actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            this.getFamilias();
            console.log(res);
            this.btnClose.nativeElement.click();
            this.resetForm(form);
            this.hijosArray = []
          })
        } else {
          this.toastr.error('Para crear familia se necesita mínimo a un hijo.')
        }
        
      }else{
        if(this.familiaService.selectedFamilia.hijos.length > 0 ){
          this.familiaService.postFamilia(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Familia guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
              console.log(res);
              this.getFamilias();
              this.btnClose.nativeElement.click();
              this.resetForm(form);
              this.hijosArray = []
          })
        } else {
          this.toastr.error('Para crear familia se necesita mínimo a un hijo.')
        }
        
      }
    }else {
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
    
  }

  getFamilias(){
    this.familiaService.getFamilias()
    .subscribe(res => {
      this.familiaService.familias = res as Familia[]
      this.toastr.info('Acción realizada exitosamente', 'Familias obtenidas',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    })
  }

  getFamilia(familia: Familia){
    this.familiaService.getFamilia(familia)
    .subscribe(res => {
      console.log(res)
      this.nombre_familia_detalle = familia.nombre_familia
      this.hijos_detalle = familia.hijos
      this.encargado_detalle = familia.encargado
      this.padre_detalle = familia.padre
      this.madre_detalle = familia.madre
    })
  }

  editFamilia(familia: Familia){
    this.familiaService.selectedFamilia = familia;
    this.hijosArray = familia.hijos;
  }

  deleteFamilia(_id: string){
    if(confirm('¿Quieres eliminar a esta familia?')){
      this.familiaService.deleteFamilia(_id)
      .subscribe(res => {
        this.getFamilias();
        this.toastr.warning('Acción realizada exitosamente',
          'Familia eliminada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      })
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.personaService.selectedPersona = new Persona();
    }
  }

  getPersonas(){
    this.personaService.getPersonas()
    .subscribe(res=> {
      this.personaService.personas = res as Persona[]
      console.log(res);
    })
  }

  pasarHijo(persona: Persona){
    this.hijoInput = persona.primer_nombre+ ' ' + persona.segundo_nombre + ' ' + persona.primer_apellido + ' ' + persona.segundo_apellido

    this.familiaService.selectedFamilia.nombre_familia = persona.primer_apellido + ' - ' + persona.segundo_apellido
  }

  seleccionarHijo(){
    if(this.hijoInput !== ""){
      if(this.hijosArray.length < 5){
        if(this.hijosArray.indexOf(this.hijoInput) > -1){
          this.toastr.error('Esta persona ya fué escogida.')
        } else {
          this.hijosArray.push(this.hijoInput)
          this.familiaService.selectedFamilia.hijos = this.hijosArray
          this.toastr.success('Agregado')
          this.hijoInput = ""
          console.log(this.hijosArray)
          console.log(this.familiaService.selectedFamilia.hijos)
        }
      }else{
        this.toastr.error('Máximo 5 hijos.')
      }
    } else {
      this.toastr.error('Ningún hijo seleccionado.')
    }
  }

  quitarHijo(hijo: any){
    const hijos = this.hijosArray.indexOf(hijo)
    const hijs = this.familiaService.selectedFamilia.hijos.indexOf(hijo)

    if(hijos>= 0 && hijs >= 0){
      this.hijosArray.splice(hijos, 1)
      this.familiaService.selectedFamilia.hijos.splice(hijs, 1)
      this.toastr.warning('Persona removida.')
    }
  }  
}
