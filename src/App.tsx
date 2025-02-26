import "./App.css";

// TypeScript データ型 型推論のため、不用だが、明示的につけることをannotation(アノーテーション)という
const name: string = "naobe";

let username: string = "Hello";

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
