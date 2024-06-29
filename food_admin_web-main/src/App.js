import { BrowserRouter } from "react-router-dom";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import Router from "routes";

import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";

const App = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    <div className="app">
      {isFetching + isMutating !== 0 && <Spinner />}
      <BrowserRouter>
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
