import { useEffect, useState } from 'react';
import { BoardgameCard } from './BoardgameCard';

import styles from './Boardgames.module.css';

export function BoardgameList() {
  const [boardgames, setBoardgames] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/boardgames?_limit=10')
      .then((res) => res.json())
      .then(setBoardgames);
  }, []);
  return (
    <section className={styles.container}>
      <h1>Boardgame List</h1>
      {!boardgames && <strong>Loading ...</strong>}
      {boardgames && boardgames.map((bg) => <BoardgameCard key={bg.id} data={bg} />)}
    </section>
  );
}
