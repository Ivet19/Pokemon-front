import { Outlet } from "react-router";
import Header from "../Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
