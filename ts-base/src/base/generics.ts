// 1. 函数和类可以轻松地支持多种类型，增强程序的扩展性
// 2. 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 3. 灵活控制类型之间的约束

// 泛型定义函数
function log<T>(value: T): T {
  // console.log(value);
  return value;
}
log<string[]>(["a", "b"]);
log(["a", "b"]);

// 泛型定义函数类型
// type Log = <T>(value: T) => T;

// 泛型约束函数接口
interface Log<T = string> {
  (value: T): T;
}
let myLog: Log = log;
myLog("abc");

// 泛型约束类的成员，但不能应用于类的静态成员
class Gen<T> {
  run(value: T) {
    // console.log(value);
    return value;
  }
}

let gen1 = new Gen<number>();
gen1.run(1);
let gen2 = new Gen();
gen2.run(2);
gen2.run("3");

interface Length {
  length: number;
}

function gFunc<T extends Length>(value: T): T {
  // console.log(value, value.length);
  return value;
}

gFunc("abc");
gFunc([1, 2, 3]);
gFunc({ length: 1 });
