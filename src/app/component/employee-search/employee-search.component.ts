import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  term : string;
  @Output()
  searchFormSubmitted : EventEmitter<string> = new EventEmitter<string>();

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
  }

  
  searchEmployee(){
    this.searchFormSubmitted.emit(this.term);
    console.log(this.term);
  }

  
}
