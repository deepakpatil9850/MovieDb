// import {useQuery} from "@tanstack/react-query";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import {useErrorBoundary} from "react-error-boundary";
// import {useErrorBoundary} from "react-error-boundary";
import {useSearchParams} from "react-router";
import MovieList from "../components/MoviesList";
import Pagination from "../components/Pagination";
import MovieListShimmer from "../shimmer/MovieListShimmer";
// import MovieList from "../components/MoviesList";

const SearchPage: React.FC = () => {
  const [pageNumber, setPageNumber] = React.useState(1);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const {showBoundary} = useErrorBoundary();
  const {data, isPending} = useQuery({
    queryKey: [searchQuery, pageNumber],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/search/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&include_adult=false&query=${
            searchQuery?.trim() || ""
          }&page=${pageNumber}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        showBoundary(error);
        console.error("Error fetching search results:", error);
      }
    },
  });

  if (isPending) {
    return <MovieListShimmer />;
  }

  return (
    <div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Search Results</h2>
        {data && data.results && data.results.length > 0 ? (
          <>
            <MovieList movies={data.results} />
            <div className="mt-4 mb-6 h-1 w-full"></div>
            <Pagination
              changePage={setPageNumber}
              currentPage={pageNumber}
              totalPages={data?.total_pages || 1}
            />
          </>
        ) : (
          <p className="text-gray-500">
            No results found. Please try a different search term.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
