import { Component, Input } from "@angular/core";
@Component({
    selector: 'employee-count',
    templateUrl: '../EmployeeComponent/employeeCount.component.html',
    styleUrls: ['../EmployeeComponent/employeeCount.component.css']
})
export class EmployeeCount {
    @Input()
    all: number
    @Input()
    Male: number
    @Input()
    Female: number
}