import { Component } from '@angular/core'
@Component({
    selector: 'employee-details',
    templateUrl: '../EmployeeComponent/employee.details.html',
    styleUrls: ['../EmployeeComponent/employee.details.css']
}

)
export class EmployeeDetails {
    name: string = 'Suleman';
    age: number = 25;
    gender: string = 'Male'

}
