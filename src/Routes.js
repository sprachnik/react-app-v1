import { Routes as RouterRoutes, Route } from "react-router-dom";
import SearchPage from "./pages/search/SearchPage";
import HomePage from "./pages/home/HomePage";
import RoutePage from "./RoutePage";

const Routes = ({ ...props }) => {
  return (
    <RouterRoutes>
      <Route
        path="/search"
        element={
          <RoutePage>
            <SearchPage />
          </RoutePage>
        }
      />
      <Route path="*" element={<HomePage />} />
    </RouterRoutes>
  );
};

export default Routes;
