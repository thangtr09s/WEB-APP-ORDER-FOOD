import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./routes";
import CartProvider from "./contexts/CartProvider";
import AuthProvider from "./contexts/AuthProvider";

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Router />
            <ToastContainer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
