class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName(){
        return `My name is ${this.name}`;
    }

    getAge(){
        return this.age;
    }
}

export {Person};