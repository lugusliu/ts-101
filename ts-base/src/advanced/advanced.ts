/**
 * 类型推断
 * 基础类型推断；最佳通用类型推断；上下文类型推断
 */
let aa = 1;
let bb = [1, null];
let cc = (x = 1) => x + 1;
// window.onkeydown = (event) => {
// console.log(event.button);
// };
interface Foo {
  bar: number;
}
// let foo: Foo = {
//   bar: 1,
// };
let foo = {} as Foo;
foo.bar = 1;

/**
 * 类型兼容
 * 当一个类型 Y 可以被赋值给另一个类型 X 时，我们就可以说类型 X 兼容类型 Y
 * X 兼容 Y：X（目标类型）= Y（源类型）
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */
let s: string = "a";
// s = null;

// 接口兼容性：成员少的兼容成员多的
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let xx: X = { a: 1, b: 2 };
let yy: Y = { a: 1, b: 2, c: 3 };
xx = yy;
// yy = xx; // 鸭式变形

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}
// 1. 参数个数，目标函数的参数个数要多于源函数的参数个数
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2);
// 可选参数和剩余参数
let a1 = (p1: number, p2: number) => {};
let b1 = (p1?: number, p2?: number) => {};
let c1 = (...args: number[]) => {};
a1 = b1; // 固定参数兼容可选参数和剩余参数
a1 = c1;
// b1 = a1; // 可选参数不兼容固定参数和剩余参数
// b1 = c1;
c1 = a1;
c1 = b1;

// 2. 参数类型，参数类型要匹配
let handler3 = (a: string) => {};
// hof(handler3);

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d; // 把一个精确的类型赋值给一个不那么精确的类型
// p2d = p3d;

// 3. 返回值类型，目标函数的返回值类型必须与源函数的返回值类型相同或者为其子类型
let ff = () => ({ name: "Alice" });
let gg = () => ({ name: "Alice", location: "Beijing" });
ff = gg;
// gg = ff;

// 函数重载，列表中的实现是目标函数，而具体的实现是源函数，所以目标函数的参数要多于源函数的参数，返回值的类型也要相同或为其子类型
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// 枚举类型兼容性
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Yellow,
}
let fruit: Fruit.Apple = 3; // 枚举类型和数字类型完全兼容
let no: number = Fruit.Banana;
// let color: Color.Red = Fruit.Banana; // 枚举类型和枚举类型是完全不兼容的

// 类兼容性，静态成员和构造函数是不参与比较的
class A {
  constructor(p: number, q: number) {}
  id: number = 1;
  private name: string = "";
}
class B {
  static s = 1;
  constructor(p: number) {}
  id: number = 2;
  private name: string = "";
}
let ca = new A(1, 2);
let cb = new B(1);
// ca = cb;
// cb = ca;
class C extends A {}
let ccc = new C(1, 2);
ccc = ca;
ca = ccc;

// 泛型兼容性
interface Empty<T> {
  value: T;
}
// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2;
let log1 = <T>(x: T): T => {
  return x;
};
let log2 = <U>(y: U): U => {
  return y;
};
log1 = log2; // 泛型函数类型相同，且没有指定类型参数，那么也是可以相互兼容的
log2 = log1;
