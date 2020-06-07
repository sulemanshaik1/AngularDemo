import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeDetails} from './EmployeeComponent/employee.details'
import {EmployeeList} from './EmployeeComponent/employeeList.component'
import {EmployeeCount} from './EmployeeComponent/employeeCount.component'
import {SimpleComponent} from './Others/simple.component'

@NgModule({
  declarations: [
    AppComponent, EmployeeDetails,EmployeeList,EmployeeCount,SimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
