class Person{
//实例属性
    //readonly 只读属性
  readonly  name: string = "aaa";
//加static静态属性  
   static age: number = 18;

 //也有实例，静态之分   
    sayHello() {
     console.log("AAAAA")
 }   
    
}

const per = new Person();

console.log(Person.age)