class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const o1 = new Person('Max');
const o2 = new Student('Suraj', '2nd Grade');
const o3 = new Student('Ayush', '1st Grade');

o1.greet();
o2.greet();
o3.greet();