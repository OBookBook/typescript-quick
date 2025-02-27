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

  return (
    <>
      <div>{props.text}</div>
      <div>{count}</div>
    </>
  );
};

export default TestComponent;
