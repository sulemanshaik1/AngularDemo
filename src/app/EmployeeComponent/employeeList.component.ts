import { Component,OnInit } from "@angular/core";
import { IEmployee } from './employee';
import {EmployeeService} from './employee.service';
import { error } from 'util';

@Component({
    selector: 'employee-list',
    templateUrl: '../EmployeeComponent/employeeList.component.html',
    styleUrls: ['../EmployeeComponent/employeeList.component.css'],
})
export class EmployeeList implements OnInit {
    employees: IEmployee[] ;
    selectedEmployeeRadioButtonValue:string='All';
    statusMessage:string='Loading data please wait ...';
    constructor(private _employeeservice:EmployeeService) {

        // this.employees = [
        //     {
        //         code: 'emp101', name: 'Tom', gender: 'Male',
        //         annualSalary: 5500, dateOfBirth: '6/25/1988'
        //     },
        //     {
        //         code: 'emp102', name: 'Alex', gender: 'Male',
        //         annualSalary: 5700.95, dateOfBirth: '9/6/1982'
        //     },
        //     {
        //         code: 'emp103', name: 'Mike', gender: 'Male',
        //         annualSalary: 5900, dateOfBirth: '12/8/1979'
        //     },
        //     {
        //         code: 'emp104', name: 'Mary', gender: 'Female',
        //         annualSalary: 6500.826, dateOfBirth: '10/14/1980'
        //     },
        //     {
        //         code: 'emp105', name: 'Nancy', gender: 'Female',
        //         annualSalary: 6700.826, dateOfBirth: '12/15/1982'
        //     },
        //     {
        //         code: 'emp106', name: 'Amenda', gender: 'Female',
        //         annualSalary: 7000.826, dateOfBirth: '12/15/1982'
        //     },
        // ];
    }
    ngOnInit(): void {
      this._employeeservice.getEmployee()
      .subscribe(employeesData=>this.employees=employeesData,
        error=>{
        console.error(error);
         this.statusMessage = 'Problem with the service. Please try again after sometime';
             })

    }

    onEmployeeRadioButtionChange(selectedRadioButtonValue:string):void{
        this.selectedEmployeeRadioButtonValue=selectedRadioButtonValue;
    }
    getEmployeesCount():number{
        return this.employees.length;
    }
    getMaleEmployeesCount():number{
        return this.employees.filter(e=>e.gender==="Male").length;
    }
    getFemaleEmployeesCount():number{
        return this.employees.filter(e=>e.gender==="Female").length;
    }
}