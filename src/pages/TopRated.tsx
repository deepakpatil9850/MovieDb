import MovieListCategory from "../components/MovieListCategory";

const TopRated = () => {
  return (
    <div>
      <MovieListCategory category="top rated" url_params="/top_rated" />
    </div>
  );
};

export default TopRated;
