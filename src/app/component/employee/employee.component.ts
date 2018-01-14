import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  
  selectedEmp :Employee;

  statusMessage: string;
  errorMessage:string;

  constructor(private empService:EmployeeService,private route: ActivatedRoute,
    private location: Location) { 
  }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(id).subscribe((resp) => {
      this.selectedEmp = resp.json();
  },(error)=>{
      this.errorMessage = "Server Error:Employee can't be retrived";
      this.selectedEmp = null;
      alert(this.errorMessage)
    console.log(error);
  });
  }

  goBack(): void {
    this.location.back();
  }


}
