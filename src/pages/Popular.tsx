import MovieListCategory from "../components/MovieListCategory";
import MovieListShimmer from "../shimmer/MovieListShimmer";

const Popular = () => {
  return (
    <div>
      {" "}
      <MovieListCategory category="popular" url_params="/popular" />
      <MovieListShimmer />
    </div>
  );
};

export default Popular;
