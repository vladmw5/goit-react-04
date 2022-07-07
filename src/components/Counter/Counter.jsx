// import { useContext } from 'react';
import useCounter from 'hooks/useCounter';
// import { CounterContextInstance } from 'components/CounterContext/CounterContext';

const Counter = () => {
  // const { counter, increment, decrement } = useContext(CounterContextInstance);

  // return (
  //   <div>
  //     <button type="button" onClick={()=>decrement()}>
  //       -
  //     </button>
  //     <span>{counter}</span>
  //     <button type="button" onClick={()=>increment()}>
  //       +
  //     </button>
  //   </div>
  // );

  const {
    state: counter,
    incrementCounter: increment,
    decrementCounter: decrement,
    disabled,
  } = useCounter(0);

  return (
    <div>
      <button type="button" onClick={decrement} disabled={disabled}>
        -
      </button>
      <span>{counter}</span>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
