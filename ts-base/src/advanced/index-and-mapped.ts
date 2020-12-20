let objIndex = {
  a: 1,
  b: 2,
  c: 3,
};

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}

console.log(getValues(objIndex, ["a", "b"]));
// console.log(getValues(objIndex, ["e", "f"]));

interface Obj {
  a: string;
  b: number;
  c: boolean;
}

// keypf T，类型 T 的所有公共属性的字面量的联合类型
let key: keyof Obj;

// T[K]，索引访问操作符
let value: Obj["a"];

// T extends U

// 映射类型，从一个旧的类型生成一个新的类型
type ReadonlyObj = Readonly<Obj>;

type PartialObj = Partial<Obj>;

type PickObj = Pick<Obj, "a" | "b">;

type RecordObj = Record<"x" | "y", Obj>;
