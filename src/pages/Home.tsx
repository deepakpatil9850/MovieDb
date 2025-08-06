import React from "react";
import MovieListCategory from "../components/MovieListCategory";
// import {useLocation} from "react-router";

const Home: React.FC = () => {
  //   const [pathname, setPathname] = React.useState<string>(() => {
  //     // Initialize pathname from the current location
  //     return window.location.pathname;
  //   });
  //   const location = useLocation();
  //   console.log("pathname: " + pathname);
  //   console.log("location: " + location.pathname);

  //   useEffect(() => {
  //     // Update pathname whenever the location changes
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
