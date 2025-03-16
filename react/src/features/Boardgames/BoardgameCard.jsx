import { Link } from "react-router";

export function BoardgameCard({data}) {
  return (
    <article>
        <Link to={String(data.id)}>
          <img src={data.thumbnail} alt={`${data.name} poster`} />
          <h3>
            {data.name}
          </h3>
        </Link>
      </article>
  )
}
