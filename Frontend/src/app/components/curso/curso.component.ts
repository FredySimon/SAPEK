import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { NgForm } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(  private cursoService: CursoService,
                private toastr: ToastrService) { }

                @ViewChild('btnClose') btnClose: ElementRef;

                private cursos: Curso[];

  ngOnInit() {
    this.getCursos();
  }

  addCurso(form: NgForm){
    if(form.valid){
      if(form.value._id){
        this.cursoService.putCurso(form.value)
        .subscribe(res => {
          this.toastr.success('Acción realizada exitosamente', 'Curso actualizado.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getCursos();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }else{
        this.cursoService.postCurso(form.value)
        .subscribe(res => {
          this.toastr.success('Acción realizada exitosamente', 'Curso guardado.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getCursos();
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

  getCursos(){
    this.cursoService.getCursos()
    .subscribe(res => {
      this.cursoService.cursos = res as Curso[]
      this.toastr.info('Acción realizada exitosamente', 'Cursos obtenidos',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    });
  }

  editCurso(curso: Curso){
    this.cursoService.selectedCurso = curso;
  }

  deleteCurso(_id: string){
    if(confirm('¿Quieres eliminar este curso?')){
      this.cursoService.deleteCurso(_id)
      .subscribe(res => {
        this.getCursos();
        this.toastr.warning('Acción realizada exitosamente.', 'Curso eliminado.',{positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      });
    }
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset();
      this.cursoService.selectedCurso = new Curso();
    }
  }
}
