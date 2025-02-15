import { HiTrash } from 'react-icons/hi2';

import styles from './Todos.module.css';

export function TodoItem({ data, onDelete, onComplete }) {
  function handleDeleteClick() {
    onDelete(data);
  }

  function handleComplete(e) {
    const isCompleted = e.target.checked;
    onComplete(data.id, isCompleted);
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={data.completed}
          onChange={handleComplete}
        />
        {data.title}
      </label>{' '}
      <button
        type="button"
        className={styles.deleteButton}
        onClick={handleDeleteClick}
      >
        <HiTrash />
      </button>
    </li>
  );
}
