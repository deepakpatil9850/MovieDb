const MovieCardShimmer = () => {
  return (
    <div className="w-44  h-74 bg-gray-800 rounded-lg shadow-lg animate-pulse">
      <div className="h-50 bg-gray-700 rounded-t-lg"></div>
      <div className="p-2">
        <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
        <div className="flex justify-between items-center">
          <div className="h-3 bg-gray-600 rounded w-1/3"></div>
          <div className="h-6 w-6 bg-gray-600 rounded-full"></div>
        </div>
        <div className="h-3 bg-gray-600 rounded w-1/2 mt-2"></div>
      </div>
    </div>
  );
};

export default MovieCardShimmer;
