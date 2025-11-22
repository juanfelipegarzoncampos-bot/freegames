export default function ErrorMessage({ message }) {
    return (
      <div className="error-box">
        <h2>Error</h2>
        <p>{message}</p>
      </div>
    );
  }
  