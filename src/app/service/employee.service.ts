import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee } from '../model/employee';


@Injectable()
export class EmployeeService {

  private baseUrl:string = "http://localhost:8080";
  private header;
  private options;
  employee:Employee;
    
  constructor(private http: Http) {
    this.header = new Headers();
    this.header.append('Content-type', 'application/json;charset=UTF-8');
    this.options = new RequestOptions({
      headers:this.header
    })
}

  // Function to return the Observable response containing all Employees
  getAllEmployees(): Observable<Response> {
      return this.http.get(this.baseUrl + '/getAllEmployees',this.options);
  }

  getEmployee(id:number){
     return this.http.get(this.baseUrl + '/getEmployee/' + id,this.options);
  }
  //Function to perform POST operation to create a new employee
  addEmployee(emp: Employee): Observable<Response> {
     
      return this
          .http
          .post(this.baseUrl + '/addEmployee', JSON.stringify(emp), this.options)
  }
  //Function to update Employee using PUT operation
  updateEmployee(id: number, emp: Employee): Observable<Response> {
  
      return this
          .http
          .put(this.baseUrl +'/editEmployee/' + id, JSON.stringify(emp), this.options)
  }
  //Function to remove the Employee using DELETE operation
  deleteEmployee(id: number): Observable<Response> {
      return this
          .http
          .delete(this.baseUrl +'/deleteEmployee/' + id)
  }

  setter(emp:Employee){
    this.employee = emp;
  }

  getter(){
    return this.employee;
  }
}
