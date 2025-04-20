import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation-container">
      <ul className="navigation-links">
        <li>
          <NavLink className="navigation-link" to="/pokemon">
            Pokémon
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation-link" to="/add">
            Add new Pokémon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
