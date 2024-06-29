import { Navigate, useLocation } from "react-router-dom";

import Login from "./components/Login";
import { auth, routes } from "configs";
import ResetPassword from "./components/ResetPassword";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoadingSreen } from "components";

const Auth = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) return <LoadingSreen />;
  if (user) return <Navigate to={routes.dashBoard} replace />;

  return (
    <div className="min-h-screen bg-white bg-center bg-no-repeat bg-cover flex-center bg-backdrop_login">
      <div className="text-white p-6 bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-[10px] w-full max-w-[calc(100%-30px)] sm:max-w-[500px]">
        {location.pathname === routes.login ? <Login /> : <ResetPassword />}
      </div>
    </div>
  );
};

export default Auth;
