interface Props {
  text: string;
}

const TestComponent: React.FC<Props> = (props) => {
  return <div>{props.text}</div>;
};

export default TestComponent;
