import { RouteObject } from "react-router-dom";

import DashBoard from "pages/DashBoard";
import Auth from "pages/Auth";
import OrderManagement from "pages/OrderManagement";
import Error from "pages/Error";
import { routes as routesConfig } from "configs";
import { Layout } from "components/Layout";
import UserManagment from "pages/UserManagment";
import Product from "pages/Product";

const routes = (): RouteObject[] => [
  {
    path: routesConfig.dashBoard,
    element: (
      <Layout>
        <DashBoard />
      </Layout>
    ),
  },

  {
    path: routesConfig.orderManagement,
    element: (
      <Layout>
        <OrderManagement />
      </Layout>
    ),
  },

  {
    path: routesConfig.userManagement,
    element: (
      <Layout>
        <UserManagment />
      </Layout>
    ),
  },

  {
    path: routesConfig.login,
    element: <Auth />,
  },
  {
    path: routesConfig.resetPassword,
    element: <Auth />,
  },

  {
    path: routesConfig.error,
    element: <Error />,
  },

  {
    path: routesConfig.product,
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },
];

export default routes;
