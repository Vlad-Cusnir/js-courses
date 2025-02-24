import { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';

const apiUrl = 'http://localhost:3000/todos';

export function TodosList() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  async function handleAddTodo(e) {
    e.preventDefault();
    const form = e.target;
    const values = new FormData(form);
    const newTodo = {
      title: values.get('title'),
      completed: false,
      userId: 1,
    };

    const createdTodo = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    }).then((res) => res.json());

    setTodos([...todos, createdTodo]);
  }

  // async function handleDeleteTodo({ id }) {
  async function handleDeleteTodo(todo) {
    // const { id } = todo;
    const id = todo.id;

    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });

    setTodos(todos.filter((t) => t.id !== id));
  }

  async function handleCompleteTodo(id, completed) {
    await fetch(`${apiUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `{"completed": ${completed}}`,
    });
  }

  return (
    <>
      <h1>TodosList</h1>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="title">What do you want to do?</label>
        <input type="text" name="title" id="title" />
        <button type="submit">Add todo</button>
      </form>
      {!todos && <strong>Loading ...</strong>}
      <ul>
        {todos?.map((todo) => (
          <TodoItem
            data={todo}
            key={todo.id}
            onDelete={handleDeleteTodo}
            onComplete={handleCompleteTodo}
          />
        ))}
      </ul>
    </>
  )
}
