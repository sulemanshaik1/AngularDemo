import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    template: `
            <div>
              <employee-details></employee-details>
            </div>
    `
  }
)
export class AppComponent {
  pageHeader: string = "Employee Details";
  imagePath:string='OBaVg52wtTZ.png';
  firstName:string='Suleman';
  lastName:string='Shaik';
  innerHtml:string='This is  span tag';
  isDisable:boolean=false;
  badHtml:string='Hello <script>alert("danger");</script> world';
  getFullName():string{
    return this.firstName+' '+this.lastName;
  }
}