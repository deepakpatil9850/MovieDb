import React, {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {useErrorBoundary} from "react-error-boundary";
import MovieList from "../components/MoviesList";
import {capitalizeStr} from "../utils";

export type MovieListCategoryProps = {
  category: "now playing" | "popular" | "top rated" | "upcoming";
  url_params: string;
};

const MovieListCategory: React.FC<MovieListCategoryProps> = ({
  category,
  url_params,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const {showBoundary} = useErrorBoundary();
  const {data, error, isPending} = useQuery({
    queryKey: [category, pageNumber],
    queryFn: async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_MOVIE_URL +
            url_params +
            "?api_key=" +
            import.meta.env.VITE_TMDB_API_KEY +
            "&language=en-US&page=" +
            pageNumber
        );
        if (!response.ok) {
          throw new Error(
            "Network response is not ok: " +
              response.statusText +
              "at " +
              response.url
          );
        }
        return await response.json();
      } catch (error) {
        showBoundary(
          error instanceof Error ? error : new Error("Unknown error occurred")
        );
        if (error instanceof Error) {
          throw new Error("Failed to fetch data: " + error.message);
        } else {
          throw new Error("Failed to fetch data: Unknown error");
        }
      }
    },
  });

  if (isPending) {
    return <h1 className="text-8xl">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-8xl">Something went wrong </h1>;
  }
  return (
    <div>
      <h1 className="text-3xl text-orange-400">{capitalizeStr(category)}</h1>
      {data ? (
        data.results && <MovieList movies={data.results} />
      ) : (
        <h1 className="text-8xl">No movies found</h1>
      )}
      <button
        onClick={() => setPageNumber((prev: number) => prev + 1)}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        next
      </button>
    </div>
  );
};

export default MovieListCategory;
