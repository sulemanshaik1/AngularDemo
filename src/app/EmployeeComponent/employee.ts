export interface IEmployee{
    code:string;
    name:string;
    gender:string;
    annualSalary:number;
    dateOfBirth:string;
    //  To make a property optional use a ?
    // A class that implements this interface need
    // not provide implementation for this property
    // department?:string;
    // //we declare a method in typescript like below
    // getPerMonthSalary(annualSalary:number):number;
}

export class Employees implements IEmployee{
    // All the interface mandatory properties are defined
    // code:string;
    // name:string;
    // gender:string;
    // annualSalary:number;
    // dateOfBirth:string;

    // // The above class properties are then initialized
    // // using the constructor parameters. To do something
    // // like this, TypeScript has a shorthand syntax which
    // // reduces the amount of code we have to write
    // constructor(code:string,name:string,gender:string,annualsalary:number,dateOfBirth:string){
    //     this.annualSalary=annualsalary;
    //     this.code=code;
    //     this.dateOfBirth=dateOfBirth;
    //     this.name=name;
    // }

     // Implementation of the interface method
    constructor(public code:string, public name:string,public gender:string,public annualSalary:number,public dateOfBirth:string){

    }
    getPerMonthSalary(annualSalary:number):number{
        return annualSalary/12;
    }
}