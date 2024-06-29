import { routes as routerConfig } from "../configs";
import { Layout } from "../components/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact/Contact";
import DetailProduct from "../pages/DetailProduct/DetailProduct";
import Payment from "../pages/Payment/Payment";
import ListProduct from "../pages/ListProduct";
import Cart from "../pages/Cart";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/components/Login";
import Register from "../pages/Auth/components/Register";
import Search from "../pages/Search/Search";
import Account from "../pages/Account/Account";
import Ordes from "../pages/Account/components/Orders/Orders";
import Status from "../pages/Account/components/Status/Status";

const routes = () => [
  {
    path: routerConfig.home,
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: routerConfig.contact,
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: routerConfig.detail_product,
    element: (
      <Layout>
        <DetailProduct />
      </Layout>
    ),
  },
  {
    path: routerConfig.payment,
    element: <Payment />,
  },
  {
    path: routerConfig.list_product,
    element: (
      <Layout>
        <ListProduct />
      </Layout>
    ),
  },
  {
    path: routerConfig.cart,
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: routerConfig.search,
    element: (
      <Layout>
        <Search />
      </Layout>
    ),
  },

  {
    path: "/account/:id",
    element: (
      <Layout>
        <Account />
      </Layout>
    ),
    children: [
      {
        path: "/account/:id/orders",
        element: <Ordes />,
      },

      {
        path: "/account/:id/order/:id/status",
        element: <Status />,
      },
    ],
  },

  {
    path: "/auth",
    element: (
      <Layout>
        <Auth />
      </Layout>
    ),
    children: [
      { path: "", element: <Login /> },
      { path: "dang-nhap", element: <Login /> },
      { path: "dang-ki", element: <Register /> },
    ],
  },
];

export default routes;
