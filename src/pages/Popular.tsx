import MovieListCategory from "../components/MovieListCategory";

const Popular = () => {
  return (
    <div>
      {" "}
      <MovieListCategory category="popular" url_params="/popular" />
    </div>
  );
};

export default Popular;
