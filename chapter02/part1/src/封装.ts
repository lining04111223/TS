( ()=> {
    class Person{
      private  _name: string;
      private  _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }


//         getName() {
//             return this._aname;
//         }
//         setName(value: string) {
//             this._aname = value;
// }
        get name() {
          

            return this._name
      }  
        
        set name(value: string) {
            this._name = value;
        }

    }
    const per = new Person('sss', 17);
    per.name = "AAABBBB";

console.log(per.name)


})()