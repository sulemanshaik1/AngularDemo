import { Component } from '@angular/core'
import {UserPreferencesService} from '../dependencyInjection/userPreferences.service'

@Component({
    template: `<h1>This is home page</h1>
    <div>
    Colour Preference :
    <input type='text' [(ngModel)]='color' [style.background]="color"/>
    </div>

    `
})

export class HomeComponent {
     // Create a private variable to hold an instance of the UserPreferencesService
   //   private _userPreferencesService: UserPreferencesService;

     // In the constructor we are creating an instance of the UserPreferencesService
    // using the new keyword. So this instance is local to this component and we
    // cannot use it share data with other components. Later we will modify this
    // code to use dependency injection, which creates a Singleton so the colour
    // data can be shared with other components.
     constructor(private _userPreferencesService:UserPreferencesService){
      //   this._userPreferencesService=new UserPreferencesService();
     }
     get color():string{
        return this._userPreferencesService.colorPreference;
     }
     set color(value:string){
          this._userPreferencesService.colorPreference=value;
     }


}