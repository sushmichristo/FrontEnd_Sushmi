import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

    title: string;
    employee: Employee;
    selectedEmployee : Employee;
    employees: Array<Employee>;
    isNewRecord: boolean;
    statusMessage: string;
    errorMessage:string;

    //Constructor injected with the Service and Router Dependency
    constructor(private serv: EmployeeService,private router:Router) {
        this.employees = new Array<Employee>();
        this.title = 'Welcome to Employee Portal';
    }

    //Load all Employees while hit the application url
    ngOnInit() {
        this.loadEmployee();
    }
 
    private loadEmployee() {
        this
            .serv
            .getAllEmployees()
            .subscribe((resp) => {
                this.employees = resp.json();
            },(error)=>{
                this.errorMessage = "Server Error:Employees can't be retrived";
                this.employees = null;
                alert(this.errorMessage)
              console.log(error);
            });
    }

    //Add Employee
    addEmployee() {
        let newEmp = new Employee();
        this.router.navigate(['/addUpdateEmployee']);
        this.serv.setter(newEmp);
        this.isNewRecord = true;
    }
 
    //Edit Employee
    editEmployee(emp: Employee) {
        this.serv.setter(emp);
        this.router.navigate(['/addUpdateEmployee']);
    }
    
    //Delete Employee
    deleteEmployee(emp: Employee) {
        this.serv.deleteEmployee(emp.id).subscribe((resp) => {
            this.statusMessage = 'Record Deleted Successfully.',
                //this.loadEmployee();
                this.employees.splice(this.employees.indexOf(emp),1);
        });
 
    }

        onSearchFormsubmit(term:string){
            console.log(term);
            if(term === undefined) return this.employees;
            return this.employees.filter(function(emp){
              return emp.name.indexOf(term);
            })
        }

        onSelect(emp:Employee){
            this.serv.setter(emp);
        this.router.navigate(['/employees/{emp.id}']);
        }
}
