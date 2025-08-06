import {Star} from "lucide-react";

export type MovieCardProps = {
  id?: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path?: string;
  vote_average: number;
};

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster_path,
  release_date,
  vote_average,
}) => {
  return (
    <div className="rounded-lg overflow-hidden w-44 min-h-74 shadow-gray-950 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <img
        src={import.meta.env.VITE_POSTER_BASE_URL + "/w500/" + poster_path}
        alt={title + " poster"}
        className="object-cover min-h-60 w-full bg-gray-600"
        loading="lazy"
      />
      <div>
        <div className=" p-1  rounded-lg">
          <h2 className="text-white text-lg font-semibold  tracking-tight line-clamp-2 leading-tight">
            {title}
          </h2>
          <div className="flex justify-between items-center ">
            <p className="text-gray-400 text-sm">{release_date}</p>
            <div className="relative mr-2.5">
              <Star
                size={45}
                strokeWidth={1}
                color={
                  vote_average >= 7
                    ? "lime"
                    : vote_average >= 5
                    ? "gold"
                    : "darkorange"
                }
                className="text-green-600"
              />
              <span className="absolute top-[35.0%] left-[32.30%] text-white text-xs font-semibold">
                {vote_average?.toFixed(1) || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
