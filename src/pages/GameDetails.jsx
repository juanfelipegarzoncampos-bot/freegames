import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGame() {
      try {
        const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`);        ;

        if (!res.ok) throw new Error("Error al cargar el juego.");

        const data = await res.json();
        setGame(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadGame();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="page-container">
      <h1 className="section-title">{game.title}</h1>

      <div className="game-details-box rgb-glow">
        <img src={game.thumbnail} alt={game.title} />

        <p>{game.short_description}</p>

        <div className="game-details-tags">
          <span className="badge">{game.genre}</span>
          <span className="badge">{game.platform}</span>
        </div>

        <a href={game.game_url} target="_blank" className="btn-primary">
          Jugar ahora
        </a>
      </div>
    </div>
  );
}
