import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    template: `
            <div>
              <button id='buttonId' class='colorClass italicsClass' [class.boldClass]='!classTpApply'>My Button</button>
              <br><br>
              <button id='buttonId' class='colorClass' [ngClass]='applyAllClasses()'>My Button</button>
            </div>
    `
  }
)
export class AppComponent {
    classTpApply:string='italicsClass colorClass';
    applyBoldClass:boolean=true;
    applyItalicClass:boolean=true;
    applyAllClasses() {
      let classes={
        boldClass:this.applyBoldClass,
        italicsClass:this.applyItalicClass

      }
      return classes;
    }
  }