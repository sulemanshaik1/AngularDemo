import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    template: `
           <employee-details></employee-details>
    `
  }
)
export class AppComponent {
  onClick():void{
    debugger;
    console.log('button clicked');
  }
}