import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsignacionCarreras } from '../models/asignacion-carreras';

@Injectable({
  providedIn: 'root'
})
export class AsignacionCarrerasService {

  selectedAsignacionCarreras: AsignacionCarreras;
  asignacionesCarreras: AsignacionCarreras[];
  readonly URL_API = 'http://localhost:3000/api/asignacionCarreras/'

  constructor(private http:HttpClient) { 
    this.selectedAsignacionCarreras = new AsignacionCarreras();
  }

  getAsignacionesCarreras(){
    return this.http.get(this.URL_API);
  }

  getAsignacionCarreras(asignacionCarreras: AsignacionCarreras){
    return this.http.get(this.URL_API + `/${asignacionCarreras._id}`);
  }

  postAsignacionCarreras(asignacionCarreras: AsignacionCarreras){
    return this.http.post(this.URL_API, asignacionCarreras)
  }

  putAsignacionCarreras(asignacionCarreras: AsignacionCarreras){
    return this.http.put(this.URL_API + `/${asignacionCarreras._id}`, asignacionCarreras);
  }

  deleteAsignacionCarreras(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
