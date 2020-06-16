import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'employee-details',
    templateUrl: '../EmployeeComponent/employee.details.html',
    styleUrls: ['../EmployeeComponent/employee.details.css'],
}

)
export class EmployeeDetails implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';
    constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        //storing url parameter of code
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode)
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = 'Employee with the specified Employee Code does not exist'
                }
                else {
                    this.employee = employeeData;
                }
            },
                (error) => {
                    this.statusMessage =
                        'Problem with the service. Please try again after sometime';
                    console.error(error);
                }
            )
    }

}
