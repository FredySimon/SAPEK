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

  roles = [
    'ADMINISTRADOR',
    'DIRECTOR/SUBDIRECTOR',
    'COORDINADOR',
    'SECRETARIA'
  ]

  constructor(  private personaService: PersonaService,
                private usuarioService: UsuarioService,
                private toastr: ToastrService) { }

                @ViewChild('btnClose') btnClose: ElementRef;

                private 

  ngOnInit() {
  }

}
