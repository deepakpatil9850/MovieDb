import React from "react";
import {Link, useLocation} from "react-router";

const Header = () => {
  const location = useLocation();
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
  console.log("window location:" + location.pathname);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    const query = inputRef.current?.value || "";
    if (query.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="flex justify-between">
        <div className="bg-gray-800 p-4">
          <h1 className="text-white text-2xl">MovieDb</h1>
        </div>
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
              ref={inputRef}
              placeholder="Search movies..."
              className="py-1 pl-2 border border-gray-300 rounded-md w-44 focus-within:bg-white focus-within:text-black focus-within:outline-none focus-within:border-blue-500 transition-colors duration-300"
            />

            <button
              className="ml-2 bg-slate-500 text-white px-2 py-1 rounded-md"
              onClick={() => handleOnClick()}
            >
              Search
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
