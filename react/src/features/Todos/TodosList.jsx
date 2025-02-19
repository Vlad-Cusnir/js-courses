import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem";

export function TodosList() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  console.log(todos);

  // if(!todos) {
  //   return <strong>Loading ...</strong>
  // }
  
  return (
    <>
      <h1>TodosList</h1>
      {!todos && <strong>Loading ...</strong>}
      <ul>
        {todos?.map((todo) => <TodoItem data={todo} key={todo.id} />)}
      </ul>
    </>
  )
} 
