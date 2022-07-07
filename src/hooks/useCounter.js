import { useState } from 'react';

export default function useCounter(value) {
  const [state, setState] = useState(value);

  const incrementCounter = () => {
    setState(prevState => prevState + 1);
  };

  const decrementCounter = () => {
    setState(prevState => prevState - 1);
  };

  const disabled = state ? false : true;

  return { state, incrementCounter, decrementCounter, disabled };
}
