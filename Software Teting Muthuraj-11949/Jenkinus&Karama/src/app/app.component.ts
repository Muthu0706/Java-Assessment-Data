import { Component } from '@angular/core';
import { Doctor } from './model/Doctor';
import { HeroService } from './hero.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  myForm: FormGroup;

  flag_insert:boolean; 
  flag_del:boolean;
  flag_update:boolean;
  doctor: Doctor;
  result: string = "";
  docList:Doctor[] =[];


  constructor(private service: HeroService) {
    
    this.myForm = new FormGroup({
      dId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      dName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      dAge:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      dEmail:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      dSpecialization:new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+')]),
      dPhno:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      dLocation:new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+')])
    })
    this.doctor = new Doctor();
    this.getAllDoctor();
    this.flag_insert=false;
    this.flag_del=false;
    this.flag_update=false;
  
  }
  InsertDoctor(data: any) {
    this.doctor.dId=data.dId;
    this.doctor.dName=data.dName;
    this.doctor.dAge=data.dAge;
    this.doctor.dEmail=data.dEmail;
    this.doctor.dSpecialization=data.dSpecialization;    
    this.doctor.dPhno=data.dPhno;
    this.doctor.dLocation=data.dLocation;
    this.result = this.service.insertDoctor(this.doctor);
    this.getAllDoctor();
    this.flag_insert=true;
  }
  DeleteDoctor(data: any) {
    alert("Deleted Data" + data.dId + " " + data.dName + " " + data.dAge+""+data.dEmail+""+data.dSpecialization+""+data.dPhno+""+data.dLocation);
    this.doctor.dId=data.dId;
    this.doctor.dName=data.dName;
    this.doctor.dAge=data.dAge;
    this.doctor.dEmail=data.dEmail;
    this.doctor.dSpecialization=data.dSpecialization;    
    this.doctor.dPhno=data.dPhno;
    this.doctor.dLocation=data.dLocation;
    this.result = this.service.deleteDoctor(this.doctor);
    this.getAllDoctor();
    this.flag_del=true;
  }

  UpdateDoctor(data: any) {
    alert("Updated Data" + data.dId + " " + data.dName + " " + data.dAge+""+data.dEmail+""+data.dSpecialization+""+data.dPhno+""+data.dLocation);
    this.doctor.dId=data.dId;
    this.doctor.dName=data.dName;
    this.doctor.dAge=data.dAge;
    this.doctor.dEmail=data.dEmail;
    this.doctor.dSpecialization=data.dSpecialization;    
    this.doctor.dPhno=data.dPhno;
    this.doctor.dLocation=data.dLocation;
    this.result = this.service.updateDoctor(this.doctor);
    this.getAllDoctor();
    this.flag_update=true;
  }
  getAllDoctor() {
    this.service.getAllDoctor().subscribe(doctor=>this.docList = doctor);
  } 
}


