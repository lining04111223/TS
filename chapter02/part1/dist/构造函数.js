"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(this);
        }
    }
    class Dog extends Animal {
    }
    const dog = new Dog("xiaoh", 4);
})();
