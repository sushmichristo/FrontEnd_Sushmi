import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee:Employee;
  statusMessage: string;
  errorMessage:string;
  $:any;

  constructor(private empService:EmployeeService,private router:Router) { }

  ngOnInit() {
  this.employee=this.empService.getter();
  }
  myFunc(){

  }

  saveEmployee() {

    if(this.employee.id === undefined){
      this.empService.addEmployee(this.employee).subscribe((resp) => {
      this.statusMessage = "Employee added"
      console.log("add response" + resp);
      this.router.navigate(['/employees']);
          },(error)=>{
      this.errorMessage = "Server Error:Employees can't be added";
      alert(this.errorMessage)
      });
    }else{
      this.empService.updateEmployee(this.employee.id, this.employee).subscribe((resp) => {
      this.statusMessage = "Record updated"
      this.router.navigate(['/employees']);
    },(error)=>{
      this.errorMessage = "Server Error:Employees can't be updated";
      alert(this.errorMessage)
      });
    }

  }
}
