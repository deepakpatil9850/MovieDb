import Header from "./components/Header";
import Footer from "./components/Footer";
import {Outlet} from "react-router";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white max-w-full mx-auto">
      <Header />
      <main className="container mx-auto px-4 py-18 min-h-screen">
        <h1>Home page</h1>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
