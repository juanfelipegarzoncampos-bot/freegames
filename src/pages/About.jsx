export default function About() {
    return (
      <div className="about-container fade-in">
        <h1 className="about-title neon-text">Sobre este Proyecto</h1>
  
        <div className="about-card">
          <h2>🎮 ¿Qué es FreeGames?</h2>
          <p>
            FreeGames es una plataforma donde puedes encontrar una lista completa
            de videojuegos gratuitos disponibles para PC. Toda la información se
            obtiene en tiempo real desde la API oficial de FreeToGame.
          </p>
        </div>
  
        <div className="about-card">
          <h2>⚙️ Funcionalidades principales</h2>
          <ul>
            <li>✔ Listado completo de juegos gratis</li>
            <li>✔ Vista detallada de cada juego</li>
            <li>✔ Búsqueda por nombre</li>
            <li>✔ Filtro por género</li>
            <li>✔ Sistema de favoritos guardados</li>
            <li>✔ Interfaz oscura tipo videojuego</li>
          </ul>
        </div>
  
        <div className="about-card">
          <h2>🚀 Tecnologías utilizadas</h2>
          <ul>
            <li>⚛ React + Vite</li>
            <li>🎨 CSS modular personalizado</li>
            <li>🌐 API externa con proxy</li>
            <li>🔁 React Router para navegación</li>
          </ul>
        </div>
  
        <div className="about-card">
          <h2>👤 Desarrollador</h2>
          <p>
            Proyecto desarrollado por <strong>Juan Felipe Garzón Campos</strong>.
            Un desarrollador apasionado por la programación, los videojuegos y el
            aprendizaje continuo.
          </p>
        </div>
      </div>
    );
  }
  