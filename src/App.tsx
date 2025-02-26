import "./App.css";

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
