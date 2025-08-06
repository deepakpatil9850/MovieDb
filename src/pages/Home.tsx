import React from "react";
import MovieListCategory from "../components/MovieListCategory";
// import {useLocation} from "react-router";

const Home: React.FC = () => {
  //   const [pathname, setPathname] = React.useState<string>(() => {
  //     return window.location.pathname;
  //   });
  //   const location = useLocation();
  //   console.log("pathname: " + pathname);
  //   console.log("location: " + location.pathname);

  //   useEffect(() => {
  //     setPathname(location.pathname);
  //     console.log("Updated pathname: " + location.pathname);
  //   }, [location.pathname]);

  return (
    <div>
      <MovieListCategory category="now playing" url_params="/now_playing" />
    </div>
  );
};

export default Home;
