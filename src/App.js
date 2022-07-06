import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
} from "react-router-dom";

import AboutPage from "./pages/about/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<>Users</>} />
        <Route path="*" element={<>Wildcard</>} />
      </Routes>
    </Router>
  );
}

export default App;
