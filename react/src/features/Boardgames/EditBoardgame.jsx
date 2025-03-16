import { object, string } from 'yup';
import { useValidateForm } from '../../utils/useValidateForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';

const boardgameSchema = object({
  name: string().required(),
  image: string().url().required(),
});

export function EditBoardgame() {
  const [boardgame, setBoardgame] = useState(null);
  const { id } = useParams();

  const { user, accessToken } = useAuthContext();

  useEffect(() => {
    fetch(`http://localhost:3000/boardgames/${id}`)
      .then((res) => res.json())
      .then(setBoardgame);
  }, [id]);

  const { values, errors, handleInputChange, handleSubmit } = useValidateForm(
    boardgameSchema,
    {
      name: boardgame?.name || '',
      image: boardgame?.image || '',
    }
  );

  async function onSubmit(data) {
    // data.userId = user.id;
    await fetch(`http://localhost:3000/boardgames/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    toast.success('Boardgame updated');
  }
  return (
    <form className="brandForm" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="spanFull">EditBoardgame</h1>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={values.name}
        onChange={handleInputChange}
      />
      {errors?.name && <p className="errorMessage">{errors.name}</p>}

      <label htmlFor="image">Image</label>
      <input
        type="url"
        id="image"
        name="image"
        value={values.image}
        onChange={handleInputChange}
      />
      {errors?.image && <p className="errorMessage">{errors.image}</p>}

      <button type="submit">Save</button>
    </form>
  );
}
