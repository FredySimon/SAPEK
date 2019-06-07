import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RedService } from 'src/app/services/red.service';
import { NgForm } from '@angular/forms';
import { Red } from 'src/app/models/red';
import { ToastrService } from 'ngx-toastr';

import { CarreraService } from '../../services/carrera.service';
import { Carrera } from 'src/app/models/carrera';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  constructor(  private redService: RedService,
                private carreraService: CarreraService,
                private toastr: ToastrService) { }

                @ViewChild('btnClose') btnClose: ElementRef;

                private redes: Red[];
                private carreras: Carrera[];

                filterCarrera = '';

  ngOnInit() {
    this.getRedes();
    this.getCarreras();
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

  seleccionarCarrera(carrera: Carrera){
    let idCarrera:string = carrera._id;
    let nombreCarrera:string = carrera.nombre_carrera;

    this.redService.selectedRed.carrera = idCarrera;
    this.redService.selectedRed.nombre_carrera = nombreCarrera;
  }

}
