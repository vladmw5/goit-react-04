import CounterContext from './CounterContext/CounterContext';
import Counter from './Counter';
export const App = () => {
  return (
    <CounterContext>
      <Counter />
    </CounterContext>
  );
};
