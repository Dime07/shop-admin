import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import { useAuth } from "./context/authContext";
import Dashboard from "./pages/dashboard";

import Product from "./pages/product";
import ProtectedRoutes from "./routes/protectedRoutes";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />

      <Route
        path="/product"
        element={
          <ProtectedRoutes>
            <Product />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
