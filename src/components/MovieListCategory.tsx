import React, {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {useErrorBoundary} from "react-error-boundary";
import MovieList from "../components/MoviesList";
import {capitalizeStr} from "../utils";
import Pagination from "./Pagination";
import MovieListShimmer from "../shimmer/MovieListShimmer";

export type MovieListCategoryProps = {
  category:
    | "now playing"
    | "popular"
    | "top rated"
    | "upcoming"
    | "search results";
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
    return <MovieListShimmer />;
  }
  if (error) {
    return <h1 className="text-5xl ">Something went wrong... </h1>;
  }
  console.log("MovieListCategory data:", data);
  return (
    <div className="mt-6 mb-6">
      <h1 className="text-3xl mb-6 underline underline-offset-8">
        {capitalizeStr(category)}
      </h1>
      {data ? (
        data.results && <MovieList movies={data.results} />
      ) : (
        <h1 className="text-5xl">No movies found</h1>
      )}
      <Pagination
        changePage={setPageNumber}
        currentPage={pageNumber}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default MovieListCategory;
