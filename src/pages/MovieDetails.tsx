import {useQuery} from "@tanstack/react-query";
import React from "react";
import {useErrorBoundary} from "react-error-boundary";
import {useParams} from "react-router";

const MovieDetails: React.FC = () => {
  const params = useParams<{id: string}>();
  const movieId = params.id;
  const {showBoundary} = useErrorBoundary();
  const {data, isPending, isError, error} = useQuery({
    queryKey: ["movieDetails", movieId],
    queryFn: async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_MOVIE_URL +
            "/" +
            movieId +
            "?api_key=" +
            import.meta.env.VITE_TMDB_API_KEY +
            "&language=en-US"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      } catch (error) {
        showBoundary(error as Error);
        throw error;
      }
    },
  });

  if (!movieId) {
    return <div>No movie ID provided</div>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  console.log("Movie Details:", data);
  return (
    <div className="bg-yellow-300">
      <div className="flex gap-4 mb-8">
        <img
          src={
            import.meta.env.VITE_POSTER_BASE_URL + "/w154/" + data.poster_path
          }
          alt={data.title}
        />
        <div>
          <h1>{data.title}</h1>
          <p>{data.vote_average.toFixed(1)}</p>
          <div>
            <span> {data.runtime}</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src={
            import.meta.env.VITE_POSTER_BASE_URL + "/w500/" + data.backdrop_path
          }
          alt={data.title}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
