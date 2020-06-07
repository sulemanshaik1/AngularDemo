// Step 1 : Import OnChanges and SimpleChanges
import { Component, OnChanges, Input, SimpleChanges } from '@angular/core'
@Component({
    selector: 'simple',
    template: `You Entered :{{simpleInput}}`
})
// The selector "simple" will be used as the directive
// where we want to use this component. Notice we are
// also using the simpleInput property with interpolation
// to display the value it receives from the parent
// component
export class SimpleComponent implements OnChanges {
    @Input() simpleInput: string;
    ngOnChanges(changes: SimpleChanges): void {
        for (let proprtName in changes) {
            let change = changes[proprtName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(proprtName + ' Current Value : ' + current + ' ,Previous value :' + previous);
            //  console.log(`${proprtName} Current value : ${current} ,Previous value: ${previous}`);

        }
    }

}