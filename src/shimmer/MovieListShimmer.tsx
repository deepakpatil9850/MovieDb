import MovieCardShimmer from "./MovieCardShimmer";

const MovieListShimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 justify-items-center">
      {Array.from({length: 12}).map((_, index) => (
        <MovieCardShimmer key={index} />
      ))}
    </div>
  );
};

export default MovieListShimmer;
