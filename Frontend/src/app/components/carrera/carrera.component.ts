import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CarreraService } from '../../services/carrera.service';
import { NgForm } from '@angular/forms';
import { Carrera } from 'src/app/models/carrera';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  constructor(  private carreraService: CarreraService,
                private toastr: ToastrService) { }

  @ViewChild('btnClose') btnClose: ElementRef;

    private carreras: Carrera[];

  ngOnInit() {
    this.getCarreras();
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
