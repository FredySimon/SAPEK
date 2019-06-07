import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsignacionRed } from '../models/asignacion-red';

@Injectable({
  providedIn: 'root'
})
export class AsignacionRedService {

  selectedAsignacionRed: AsignacionRed;
  asignacionesRed: AsignacionRed[];
  readonly URL_API = 'http://localhost:3000/api/asignacionRed/' 

  constructor(private http:HttpClient) { 
    this.selectedAsignacionRed = new AsignacionRed();
  }

  getASignacionesRed(){
    return this.http.get(this.URL_API);
  }

  getAsignacionRed(asignacionRed: AsignacionRed){
    return this.http.get(this.URL_API + `/${asignacionRed._id}`);
  }

  postAsignacionRed(asignacionRed: AsignacionRed){
    return this.http.post(this.URL_API, asignacionRed)
  }

  putASignacionRed(asignacionRed: AsignacionRed){
    return this.http.put(this.URL_API + `/${asignacionRed._id}`, asignacionRed)
  }

  deleteAsignacionREd(_id: string){
    return this.http.delete(this.URL_API + `${_id}`);
  }
}
