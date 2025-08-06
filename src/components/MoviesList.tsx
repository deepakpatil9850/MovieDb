import React from "react";
import type {MovieCardProps} from "./MovieCard";
import MovieCard from "./MovieCard";

export type MovieListProps = {
  movies: MovieCardProps[];
};

const MovieList: React.FC<MovieListProps> = ({movies}) => {
  return (
    <div>
      {movies.length === 0 ? (
        <h1 className="text-8xl">No movies found</h1>
      ) : (
        <h1 className="text-4xl mb-4">Popular Movies</h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie: MovieCardProps) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
