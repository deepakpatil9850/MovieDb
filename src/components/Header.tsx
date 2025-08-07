import {AlignJustify, X} from "lucide-react";
import React from "react";
import {Link, useLocation, useNavigate} from "react-router";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const headerNavLinks = [
    {
      path: "popular",
      label: "Popular",
    },
    {
      path: "top-rated",
      label: "Top Rated",
    },
    {
      path: "upcoming",
      label: "upcoming",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const closeMobileMenu = () => {
    return () => setIsMobileMenuOpen(false);
  };

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput("");
      closeMobileMenu()();
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50 px-10">
      <div className="flex justify-between items-center">
        <Link to="/" onClick={closeMobileMenu()}>
          <div className="bg-gray-800 p-4">
            <h1 className="text-white text-2xl">MovieDb</h1>
          </div>
        </Link>
        <div
          className="flex md:hidden  justify-center items-center cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {" "}
          {isMobileMenuOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <AlignJustify className="text-white w-6 h-6" />
          )}
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg transition-all duration-500`}
        >
          <ul className=" px-10 py-5bg-gray-300">
            {headerNavLinks.map((link) => (
              <Link
                to={link.path}
                className="bg-green-500"
                onClick={closeMobileMenu()}
              >
                <li
                  key={link.path}
                  className={`${
                    location.pathname === `/${link.path}`
                      ? "font-bold text-white"
                      : ""
                  } text-gray-300 px-3 py-2 border-b hover:text-white w-full  transition-colors duration-300`}
                >
                  {link.label}
                </li>
              </Link>
            ))}

            <li className="flex items-center py-4">
              <input
                type="text"
                value={searchInput}
                placeholder="Search movies..."
                className="py-1 pl-2 border border-gray-300 rounded-md w-44 focus-within:bg-white focus-within:text-black focus-within:outline-none flex-1 bg-slate-900 focus-within:border-blue-500
                 transition-colors duration-300"
                onChange={(e) => setSearchInput(e.target.value)}
              />

              <button
                className="ml-2 bg-slate-500 text-white px-2 py-1 rounded-md"
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4 items-center p-4 bg-gray">
            {headerNavLinks.map((link) => (
              <li
                key={link.path}
                className={`${
                  location.pathname === `/${link.path}`
                    ? "font-bold text-white"
                    : ""
                }text-gray-300 hover:text-white transition-colors duration-300`}
              >
                <Link to={link.path} className="">
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <input
                type="text"
                value={searchInput}
                placeholder="Search movies..."
                className="py-1 pl-2 border border-gray-300 rounded-md w-44 focus-within:bg-white focus-within:text-black focus-within:outline-none focus-within:border-blue-500 transition-colors duration-300"
                onChange={(e) => setSearchInput(e.target.value)}
              />

              <button
                className="ml-2 bg-slate-500 text-white px-2 py-1 rounded-md"
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
