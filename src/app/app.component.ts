import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    template: `
            <div>
              <h1>{{pageHeader}}</h1>
              <employee-details></employee-details>
            </div>
    `
  }
)
export class AppComponent {
  pageHeader: string = "Employee Details"
}