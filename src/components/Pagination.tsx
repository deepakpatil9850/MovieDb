import React from "react";

type PaginationProps = {
  changePage: (page: number) => void;
  totalPages: number;
  currentPage: number;
};
const Pagination: React.FC<PaginationProps> = ({
  changePage,
  totalPages,
  currentPage,
}) => {
  const handlePageChange = (page: number) => {
    changePage(page);
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  return (
    <div className="flex justify-between items-center mt-6 mb-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        onClick={handlePrevious}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <div>
        <span className="text-gray-300">
          Page <span className="text-white font-bold">{currentPage}</span> of{" "}
          {totalPages}
        </span>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
