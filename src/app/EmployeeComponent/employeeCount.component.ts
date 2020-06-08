import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: 'employee-count',
    templateUrl: '../EmployeeComponent/employeeCount.component.html',
    styleUrls: ['../EmployeeComponent/employeeCount.component.css']
})
export class EmployeeCount {
    // Holds the selected value of the radio button
    selectedRadioButtonValue: string = 'All';
    @Input()
    all: number
    @Input()
    Male: number
    @Input()
    Female: number

    // The Output decorator makes the property an Output property
    // EventEmitter class is used to create the custom event
    // When the radio button selection changes, the selected
    // radio button value which is a string gets passed to the
    // event handler method. Hence, the event payload is string.
    @Output()
    countRadioButtonSelctionChanged: EventEmitter<any> = new EventEmitter<any>();

    // This method raises the custom event. We will bind this
    // method to the change event of all the 3 radio buttons
    onRadioButtonSelectionChanged() {
        this.countRadioButtonSelctionChanged.emit(this.selectedRadioButtonValue);
        // console.log(this.selectedRadioButtonValue);
    }

}