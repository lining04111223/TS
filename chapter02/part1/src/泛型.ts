
function fn<T>(a: T): T{
    
    return a;
}

fn(10);

let result = fn<string>("hello")

//泛型可指定多个
//T extends Inter 表示泛型T必须是Inter实现类（子类）

interface Inter{
    length: number;
}

function fn2<T extends Inter>(a: T): number{
    
    return a.length;
}

class MyClass<T>{
    name: T;
    constructor(name: T) {
        
this.name=name

    }
  

}
  const mc = new MyClass<string>("孙悟空");
