import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useAuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';

export function BoardgameDetails() {
  const [boardgame, setBoardgame] = useState(null);
  const { id } = useParams();
  const { user, accessToken } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/boardgames/${id}`)
      .then((res) => res.json())
      .then(setBoardgame);
  }, [id]);

  async function handleDeleteGame() {
    const isOk = confirm(`Are you sure you want to delete ${boardgame.name}?`);

    if (!isOk) {
      return;
    }

    const res = await fetch(`http://localhost:3000/boardgames/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json());
    console.log(res);

    if (typeof res === 'string') {
      toast.error(res);
      return;
    }
    toast.success('Deleted the boardgame successfully');
    navigate(-1);
  }

  if (!boardgame) {
    return <strong>Loading ...</strong>;
  }

  return (
    <>
      <h1>{boardgame.name}</h1>
      {user && (
        <>
        <Link to="edit">Edit {boardgame.name}</Link>
        <button type="button" onClick={handleDeleteGame}>
          Delete {boardgame.name}
        </button>
        </>
      )}
      <br />
      <img width="300" src={boardgame.image} alt={`${boardgame.name} poster`} />
      <h2>Number of Players</h2>
      <ul>
        <li>Min: {boardgame.numberOfPlayers.min}</li>
        <li>Max: {boardgame.numberOfPlayers.max}</li>
        <li>Recommended: {boardgame.numberOfPlayers.recommended}</li>
      </ul>
    </>
  );
}
