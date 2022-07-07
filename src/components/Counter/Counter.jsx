import { useContext } from 'react';
import { CounterContextInstance } from 'components/CounterContext/CounterContext';

const Counter = () => {
  const { counter, increment, decrement } = useContext(CounterContextInstance);

  return (
    <div>
      <button type="button" onClick={() => decrement()}>
        -
      </button>
      <span>{counter}</span>
      <button type="button" onClick={() => increment()}>
        +
      </button>
    </div>
  );
};

export default Counter;
