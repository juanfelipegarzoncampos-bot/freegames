export default function NotFound() {
    return (
      <div className="center-text fade-in">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-2 text-gray-500">
          La página que buscas no existe
        </p>
  
        <a href="/" className="btn-primary inline-block mt-6">
          Volver al inicio
        </a>
      </div>
    );
  }
  