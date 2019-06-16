import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrera } from '../models/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  selectedCarrera: Carrera;
  carreras: Carrera[];
  readonly URL_API = 'http://localhost:3000/api/carreras'

  constructor(private http:HttpClient) { 
    this.selectedCarrera = new Carrera();}

  getCarreras(){
    return this.http.get(this.URL_API);}

  getCarrera(carrera: Carrera){
    return this.http.get(this.URL_API + `/${carrera._id}`);}

  postCarrea(carrera: Carrera){
    return this.http.post(this.URL_API, carrera);}

  putCarrera(carrera: Carrera){
    return this.http.put(this.URL_API + `/${carrera._id}`, carrera);}

  deleteCarrera(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)}
}
