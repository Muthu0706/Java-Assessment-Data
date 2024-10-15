import { Injectable } from '@angular/core';
import { Doctor } from './model/Doctor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url:string = "http://localhost:8976";
  constructor(private http: HttpClient) {
  }
  insertDoctor(doctor : Doctor){
    this.http.post(this.url+"/PerformInsert",doctor).subscribe();
    return "Record Inserted";
  }
  updateDoctor(doctor: Doctor) {
    this.http.put(this.url + "/PerformUpdate" ,doctor).subscribe();
    return "Record Updated";
  }
  deleteDoctor(doctor: Doctor) {
    this.http.delete(this.url+"/PerformDelete/"+doctor.dId).subscribe();
    return "Record Deleted";
  }
  getAllDoctor(){
   return this.http.get<Doctor[]>(this.url+"/viewAll");
  }
  }