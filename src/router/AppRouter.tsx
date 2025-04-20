import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import PokemonPage from "../pokemon/pages/PokemonPage/PokemonPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AddPokemonPage from "../pokemon/pages/AddPokemonPage/AddpokemonPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/pokemon"} />} />
        <Route path="pokemon" element={<PokemonPage />} />
        <Route path="add" element={<AddPokemonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
