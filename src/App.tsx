import "./App.css";
import Data from "./data.json";

// TypeScript データ型 型推論のため、不用だが、明示的につけることをannotation(アノーテーション)という
const name: string = "naobe";

let username: string = "Hello";
let dymmyNum: number = 2;
let bool: boolean = true;

let array1: boolean[] = [true, false, true];
let array2: Array<boolean> = [true, false, true];

let array3: (string | number)[] = [0, 1, "hello"];
let array4: Array<string | number> = [0, 1, "hello"];

let nullValue: null = null;
let undefinedValue: undefined = undefined;

let obj: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 20,
};

interface NameType {
  first: string;
  last: string;
  age?: number;
}

let nameObj: NameType = {
  first: "Yamada",
  last: "Taro",
};

let func: (name: string) => void = (name: string) => {
  console.log(name);
};

const func1 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types （交差型）
type PROFILE = {
  age: number;
  city: string;
};
type LOGIN = {
  username: string;
  password: string;
};
type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "xxx",
  username: "xxx",
  password: "xxx",
};

// Union Types （和集合型）複数の型のいずれかを持つ
let valueUnion: boolean | number;
valueUnion = true;
valueUnion = 10;

// Literal Types （リテラル型）
let company: "Facebook" | "Google" | "Amazon";
company = "Facebook";

let memory: 256 | 512;
memory = 256;

// typeof (型抽出)
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "Hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof (オブジェクトのキーを取得)
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "baseball",
};
let keySport: keyof typeof SPORTS;
keySport = "soccer";

// enum (列挙型)
enum OS {
  Windows, // 0
  Mac, // 1
  Linux, // 2
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// Generics(ジェネリックス)
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = {
  item: "hello",
};
const gen2: GEN<number> = { item: 10 };

interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello" };

// Tがstringかnumberのどちらかであることを保証する
interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = { item: "hello" };
const gen5: GEN2<number> = { item: 10 };

function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);

function fungGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen8 = fungGen1<string>("hello");

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen10 = funcGen3({ price: 10000 });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};
const gen11 = funcGen4({ price: 10000 });

// JSON 型推論
type USERS = typeof Data;

function App() {
  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>
    </>
  );
}

export default App;
