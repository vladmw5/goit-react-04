import { createContext, useState } from 'react';

export const CounterContextInstance = createContext();

const CounterContext = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value = 1) => {
    setCounter(counter - value);
  };

  return (
    <CounterContextInstance.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContextInstance.Provider>
  );
};

export default CounterContext;
