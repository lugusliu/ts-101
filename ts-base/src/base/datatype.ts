// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string | null = "abc";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, "4"];

// 元组
let tuple: [number, string, boolean] = [1, "2", true];

// 函数
let add = (x: number, y: number) => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();

// undefined, null
let un: undefined = undefined;
let nu: null = null;
str = null;

// void
let noReturn = () => {};

// any
let x;

// never
let error = () => {
  throw new Error("error");
};
let endless = () => {
  while (true) {}
};
