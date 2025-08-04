import {Link} from "react-router";

const Header = () => {
  const headerNavLinks = [
    {
      path: "/",
      label: "Home",
    },
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
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="flex justify-between">
        <div className="bg-gray-800 p-4">
          <h1 className="text-white text-2xl">MovieDb</h1>
        </div>
        <ul className="flex space-x-4 p-4 bg-gray">
          {headerNavLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="text-white hover:text-gray-300">
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <Link to="/search" className="text-white hover:text-gray-300">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
