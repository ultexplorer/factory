'use strict'

class Person {
    constructor(name){
        this.name = name;
    }
    static factory(name){
        return new Person(name);
    }
}

const p1 = new Person('Marcus');
console.dir({p1});

const p2 = Person.factory('Aureliuse');
console.dir({p2})