import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    template: `
           <input type='text' [value]='name' (input)='name=$event.target.value' /><br><br>
           <input type='text' [(ngModel)]='name' /><br><br>
           your name is : {{name}}
    `
  }
)
export class AppComponent {
  name:string='Suleman';

}