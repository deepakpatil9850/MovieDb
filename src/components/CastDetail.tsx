import React from "react";

import {useQuery} from "@tanstack/react-query";

type CastDetailProps = {
  movieId: string;
};

type CastMember = {
  name: string;
  id: string;
  profile_path: string;
  character: string;
};

const CastDetail: React.FC<CastDetailProps> = ({movieId}) => {
  const {data} = useQuery({
    queryKey: [movieId],
    queryFn: async () => {
      const response = await fetch(
        import.meta.env.VITE_BASE_MOVIE_URL +
          "/" +
          movieId +
          "/credits" +
          "?api_key=" +
          import.meta.env.VITE_TMDB_API_KEY +
          "&language=en-US"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    },
  });
  return (
    <div className="mt-6">
      <h2 className="text-2xl mb-4">Cast</h2>
      <div className="flex flex-wrap justify-between gap-3">
        {data?.cast.slice(0, 6).map((cast: CastMember) => (
          <div key={cast.id} className="w-40 leading-tight">
            <img
              src={
                import.meta.env.VITE_POSTER_BASE_URL +
                "/w92/" +
                cast.profile_path
              }
              alt={cast.name + " profile picture"}
              className="w-full h-55 bg-slate-700 mb-1"
            />
            <h3 className="text-lg">{cast.name}</h3>
            <p className="text-gray-400">Character: {cast.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastDetail;
