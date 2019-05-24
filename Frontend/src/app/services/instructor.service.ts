import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Intructor } from '../models/intructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  selectedInstructor: Intructor;
  instructores: Intructor[];
  readonly URL_API = 'http://localhost:3000/api/instructores/'

  constructor(private http:HttpClient) { 
    this.selectedInstructor = new Intructor();
  }

  getInstructores(){
    return this.http.get(this.URL_API);
  }

  getInstructor(instructor: Intructor){
    return this.http.get(this.URL_API + `/${instructor._id}`);
  }

  postInstructor(instructor: Intructor){
    return this.http.post(this.URL_API, instructor)
  }

  putInstructor(instructor: Intructor){
    return this.http.put(this.URL_API + `/${instructor._id}`, instructor);
  }

  deleteInstructor(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
