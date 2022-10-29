"use strict";

class Person {
  constructor(name) {
    this.name = name;
  }
}

const factorify =
  (Category) =>
  (...args) =>
    new Category(...args);

const p1 = new Person("Marcus");
console.dir({ p1 });

const personFactory = factorify(Person);
const p2 = personFactory("Aureliuse");
console.dir({ p2 });
