import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="title-container">
        <img src="pokemon.svg" alt="Pokémon" />
        <h1 className="main-header__title">Pokedex</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
