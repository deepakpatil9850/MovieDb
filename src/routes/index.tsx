import {createBrowserRouter} from "react-router";
import App from "../App";
import TopRated from "../pages/TopRated";
import Popular from "../pages/Popular";
import Upcoming from "../pages/Upcoming";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="text-8xl">Something went wrong</h1>,
    children: [
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
