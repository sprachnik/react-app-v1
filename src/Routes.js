import { Routes as RouterRoutes, Route } from "react-router-dom";
import SearchPage from "./pages/search/SearchPage";
import CareersDemoPage from "./pages/careersDemo/CareersDemoPage";
import RoutePage from "./RoutePage";

const Routes = ({ ...props }) => {
  return (
    <RouterRoutes>
      <Route
        path="/"
        element={
          <RoutePage>
            <SearchPage />
          </RoutePage>
        }
      />
      <Route path="/careers" element={<CareersDemoPage />} />
    </RouterRoutes>
  );
};

export default Routes;
