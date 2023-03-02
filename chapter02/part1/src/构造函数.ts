(function () {
    class Dog {
        name: string;
        age: number;

        constructor(name: string, age: number) {
        
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log(this);
        }
    }
    const dog = new Dog(name: "xiaoh", age: 4);
})();