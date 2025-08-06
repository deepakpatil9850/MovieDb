import React from "react";

type FallbackOnErrorProps = {
  error?: Error | string | null;
  resetErrorBoundary?: () => void;
};

const FallbackOnError: React.FC<FallbackOnErrorProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="text-center">
      <h1 className="text-8xl">Something went wrong</h1>
      <p className="text-xl mt-4">
        {error instanceof Error ? error.message : String(error)}
      </p>

      <button
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
};

export default FallbackOnError;
