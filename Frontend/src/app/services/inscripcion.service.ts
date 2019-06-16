import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  selectedInscripcion: Inscripcion;
  inscripciones: Inscripcion[];
  readonly URL_API = 'http://localhost:3000/api/inscripciones'

  constructor(private http:HttpClient) { 
    this.selectedInscripcion = new Inscripcion();
  }

  getInscripciones(){
    return this.http.get(this.URL_API);
  }

  getInscripcion(inscripcion: Inscripcion){
    return this.http.get(this.URL_API + `/${inscripcion._id}`);
  }

  postInscripcion(inscripcion: Inscripcion){
    return this.http.post(this.URL_API, inscripcion);
  }

  putInscripcion(inscripcion: Inscripcion){
    return this.http.put(this.URL_API + `/${inscripcion._id}`, inscripcion);
  }

  deleteInscripcion(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
