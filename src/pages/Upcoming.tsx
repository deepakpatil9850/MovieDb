import MovieListCategory from "../components/MovieListCategory";

const Upcoming = () => {
  return (
    <div>
      {" "}
      <MovieListCategory category="upcoming" url_params="/upcoming" />
    </div>
  );
};

export default Upcoming;
