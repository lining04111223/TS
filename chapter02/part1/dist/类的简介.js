"use strict";
class Person {
    constructor() {
        //实例属性
        //readonly 只读属性
        this.name = "aaa";
    }
    //也有实例，静态之分   
    sayHello() {
        console.log("AAAAA");
    }
}
//加static静态属性  
Person.age = 18;
const per = new Person();
console.log(Person.age);
