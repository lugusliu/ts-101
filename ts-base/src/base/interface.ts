interface List {
  readonly id: number;
  name: string;
  age?: number;
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((value) => {
    // console.log(value.id, value.name);
    if (value.age) {
      // console.log(value.age);
    }
  });
}

let result = {
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B", age: 10 },
  ],
};

render(result);

interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["A", "B"];

interface Names {
  [x: string]: any;
  [z: number]: number;
}

interface Sub {
  (x: number, y: number): number;
}

var sub: Sub = (a, b) => a - b;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0";
  lib.doSomething = () => {};
  return lib;
}

let lib1 = getLib();
lib1.version;
