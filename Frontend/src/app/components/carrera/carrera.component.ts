import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CarreraService } from '../../services/carrera.service';
import { Carrera } from 'src/app/models/carrera';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
  nombre_carrera_detalle: string = ""
  codigo_detalle: string = ""
  inicio_detalle: string = ""
  final_detalle: string = ""

  carrerasArray = []

  constructor(  private carreraService: CarreraService,
                private toastr: ToastrService) { 
                }

  @ViewChild('btnClose') btnClose: ElementRef;

    private carreras: Carrera[];

    filter_carrera=''

  ngOnInit() {
    this.getCarreras();
    this.carrerasArray = this.carreras
  }

  addCarrera(form : NgForm){
    if(form.valid){
      if(form.value._id){
        this.carreraService.putCarrera(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Carrera actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            this.getCarreras();
            console.log(res);
            this.btnClose.nativeElement.click();
            this.resetForm(form);
          })
      }else{    
          this.carreraService.postCarrea(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Carrera guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getCarreras();
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

  getCarreras(){
    this.carreraService.getCarreras()
    .subscribe(res => {
      this.carreraService.carreras = res as Carrera[]
      this.toastr.info('Acción realizada exitosamente', 'Carreras obtenidas',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    });
  }

  getCarrera(carrera: Carrera){
    this.carreraService.getCarrera(carrera)
    .subscribe(res => {
      console.log(res)
      this.nombre_carrera_detalle = carrera.nombre_carrera
      this.codigo_detalle = carrera.codigo
      this.inicio_detalle = carrera.inicio
      this.final_detalle = carrera.final
    })
  }

  editCarrera(carrera: Carrera){
    this.carreraService.selectedCarrera = carrera;
  }

  deleteCarrera(_id: string){
    if(confirm('¿Quieres eliminar a esta carrera?')){
      this.carreraService.deleteCarrera(_id)
        .subscribe(res => {
          this.getCarreras();
          this.toastr.warning('Acción realizada exitosamente',
          'Carrera eliminada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
        })
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.carreraService.selectedCarrera = new Carrera();
    }
  }

}
