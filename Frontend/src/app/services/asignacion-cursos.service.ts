import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsignacionCursos } from '../models/asignacion-cursos';

@Injectable({
  providedIn: 'root'
})
export class AsignacionCursosService {

  selectedAsignacionCursos: AsignacionCursos;
  asignacionesCursos: AsignacionCursos[];
  readonly URL_API = 'http://localhost:3000/api/asignacionCursos/'

  constructor (private http:HttpClient) {
    this.selectedAsignacionCursos = new AsignacionCursos();
   }

   getASignacionesCursos(){
     return this.http.get(this.URL_API);
   }

   getAsignacionCursos(asignacionCursos: AsignacionCursos){
     return this.http.get(this.URL_API + `/${asignacionCursos._id}`);
   }

   postAsignacionCursos(asignacionCursos: AsignacionCursos){
     return this.http.post(this.URL_API, asignacionCursos)
   }

   putAsignacionCursos(asignacionCursos: AsignacionCursos){
     return this.http.put(this.URL_API + `/${asignacionCursos._id}`, asignacionCursos);
   }

   deleteAsignacionCursos(_id: string){
     return this.http.delete(this.URL_API + `/${_id}`);
   }
}
