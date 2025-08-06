import {createBrowserRouter} from "react-router";
import App from "../App";
import TopRated from "../pages/TopRated";
import Popular from "../pages/Popular";
import Upcoming from "../pages/Upcoming";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="text-8xl">Something went wrong</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
    ],
  },
]);

export default router;
