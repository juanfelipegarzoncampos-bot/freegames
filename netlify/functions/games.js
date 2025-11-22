export async function handler() {
    try {
      const res = await fetch("https://www.freetogame.com/api/games?platform=pc");
  
      const data = await res.json();
  
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "No se pudo conectar a la API" })
      };
    }
  }
  