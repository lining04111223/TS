let q: object;//很少用

q = {};

//{}用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
let w: { name: string ,age?:number};//?表示写也行，不写也行

w = { name: 'zzzz', age: 18 };

//[propName: string]: any  表示任意类型的属性
let r: { name: string, [propName: string]: any };
r = { name: "df", age: 18, gender: "男" };

//语法：（形参：类型，形参：类型）=> 返回值
let t: (a:number, b:number) => number;
t = function (n1, n2): number{
    return n1 + n2;
}


//数组的两种表达方式：
//类型[], Array<类型>
let y: string[];

let u: Array<number>; 

//元组：固定长度的数组
//语法：[类型，类型]
let i: [string, number];
i = ['hello', 123];


//枚举
enum Gender{
    Male = 0,
    Female=1
}

let p: { name: string, gender: Gender };

p = {
    name: "asd",
    gender:Gender.Male
}

console.log(p.gender === Gender.Male);


//类型的别名
type mytype = 1 | 2 | 3 | 4 | 5;

let k: mytype;
let l: mytype;