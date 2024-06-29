import { Fragment, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { useToggle } from "hooks";
import { Header, Sidebar } from "components/Layout";
import { routes, auth } from "configs";
import { LoadingSreen } from "components";

const Layout = ({ children }: { children: ReactNode }) => {
  const { on: isActiveSidebar, toggle: handleToggleSidebar } = useToggle(true);
  const [user, loading] = useAuthState(auth);

  if (loading) return <LoadingSreen />;

  if (!user && !loading) return <Navigate to={routes.login} replace />;

  return (
    <Fragment>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div
        className={`px-8 pb-10 transition-base bg-accent min-h-screen pt-28 ${
          isActiveSidebar ? "lg:ml-260" : "lg:ml-80"
        }`}
      >
        {children}
      </div>

      <Sidebar
        handleToggleSidebar={handleToggleSidebar}
        isActiveSidebar={isActiveSidebar}
      />
    </Fragment>
  );
};

export default Layout;
