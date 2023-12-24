import { useAuth } from "@/context/authContext";
import { ReactNode, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, []);

  return children;
};

export default ProtectedRoutes;
