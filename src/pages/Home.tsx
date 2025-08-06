import React, {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {useErrorBoundary} from "react-error-boundary";
import MovieList from "../components/MoviesList";

const Home: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {showBoundary} = useErrorBoundary();
  const {data, error, isPending} = useQuery({
    queryKey: ["homeData", pageNumber],
    queryFn: async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_MOVIE_URL +
            "/popular?api_key=" +
            import.meta.env.VITE_TMDB_API_KEY +
            "&language=en-US&page=" +
            pageNumber
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
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

  console.log("Home data:", data);

  if (isPending) {
    return <h1 className="text-8xl">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-8xl">Something went wrong </h1>;
  }
  return (
    <div>
      {data ? (
        data.results && <MovieList movies={data.results} />
      ) : (
        <h1 className="text-8xl">No movies found</h1>
      )}
      <button onClick={() => setPageNumber((prev: number) => prev + 1)}>
        next
      </button>
    </div>
  );
};

export default Home;
