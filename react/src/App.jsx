import { Counter } from "./features/Counter/Counter";
import { Weather } from "./features/Weather/Weather";
import { TodosList } from "./features/Todos/TodosList";

import './App.css';

export function App() {
  return (
    <>
      <Counter initialCount={6} diff={3} />
      <Counter />
      <Weather />
      <TodosList />
    </>
  );
}
