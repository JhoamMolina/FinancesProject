import {
  NavLink,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <ul>
            <li>
              <NavLink to="/budget" className="nav-active">
                Budget Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/salary-calculator" className="nav-active">
                Salary Calculator
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Routes> element is used to define your routes */}
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.to}
              path={route.path}
              element={<route.Component />}
            />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </Router>
  );
};
