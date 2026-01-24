import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Auth from "./pages/Auth/Auth";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/archived",
        element: <HomeLayout />,
      },
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