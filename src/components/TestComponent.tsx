import { useState } from "react";

interface Props {
  text: string;
}

// React Hooks useState type
interface UserData {
  id: number;
  name: string;
}
interface UserData {
  id: number;
  name: string;
}
const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "John",
  });

  // Event Handler type
  const [inputData, setInputData] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputData(e.target.value);

  return (
    <>
      <div>{props.text}</div>
      <div>{count}</div>

      <input type="text" value={inputData} onChange={handleChange} />
      <h2>{inputData}</h2>
    </>
  );
};

export default TestComponent;
