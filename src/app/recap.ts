import { NUMBER_TYPE } from "@angular/compiler/src/output/output_ast";

const username= 'johann';

const sum=(a: number, b:number)=>
{
  return a + b;
}

sum(2,34);

class Person{


  constructor( private age:number,public lastName:string){

  }
}

