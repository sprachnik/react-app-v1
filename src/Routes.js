import { Routes as RouterRoutes, Route } from "react-router-dom";
import SearchPage from "./pages/search/SearchPage";
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
      <Route
        path="*"
        element={
          <RoutePage>
            <>Wildcard</>
          </RoutePage>
        }
      />
    </RouterRoutes>
  );
};

export default Routes;
