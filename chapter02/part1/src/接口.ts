(function () {
 
    //描述一个对象的类型
    type myType={
        name: string;
        age: number
    };
 
    // const obj: myType = {
    //     name: "yyy",
    //     age: 111
    // };
  //接口
    interface myInterface{
       name: string;
        age: number;
  }
 const obj: myInterface = {
        name: "yyy",
        age: 111
 };
    
    interface myInter{
        name: string;
        sayHello(): void;
    }

    class MyClass implements myInter{
    
        name: string;
        constructor(name: string) {
            
            this.name = name;
        }

        sayHello() {
            console.log("tggg");
        }
}



})();