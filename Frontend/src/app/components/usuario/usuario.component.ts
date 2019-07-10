import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  nombre_detalle:string = ""
  passwrod_detalle:string = ""
  rol_detalle:string = ""

  persona:boolean = false;
  mostrar: Boolean = false;

  roles = [
    'ADMINISTRADOR',
    'DIRECTOR',
    'SUBDIRECTOR',
    'COORDINADOR',
    'SECRETARIA'
  ]

  constructor(  private usuarioService: UsuarioService,
                private personaService: PersonaService,
                private toastr: ToastrService) { }

                @ViewChild('btnClose') btnClose: ElementRef;

                private usuarios: Usuario[];
                private personas: Persona[];

                filter_usuario = '';

  ngOnInit() {
    this.getUsuarios();
    this.getPersonas();
  }

  addUsuario(form: NgForm){
    if(form.valid){
      if(form.value._id){
        this.usuarioService.putUsuario(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Usuario actualizado.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          this.getUsuarios();
          console.log(res);
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      } else {
        this.usuarioService.postUsuario(form.value)
        .subscribe(res => {
          this.toastr.success('Accion realizada exitosamente', 'Usuario guardado.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
          console.log(res);
          this.getUsuarios();
          this.btnClose.nativeElement.click();
          this.resetForm(form);
        })
      }

    } else {
      console.log('Formulario no valido');
      this.toastr.error('Formulario no valido', 'Introduzca todos los campos requeridos', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
    }
  }

  getUsuarios(){
    this.usuarioService.getUsuarios()
    .subscribe(res => {
      this.usuarioService.usuarios = res as Usuario[]
      this.toastr.info('Acción realizada exitosamente', 'Usuarios obtenidos', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' })
      console.log(res);
    })
  }

  getPersonas(){
    this.personaService.getPersonas()
    .subscribe(res => {
      this.personaService.personas = res as Persona[]
    })
  }

  getUsuario(usuario: Usuario){
    this.usuarioService.getUsuario(usuario)
    .subscribe(res => {
      this.nombre_detalle = usuario.nombre
      this.rol_detalle = usuario.rol
    })
  }

  editUsuario(usuario: Usuario){
    this.usuarioService.selectedUsuario = usuario
  }

  deleteUsuario(_id: string){
    if(confirm('¿Quieres eliminar a este usuario?')){
      this.usuarioService.deleteUsuario(_id)
      .subscribe(res => {
        this.getUsuarios();
        this.toastr.warning('Acción realizada exitosamente',
            'Usuario eliminado.', { positionClass: 'toast-bottom-left', tapToDismiss: true, progressBar: true, progressAnimation: 'increasing' });
      })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }

  mostrarContrase() {
    this.mostrar = true;
  }

  ocultarContrase() {
    this.mostrar = false;
  }

  usuarioPorPersona(){
    this.persona = true
  }

  usuarioPorEmail(){
    this.persona = false
  }

}
