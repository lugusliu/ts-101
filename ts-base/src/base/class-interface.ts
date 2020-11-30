interface Human {
  name: string;
  eat(): void;
}

// 1. 类实现接口的时候必须实现接口中声明的所有属性
// 2. 接口只能约束类的公有成员
// 3. 接口不能约束类的构造函数
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {}
}

interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: "",
  run() {},
  eat() {},
  cry() {},
};

// 1. 接口可以通过类去实现（implements），但是接口只能约束类的公有成员
// 2. 接口可以抽离类的成员（extends），抽离的时候可以包括 public, private 和 protected
class Auto {
  state = 1;
}
interface AutoInterface extends Auto {}

class c implements AutoInterface {
  constructor(state: number) {
    this.state = state;
  }
  state: number;
}

class Bus extends Auto implements AutoInterface {}
