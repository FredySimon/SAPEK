import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Familia } from '../models/familia';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

  selectedFamilia: Familia;
  familias: Familia[];
  readonly URL_API = 'http://localhost:3000/api/familias'

  constructor(private http:HttpClient) { 
    this.selectedFamilia = new Familia();
  }

  getFamilias(){
    return this.http.get(this.URL_API);
  }

  getFamilia(familia: Familia){
    return this.http.get(this.URL_API + `/${familia._id}`);
  }

  postFamilia(familia: Familia){
    return this.http.post(this.URL_API, familia);
  }

  putFamilia(familia: Familia){
    return this.http.put(this.URL_API + `/${familia._id}`, familia);
  }

  deleteFamilia(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`); 
  }
}
