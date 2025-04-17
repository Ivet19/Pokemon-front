import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <header className="main-header">
        <div className="title-container">
          <img src="pokemon.svg" alt="Pokémon" />
          <h1 className="main-header__title">Pokedex</h1>
        </div>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
