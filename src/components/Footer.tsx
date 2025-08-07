const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MovieDb. All rights reserved.
      </p>
      <p className="text-sm">Developed by Deepak Patil</p>
    </footer>
  );
};

export default Footer;
