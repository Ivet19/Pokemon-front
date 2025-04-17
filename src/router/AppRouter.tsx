import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import PokemonPage from "../pokemon/pages/PokemonPage";
import NotFoundPage from "../pokemon/pages/NotFoundPage/NotFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/pokemon" />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
