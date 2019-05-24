import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FamiliaService } from '../../services/familia.service';
import { NgForm } from '@angular/forms';
import { Familia } from 'src/app/models/familia';
import { ToastrService } from 'ngx-toastr';

import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit {

  mostrarHijo2: Boolean = false;
  mostrarHijo3: Boolean = false;
  mostrarHijo4: Boolean = false;
  mostrarHijo5: Boolean = false;

  constructor(  private familiaService: FamiliaService,
                private personaService: PersonaService,
                private toastr: ToastrService) { }

  @ViewChild('btnClose') btnClose: ElementRef;

  private familias: Familia[];

  private personas: Persona[];
  
  filterEncargado = '';
  filterPadre='';
  filterMadre='';
  filterHijo1='';
  filterHijo2='';
  filterHijo3='';
  filterHijo4='';
  filterHijo5='';

  ngOnInit() {
    this.getFamilias();
    this.getPersonas();
  }

  addFamilia(form: NgForm){
    if(form.valid){
      if(form.value._id){
        this.familiaService.putFamilia(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Familia actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getFamilias();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }else{
        this.familiaService.postFamilia(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Familia guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            console.log(res);
            this.getFamilias();
            this.btnClose.nativeElement.click();
            this.resetForm(form);
        })
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

  editFamilia(familia: Familia){
    this.familiaService.selectedFamilia = familia;
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

  seleccionarHijo1(persona: Persona){
    let idHijo:string =persona._id;
    let nombre:string = persona.primer_nombre;
    let apellido:string = persona.primer_apellido;
    this.familiaService.selectedFamilia.hijo1 = idHijo;
    this.familiaService.selectedFamilia.nombreHijo1 = apellido + '_' +nombre;   
  }

  seleccionarHijo2(persona: Persona){
    let idHijo:string =persona._id;
    let nombre:string = persona.primer_nombre;
    let apellido:string = persona.primer_apellido;
    this.familiaService.selectedFamilia.hijo2 = idHijo;   
    this.familiaService.selectedFamilia.nombreHijo2 = apellido + '_' +nombre;   
  }

  seleccionarHijo3(persona: Persona){
    let idHijo:string =persona._id;
    let nombre:string = persona.primer_nombre;
    let apellido:string = persona.primer_apellido;
    this.familiaService.selectedFamilia.hijo3 = idHijo;  
    this.familiaService.selectedFamilia.nombreHijo3 = apellido + '_' +nombre;  
  }

  seleccionarHijo4(persona: Persona){
    let idHijo:string =persona._id;
    let nombre:string = persona.primer_nombre;
    let apellido:string = persona.primer_apellido;
    this.familiaService.selectedFamilia.hijo4 = idHijo;  
    this.familiaService.selectedFamilia.nombreHijo4 = apellido + '_' +nombre;   
  }

  seleccionarHijo5(persona: Persona){
    let idHijo:string =persona._id;
    let nombre:string = persona.primer_nombre;
    let apellido:string = persona.primer_apellido;
    this.familiaService.selectedFamilia.hijo5 = idHijo;  
    this.familiaService.selectedFamilia.nombreHijo5 = apellido + '_' +nombre;  
  }

  seleccionarEncargado(persona: Persona){
    let idEncargado:string =persona._id;
    let nombre:string = persona.primer_nombre;
    let apellido:string = persona.primer_apellido;
    this.familiaService.selectedFamilia.encargado = idEncargado;  
    this.familiaService.selectedFamilia.nombreEncargado =  apellido + '_' +nombre;
  }

  seleccionarPadre(persona: Persona){
    let idPadre:string =persona._id;
    let nombre:string = persona.primer_nombre;
    let apellido:string = persona.primer_apellido;
    this.familiaService.selectedFamilia.padre = idPadre;  
    this.familiaService.selectedFamilia.nombrePadre =  apellido + '_' +nombre; 
  }

  seleccionarMadre(persona: Persona){
    let idMadre:string =persona._id;
    let nombre:string = persona.primer_nombre;
    let apellido:string = persona.primer_apellido;
    this.familiaService.selectedFamilia.madre = idMadre;   
    this.familiaService.selectedFamilia.nombreMadre = apellido + '_' +nombre;
  }

  mostrarHijoII(){
    this.mostrarHijo2 = true;
  }

  ocultarHijoII(){
    this.mostrarHijo2 = false;
  }

  mostrarHijoIII(){
    this.mostrarHijo3 = true;
  }

  ocultarHijoIII(){
    this.mostrarHijo3 = false;
  }

  mostrarHijoIV(){
    this.mostrarHijo4 = true;
  }

  ocultarHijoIV(){
    this.mostrarHijo4 = false;
  }

  mostrarHijoV(){
    this.mostrarHijo5 = true;
  }

  ocultarHijoV(){
    this.mostrarHijo5 = false;
  }
  
}
