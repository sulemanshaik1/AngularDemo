import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    template: `
            <div>
              <h1>{{pageHeader}}</h1>
              <img src='{{imagePath}}'/>
              <h1>{{getFullName()}}</h1>
              <employee-details></employee-details>
            </div>
    `
  }
)
export class AppComponent {
  pageHeader: string = "Employee Details";
  imagePath:string='https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png';
  firstName:string='Suleman';
  lastName:string='Shaik';
  getFullName():string{
    return this.firstName+' '+this.lastName;
  }
}