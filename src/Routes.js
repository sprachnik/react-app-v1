import { Routes as RouterRoutes, Route } from "react-router-dom";
import SearchPage from "./pages/search/SearchPage";
import IkigaiDemoPage from "./pages/ikigaiDemo/IkigaiDemoPage";
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
      <Route path="/ikigai" element={<IkigaiDemoPage />} />
    </RouterRoutes>
  );
};

export default Routes;
