import { Link } from "react-router-dom";

export default function GameCard({ game, favorites = [], toggleFavorite }) {
  const isFavorite = favorites.some((f) => f.id === game.id);

  return (
    <div className="game-card zoom-in rgb-glow">
      <img src={game.thumbnail} alt={game.title} className="game-card-img" />

      <div className="game-card-body">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-desc">{game.short_description}</p>

        <div className="flex justify-between mt-4 items-center">
          {/* Ver más: pasamos el objeto game en state para evitar re-fetch */}
          <Link to={`/game/${game.id}`} state={{ game }}>
            <span className="text-blue-400 hover:text-blue-200">Ver más</span>
          </Link>

          <button
            onClick={() => toggleFavorite && toggleFavorite(game)}
            className={isFavorite ? "btn-danger" : "btn-outline"}
            aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {isFavorite ? "💛 Quitar" : "🤍 Favorito"}
          </button>
        </div>
      </div>
    </div>
  );
}
