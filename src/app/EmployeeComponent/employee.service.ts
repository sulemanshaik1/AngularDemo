import { Injectable } from '@angular/core'
import { IEmployee } from './employee'
// Import Http & Response from angular HTTP module
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
    // Define API
    apiURL = 'https://localhost:44374/api/demo/';
    constructor(private _http: HttpClient) { }
    getEmployee(): Observable<IEmployee[]> {
        return this._http.get<IEmployee[]>(this.apiURL)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
    getEmployeeByCode(empcode:string): Observable<IEmployee> {
        return this._http.get<IEmployee>(this.apiURL+empcode)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // Error handling
    handleError(error: { error: { message: string; }; status: any; message: any; }) {
        console.error(error);
        return Observable.throw(error);
    }
    // IEmployee[]{
    //     return [

    //             {
    //                 code: 'emp101', name: 'Tom', gender: 'Male',
    //                 annualSalary: 5500, dateOfBirth: '6/25/1988'
    //             },
    //             {
    //                 code: 'emp102', name: 'Alex', gender: 'Male',
    //                 annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    //             },
    //             {
    //                 code: 'emp103', name: 'Mike', gender: 'Male',
    //                 annualSalary: 5900, dateOfBirth: '12/8/1979'
    //             },
    //             {
    //                 code: 'emp104', name: 'Mary', gender: 'Female',
    //                 annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    //             },
    //             {
    //                 code: 'emp105', name: 'Nancy', gender: 'Female',
    //                 annualSalary: 6700.826, dateOfBirth: '12/15/1982'
    //             },
    //             {
    //                 code: 'emp106', name: 'Amenda', gender: 'Female',
    //                 annualSalary: 7000.826, dateOfBirth: '12/15/1982'
    //             },

    //     ];
    // }
}