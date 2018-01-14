import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmployeeComponent } from './component/employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeDetailsComponent },
  { path: 'addUpdateEmployee', component:EmployeeFormComponent},
  { path: 'employees/:id', component:EmployeeComponent}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
