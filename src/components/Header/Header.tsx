import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <img src="pokemon.svg" alt="Pokémon" />
      <h1 className="main-header__title">Pokedex</h1>
    </header>
  );
};

export default Header;
