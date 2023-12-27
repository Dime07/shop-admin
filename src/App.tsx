import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import { useAuth } from "./context/authContext";
import Dashboard from "./pages/dashboard";

import ProtectedRoutes from "./routes/protectedRoutes";
import AddProductPage from "./pages/product/add";
import Product from "./pages/product";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
      {/* PROTECTED ROUTES */}
      <Route
        path="/product"
        element={
          <ProtectedRoutes>
            <Product />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/product/add"
        element={
          <ProtectedRoutes>
            <AddProductPage />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
