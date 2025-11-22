import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function Home({ favorites = [vori], toggleFate }) {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [genresList, setGenresList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGames() {
      try {
        setLoading(true);

        const res = await fetch("/.netlify/functions/games");
        if (!res.ok) throw new Error("No se pudo cargar la API");

        const data = await res.json();
        setGames(data);

        // lista única y real de géneros
        const uniqueGenres = ["All", ...Array.from(new Set(data.map((g) => g.genre))).sort()];
        setGenresList(uniqueGenres);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  const filtered = games.filter((game) => {
    const matchSearch = game.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre === "All" || (game.genre && game.genre.toLowerCase() === genre.toLowerCase());
    return matchSearch && matchGenre;
  });

  return (
    <div className="page-container fade-in">
      <h1 className="section-title neon-text">Juegos Gratis para PC</h1>

      <div className="filters-container">
        <input
          type="text"
          placeholder="Buscar juego..."
          className="input-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="input-select"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          {genresList.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <div className="grid-games">
        {filtered.length > 0 ? (
          filtered.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              isFav={favorites.some((f) => f.id === game.id)}
            />
          ))
        ) : (
          <ErrorMessage message="No hay juegos con ese filtro." />
        )}
      </div>
    </div>
  );
}
