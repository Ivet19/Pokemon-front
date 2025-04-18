import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <main className="principal-container">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Page not found</p>
      </div>
      <img
        src="404_pikachu.png"
        alt="Pikachu with a detective hat and a hand lens"
        width={300}
      />
      <p className="error-message">
        The page you are looking for doesn't exist or an error has ocurred.
      </p>
    </main>
  );
};

export default NotFoundPage;
