(function () {
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
        
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(this);
        }
    }

    class Dog extends Animal{
        
    }




    const dog = new Dog("xiaoh", 4);
})();