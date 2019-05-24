import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unidad } from '../models/unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  selectedUnidad: Unidad;
  unidades: Unidad[];
  readonly URL_API = 'http://localhost:3000/api/unidades'

  constructor(private http:HttpClient) {
    this.selectedUnidad = new Unidad();
   }

   getUnidades(){
     return this.http.get(this.URL_API);
   }

   getUnidad(unidad: Unidad){
     return this.http.get(this.URL_API + `/${unidad._id}`);
   }

   postUnidad(unidad: Unidad){
     return this.http.post(this.URL_API, unidad);
   }

   putUnidad(unidad: Unidad){
     return this.http.put(this.URL_API + `/${unidad._id}`, unidad);
   }

   deleteUnidad(_id: string){
     return this.http.delete(this.URL_API + `/${_id}`);
   }
}
