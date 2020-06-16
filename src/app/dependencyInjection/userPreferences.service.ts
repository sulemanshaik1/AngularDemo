import {Injectable} from '@angular/core'

@Injectable()
export class UserPreferencesService{
    colorPreference:string='orange'
    constructor(){
        console.log('new instance of service created.');
    }
}