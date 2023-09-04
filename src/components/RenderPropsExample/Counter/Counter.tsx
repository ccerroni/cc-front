import { useState } from "react";

interface CounterProps {
  render: (count: number, increment: () => void, decrement: () =>void) => React.ReactNode;
}

export const Counter: React.FC<CounterProps> = ({render}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count -1);
  }

  return (
    <div>{render(count, increment, decrement)}</div>
  );
}


