import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UnidadService } from '../../services/unidad.service';
import { Unidad } from 'src/app/models/unidad';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {

  nombre_unidad_detalle:string = ""

  constructor(  private unidadService: UnidadService,
                private toastr: ToastrService) { }

  @ViewChild('btnClose') btnClose: ElementRef;

  private unidades: Unidad[]; 

  filter_unidad = '';

  ngOnInit() {
    this.getUnidades();
  }

  addUnidad(form: NgForm) {
    if(form.valid){
      if(form.value._id){
        this.unidadService.putUnidad(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Unidad actualizada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            this.getUnidades();
            console.log(res); 
            this.btnClose.nativeElement.click();
            this.resetForm(form);
          })
      }else {
        this.unidadService.postUnidad(form.value)
          .subscribe(res => {
            this.toastr.success('Accion realizada exitosamente', 'Unidad guardada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            console.log(res);
            this.getUnidades();
            this.btnClose.nativeElement.click();
            this.resetForm(form);
          })
      }
    }else {
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  getUnidades(){
    this.unidadService.getUnidades()
    .subscribe(res => {
      this.unidadService.unidades = res as Unidad[]
      this.toastr.info('Acción realizada exitosamente', 'Unidades obtenidas',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    })
  }

  getUnidad(unidad: Unidad){
    this.unidadService.getUnidad(unidad)
    .subscribe(res => {
      this.nombre_unidad_detalle = unidad.nombre_unidad
    })
  }

  editUnidad(unidad: Unidad){
    this.unidadService.selectedUnidad = unidad;
  }

  deleteUnidad(_id: string){
    if(confirm('¿Quieres eliminar a esta persona?')){
      this.unidadService.deleteUnidad(_id)
        .subscribe(res => {
           this.getUnidades();
           this.toastr.warning('Acción realizada exitosamente',
          'Unidad eliminada.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.unidadService.selectedUnidad = new Unidad();
    }
  }

}
