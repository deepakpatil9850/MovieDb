import Header from "./components/Header";
import Footer from "./components/Footer";
import {Outlet} from "react-router";
import {ErrorBoundary} from "react-error-boundary";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import FallbackOnError from "./components/FallbackOnError";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-900 min-h-screen text-white max-w-full mx-auto">
        <Header />
        <main className="container mx-auto px-4 py-18 min-h-screen">
          <ErrorBoundary
            fallbackRender={({error, resetErrorBoundary}) => (
              <FallbackOnError
                error={error}
                resetErrorBoundary={resetErrorBoundary}
              />
            )}
            onError={(error, info) => {
              console.error("Error Boundary caught an error:", error);
              console.error("Error info:", info);
            }}
          >
            <Outlet />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
