import { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';
import { toast } from 'react-toastify';
import { useAuthContext } from '../Auth/AuthContext';

const apiUrl = 'http://localhost:3000/todos';

export function TodosList() {
  const [todos, setTodos] = useState(null);
  const { accessToken, user } = useAuthContext();

  useEffect(() => {
    fetch(`${apiUrl}?userId=${user.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [user, accessToken]);

  async function handleAddTodo(e) {
    e.preventDefault();
    const form = e.target;
    const values = new FormData(form);
    const newTodo = {
      title: values.get('title'),
      completed: false,
      userId: user.id,
    };

    const createdTodo = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(newTodo),
    }).then((res) => res.json());

    const newTodos = Array.isArray(todos) ? todos : [];
    setTodos([...newTodos, createdTodo]);
  }

  // async function handleDeleteTodo({ id }) {
  async function handleDeleteTodo(todo) {
    // const { id } = todo;
    const id = todo.id;

    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });

    setTodos(todos.filter((t) => t.id !== id));
  }

  async function handleCompleteTodo(id, completed) {
    await fetch(`${apiUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: `{"completed": ${completed}}`,
    });
  }

  if (typeof todos === 'string') {
    toast.error(todos);
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
        {typeof todos !== 'string' &&
          todos?.map((todo) => (
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
