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
