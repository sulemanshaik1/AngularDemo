import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeDetails} from './EmployeeComponent/employee.details'
import {EmployeeList} from './EmployeeComponent/employeeList.component'
import {EmployeeCount} from './EmployeeComponent/employeeCount.component'
import {SimpleComponent} from './Others/simple.component'
import {HomeComponent} from './home/home.component'
import {PageNotFoundComponent} from './Others/pageNotFound.component'
import { EmployeeService } from './EmployeeComponent/employee.service';
import { UserPreferencesService } from './dependencyInjection/userPreferences.service';

// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home
// The 4th route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeList },
  { path: 'employees/:code', component: EmployeeDetails },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent, EmployeeDetails,EmployeeList,EmployeeCount,SimpleComponent,HomeComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  providers:[EmployeeService,UserPreferencesService],

  bootstrap: [AppComponent]
})
export class AppModule { }
