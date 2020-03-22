import { Component } from '@angular/core'
@Component(
  {
    selector: 'my-app',
    template: `
            <div>
              <button id='buttonId' style='color:red' [style.font-bold]='isBold ? isBold:normal' >My Button</button>
              <br><br>
              <button id='buttonId' style='color:red' [style.font-size.px]='fontSize'>My Button</button>
              <br><br>
              <button id='buttonId' style='color:red' [ngStyle]='addStyles()'>My Button</button>
            </div>
    `
  }
)
export class AppComponent {
  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;
  addStyles() {
    let styles={
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px':30
    };
    return styles;
  }
}