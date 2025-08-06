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
  overview,
  vote_average,
}) => {
  return (
    <div>
      <img
        src={import.meta.env.VITE_POSTER_BASE_URL + "/w500/" + poster_path}
        alt="Movie Poster"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <p className="text-gray-400">{release_date}</p>
          <p className="text-gray-300 line-clamp-3">
            {overview || "No overview available."}
          </p>
          <div className="mt-2">
            <span className="text-yellow-400 font-semibold">
              Rating: {vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
