import { Counter } from "./features/Counter/Counter";
import './App.css';

export function App() {
  return (
    <>
      <Counter initialCount={6} diff={3} />
      <Counter />
    </>
  );
}
