let h : string;

let b: 10; //字面量

// | 或
let c: "male" | "female";

//任意类型
let d: any;
d = 10;
d = "Hello";
d = true;

//unknown是类型安全的any
let e: unknown;

d = 10;
d = "Hello";
d = true;


let s: string;
//类型断言,以下两种一样
s = e as string;
s = <string>e;

//void 用来表示空，以函数为例，就是没有返回值
function fn():void{
}

