import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Counter } from "./features/Counter/Counter";
import { Weather } from "./features/Weather/Weather";
import { TodosList } from "./features/Todos/TodosList";
import { Nav } from "./components/Nav/Nav";
import { Register } from "./features/Auth/Register";
import { Login } from "./features/Auth/Login";
import { AuthContextProvider } from "./features/Auth/AuthContext";
import { PrivateRoute } from "./features/Auth/PrivateRoute";
import { BoardgameList } from "./features/Boardgames/BoardgameList";
import { BoardgameDetails } from "./features/Boardgames/BoardgameDetails";
import { EditBoardgame } from "./features/Boardgames/EditBoardgame";

import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="counter" element={<>
            <Counter initialCount={6} diff={3} />
            <Counter />
          </>} />
          <Route path="weather" element={<Weather />} />
          <Route path="todos" element={<PrivateRoute><TodosList /></PrivateRoute>} />
          <Route path="boardgames" element={<BoardgameList />} />
          <Route path="boardgames/add" element={<PrivateRoute><BoardgameList /></PrivateRoute>} />
          <Route path="boardgames/:id" element={<BoardgameDetails />} />
          <Route path="boardgames/:id/edit" element={<PrivateRoute><EditBoardgame /></PrivateRoute>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </AuthContextProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}
