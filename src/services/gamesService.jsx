const BASE = "https://www.freetogame.com/api";

export async function fetchGames() {
  const res = await fetch(`${BASE}/games?platform=pc`);
  return res.json();
}

export async function fetchGameById(id) {
  const res = await fetch(`${BASE}/game?id=${id}`);
  return res.json();
}
