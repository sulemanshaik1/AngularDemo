import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    // template: `<employee-list></employee-list>`
    template: `
    <div style="padding:5px">
        <ul class="nav nav-tabs">
            <li routerLinkActive="active">
                <a routerLink="home">Home</a>
            </li>
            <li routerLinkActive="active">
                <a routerLink="employees">Employees</a>
            </li>
        </ul>
      <br/>
           <router-outlet></router-outlet>
    </div>
    `
    // template: `Your Text : <input type='text' [(ngModel)]='userText' />
    //           <br>
    //           <simple [simpleInput]='userText'></simple>
    //`
  }
)
export class AppComponent {
  // userText:string='Suleman';
}