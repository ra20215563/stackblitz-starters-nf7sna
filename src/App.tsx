import { FC } from 'react';
import { useState } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>React Counter Demo</h1>
      <h4>counter : {counter}</h4>
      <button type="button" onClick={incrementCounter}>
        increment Counter
      </button>
      <button type="button" onClick={decrementCounter}>
        Decrement Counter
      </button>
    </div>
  );
};
