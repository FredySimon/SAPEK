import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, RadioButtonComponent } from "@syncfusion/ej2-angular-buttons";

import { NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    logueado:boolean = false;

   @ViewChild('sidebar') sidebar: SidebarComponent;
    public type: string = 'Push';
    public target: string = 'content';
    @ViewChild('togglebtn')
    public togglebtn: ButtonComponent;
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
         this.sidebar.position = "Right"
    }
    btnClick() {
        if (this.togglebtn.element.classList.contains('e-active')) {
            this.sidebar.hide();
        } else {
            this.sidebar.show();
        }
    }
    closeClick() {
        this.sidebar.hide();
        this.togglebtn.element.classList.remove('e-active');
    }
    @ViewChild('radio')
    public radiobutton: RadioButtonComponent;
    public changeHandler(args: any): void {
        this.sidebar.position = (args.event.target.ej2_instances[0].label == "Left") ? "Left" : "Right";
        
    }

  constructor(  private usuarioService: UsuarioService,
                private toastr: ToastrService) { }

                @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }

  loginUsuario(form: NgForm){
      if(form.valid){
          this.usuarioService.loginUsuario(form.value)
          .subscribe(res =>{
            this.toastr.success('Accion realizada exitosamente', 'Ingresaste a tu cuenta.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
            console.log(res);
            this.btnClose.nativeElement.click();
            this.resetForm(form);
            this.logueado = true
          })
      } else {
        console.log('Formulario no valido');
        this.toastr.error('Usuario invalido', 'Introduzca un usuario existente.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      }
  }

  resetForm(form ?: NgForm){
      if(form){
          form.reset();
          this.usuarioService.selectedUsuario = new Usuario();
      }
  }

}
