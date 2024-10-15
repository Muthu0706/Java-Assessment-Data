import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Doctor } from './model/Doctor';

describe('InsertDoctorComponent ',()=>{
  
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
      
      ]
    }).compileComponents();
  });
  
  it('App Component Test',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.nativeElement as HTMLElement;
    expect(app).toBeTruthy();
  })
  it('App Component GUI count',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.nativeElement as HTMLElement;
    const inputElement = app.querySelectorAll("input");
    const buttonElement = app.querySelectorAll("button");
    expect(inputElement.length).toEqual(7);
    expect(buttonElement.length).toEqual(3);
  })
  it('Test Form Valid',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const Doctor =  fixture.componentInstance;
    Doctor.myForm.controls?.['dId'].setValue("1");
      Doctor.myForm.controls?.['dName'].setValue("raja");
      Doctor.myForm.controls?.['dAge'].setValue("23");
      Doctor.myForm.controls?.['dEmail'].setValue("raj@gmail.com");
      Doctor.myForm.controls?.['dSpecialization'].setValue("Baby");
      Doctor.myForm.controls?.['dPhno'].setValue("678976");
      Doctor.myForm.controls?.['dLocation'].setValue("chennai");
 
    expect(Doctor.doctor).toBeTruthy();
  })
});
describe('UpdateDoctorComponent ',()=>{
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
      
      ]
    }).compileComponents();
  });
  
  it('App Component Test',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.nativeElement as HTMLElement;
    expect(app).toBeTruthy();
  })

  it('App Component GUI count',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.nativeElement as HTMLElement;
    const inputElement = app.querySelectorAll("input");
    const buttonElement = app.querySelectorAll("button");
    expect(inputElement.length).toEqual(7);
    expect(buttonElement.length).toEqual(3);
  })
  it('Test Form Valid',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const Doctor =  fixture.componentInstance;
    Doctor.myForm.controls?.['dId'].setValue("1");
      Doctor.myForm.controls?.['dName'].setValue("Kannan");
      Doctor.myForm.controls?.['dAge'].setValue("23");
      Doctor.myForm.controls?.['dEmail'].setValue("kanna@gmail.com");
      Doctor.myForm.controls?.['dSpecialization'].setValue("Baby");
      Doctor.myForm.controls?.['dPhno'].setValue("78965");
      Doctor.myForm.controls?.['dLocation'].setValue("chennai");
 
    expect(Doctor.doctor).toBeTruthy();
  })
});
describe('DeleteDoctorComponent ',()=>{
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
      
      ]
    }).compileComponents();
  });
  
  it('App Component Test',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.nativeElement as HTMLElement;
    expect(app).toBeTruthy();
  })

  it('App Component GUI count',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.nativeElement as HTMLElement;
    const inputElement = app.querySelectorAll("input");
    const buttonElement = app.querySelectorAll("button");
    expect(inputElement.length).toEqual(7);
    expect(buttonElement.length).toEqual(3);
  })
  it('Test Form Valid',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const Doctor =  fixture.componentInstance;
    Doctor.myForm.controls?.['dId'].setValue("1");
      Doctor.myForm.controls?.['dName'].setValue("Kannan");
      Doctor.myForm.controls?.['dAge'].setValue("23");
      Doctor.myForm.controls?.['dEmail'].setValue("kanna@gmail.com");
      Doctor.myForm.controls?.['dSpecialization'].setValue("Baby");
      Doctor.myForm.controls?.['dPhno'].setValue("78965");
      Doctor.myForm.controls?.['dLocation'].setValue("chennai");
 
    expect(Doctor.doctor).toBeTruthy();
  })
});
describe('ViewAllDoctorComponent ',()=>{
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
      
      ]
    }).compileComponents();
  });
  it('App Component Test',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.nativeElement as HTMLElement;
    expect(app).toBeTruthy();
  })
  it('App Component GUI count',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.nativeElement as HTMLElement;
    const inputElement = app.querySelectorAll("input");
    const buttonElement = app.querySelectorAll("button");
    expect(inputElement.length).toEqual(7);
    expect(buttonElement.length).toEqual(3);
  })
  it('Testing Form valid - ViewAll', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const Laptop = fixture.componentInstance;
    expect(Laptop.myForm.valid).toBeFalsy();
  });
});

