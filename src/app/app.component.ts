import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    template: `
            <div>
              <h1>{{pageHeader}}</h1>
              <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/{{imagePath}}'/>
              <h1>{{getFullName()}}</h1>
              <span [innerHtml]='innerHtml'></span><br>
              <button disabled='{{isDisable}}'>Click here!!</button><br>
              <button [disabled]='isDisable'>Click here for property binding!!</button>
              <div innerHtml='{{badHtml}}'></div>
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