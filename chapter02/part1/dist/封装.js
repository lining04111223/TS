"use strict";
(() => {
    class Person {
        constructor(name, age) {
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
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    const per = new Person('sss', 17);
    per.name = "AAA";
    console.log(per.name);
})();
