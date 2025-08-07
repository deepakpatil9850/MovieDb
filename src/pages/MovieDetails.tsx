import {useQuery} from "@tanstack/react-query";
import React from "react";
import {useErrorBoundary} from "react-error-boundary";
import {useParams} from "react-router";
import CastDetail from "../components/CastDetail";

const MovieDetails: React.FC = () => {
  const params = useParams<{id: string}>();
  const movieId = params.id;
  const {showBoundary} = useErrorBoundary();
  const {data, isPending} = useQuery({
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

  console.log("Movie Details:", data);
  return (
    <section>
      <div className="rounded-md">
        <div className="grid grid-cols-2">
          <div className="p-3 bg-slate-950">
            <div className="flex rounded">
              <img
                src={
                  import.meta.env.VITE_POSTER_BASE_URL +
                  "/w92/" +
                  data.poster_path
                }
                className="w-28 h-40 rounded-md"
                alt={data.title + " poster"}
              />
              <div className="ml-3 flex flex-col justify-between">
                <h1 className="text-2xl ">{data.title}</h1>
                <p className="text-gray-400">
                  Rating: {data.vote_average.toFixed(1)}
                </p>
                <div>
                  <span className="p-1 bg-slate-800 rounded-xl text-xs font-semibold">
                    {" "}
                    {data.runtime} min{" "}
                  </span>
                  <span className=" ml-2">
                    {data.genres
                      .map((genre: {name: string}) => genre.name)
                      .join(", ")}
                  </span>
                </div>
                <p>Release Date: {data?.release_date}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">overview</h3>
              <p className="text-justify text-gray-400 leading-tight text-xs font-light ">
                {data.overview}
              </p>
            </div>
          </div>

          <img
            src={
              import.meta.env.VITE_POSTER_BASE_URL +
              "/w500/" +
              data.backdrop_path
            }
            className="w-full rounded-md"
            alt={data.title}
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <CastDetail movieId={movieId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
