import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any, term: any): any {
    if(term === undefined) return employees;
    return employees.filter(function(emp){
      return emp.name.toLowercase().include(term.toLowercase());
    })
  }

}
