interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}
// 交叉类型
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
};

// 联合类型
let aU: number | string = "a";
let bU: "a" | "b" | "c"; // 字面量联合类型
let cU: 1 | 2 | 3;

class DogU implements DogInterface {
  run() {}
  eat() {}
}
class CatU implements CatInterface {
  jump() {}
  eat() {}
}
enum Master {
  Boy,
  Girl,
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new DogU() : new CatU();
  pet.eat();
  // pet.run();
  return pet;
}
// 可区分的联合类型
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  r: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.r ** 2;
    default:
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}
// console.log(area({ kind: "circle", r: 1 }));
