abstract class Animal {
  eat() {}
  abstract sleep(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {}
  protected pri() {}
  sleep() {
    // console.log("Dog sleep");
  }
}
let dog = new Dog("wangwang");
dog.eat();
dog.sleep();

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name);
    this.color = color;
    this.pri();
  }
}

class Cat extends Animal {
  sleep() {
    // console.log("Cat sleep");
  }
}
let cat = new Cat();

let animals: Animal[] = [dog, cat];
animals.forEach((item) => {
  item.sleep();
});

class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
new WorkFlow().step1().step2();

class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}
new MyFlow().next().step1().next().step2();
