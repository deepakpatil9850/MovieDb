import React from "react";
import type {MovieCardProps} from "./MovieCard";
import MovieCard from "./MovieCard";
import {Link} from "react-router";

export type MovieListProps = {
  movies: MovieCardProps[];
};

const MovieList: React.FC<MovieListProps> = ({movies}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie: MovieCardProps) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            overview={movie.overview}
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
