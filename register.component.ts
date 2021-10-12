import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EndpointsService } from '../endpoints.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  auth: any;
  message: string;
  error: string;

  log(x){console.log(x)}


  msg=false
  constructor(public ep:EndpointsService) { }
  register: any;

  ngOnInit(): void {
  }

  addEmployee(form:NgForm){

    this.auth.createEmployee(form.value).subscribe(res=>{
      if(!res.error){
        form.reset();
        this.message="Emplyoee Registered Successfully!!!"
      }
      else{
        this.error="Emplyoee Not Registered"
      }
    },err=>{
      console.log(err);
      this.error="server error"
    })
  }

}


