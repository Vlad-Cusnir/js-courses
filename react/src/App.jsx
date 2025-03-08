import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Counter } from "./features/Counter/Counter";
import { Weather } from "./features/Weather/Weather";
import { TodosList } from "./features/Todos/TodosList";
import { Nav } from "./components/Nav/Nav";
import { Register } from "./features/Auth/Register";
import { Login } from "./features/Auth/Login";

import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="counter" element={<>
          <Counter initialCount={6} diff={3} />
          <Counter />
        </>} />
        <Route path="weather" element={<Weather />} />
        <Route path="todos" element={<TodosList />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
