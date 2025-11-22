import GameCard from "../components/GameCard";

export default function Favorites({ favorites = [], toggleFavorite }) {
  return (
    <div className="page-container fade-in">
      <h1 className="section-title neon-text">Mis Favoritos</h1>

      {favorites.length === 0 ? (
        <p className="center-text fade-in">Aún no tienes favoritos ❤️</p>
      ) : (
        <div className="grid-games">
          {favorites.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
