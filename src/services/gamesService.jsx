const BASE = "/.netlify/functions";

export async function fetchGames() {
  const res = await fetch(`${BASE}/games`);
  return res.json();
}

export async function fetchGameById(id) {
  const res = await fetch(`${BASE}/game?id=${id}`);
  return res.json();
}
