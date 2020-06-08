import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    template: `<employee-list></employee-list>`
    // template: `Your Text : <input type='text' [(ngModel)]='userText' />
    //           <br>
    //           <simple [simpleInput]='userText'></simple>
    //`
  }
)
export class AppComponent {
  // userText:string='Suleman';
}