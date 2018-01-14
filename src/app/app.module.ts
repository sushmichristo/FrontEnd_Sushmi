import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmployeeService } from './service/employee.service';
import { EmployeeSearchComponent } from './component/employee-search/employee-search.component';
import { FilterPipe } from './filter.pipe';
import { EmployeeComponent } from './component/employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
    EmployeeSearchComponent,
    FilterPipe,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
