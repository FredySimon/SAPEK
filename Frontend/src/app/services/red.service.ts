import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Red } from '../models/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {

  selectedRed: Red;
  redes: Red[];
  readonly URL_API = 'http://localhost:3000/api/redes/'

  constructor(private http:HttpClient) {
    this.selectedRed = new Red();
   }

   getRedes(){
     return this.http.get(this.URL_API);
   }

   getRed(red: Red){
     return this.http.get(this.URL_API + `/${red._id}`);
   }

   postRed(red: Red){
     return this.http.post(this.URL_API, red);
   }

   putRed(red: Red){
     return this.http.put(this.URL_API +  `${red._id}`, red);
   }

   deleteRed(_id: string){
     return this.http.delete(this.URL_API + `/${_id}`);
   }
}
