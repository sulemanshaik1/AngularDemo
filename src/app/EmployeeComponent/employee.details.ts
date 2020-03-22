import { Component } from '@angular/core'
@Component({
    selector: 'employee-details',
    templateUrl: '../EmployeeComponent/employee.details.html',
    styleUrls: ['../EmployeeComponent/employee.details.css']
}

)
export class EmployeeDetails {
    name: string = 'Suleman';
    role:string='Developer';
    age: number = 25;
    gender: string = 'Male';
    colSpan:number=3;
    showDetails:boolean=false;

    toggleDetails():void{
        this.showDetails=!this.showDetails;

    }

}
