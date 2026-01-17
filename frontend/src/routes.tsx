import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Auth from "./pages/Auth/Auth";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Auth />,
      },
      {
        path: "/signup",
        element: <Auth />,
      },
      {
        path: "/reset",
        element: <Auth />,
      },
    ],
  },
]);

export default routes;