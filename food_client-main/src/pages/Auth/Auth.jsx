import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { routes } from "../../configs";

const Auth = () => {
  const { user } = useAuth();

  if (user) return <Navigate to={routes.home} replace />;

  return (
    <div className="px-4 text-center">
      <Outlet />
    </div>
  );
};

export default Auth;
