import MovieCardShimmer from "./MovieCardShimmer";

const MovieListShimmer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 justify-items-center">
      {Array.from({length: 20}).map((_, index) => (
        <MovieCardShimmer key={index} />
      ))}
    </div>
  );
};

export default MovieListShimmer;
