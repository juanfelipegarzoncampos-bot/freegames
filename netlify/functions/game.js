export async function handler(event) {
    try {
      const id = event.queryStringParameters.id;
      const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
      const data = await res.json();
  
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Error al obtener el juego" })
      };
    }
  }
  