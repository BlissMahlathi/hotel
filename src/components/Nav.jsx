import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const list = [
    { id: 0, title: "Home", url: "#" },
    { id: 1, title: "About Us", url: "#about" },
    { id: 2, title: "Rooms", url: "#rooms" },
    { id: 3, title: "Reservations", url: "#reservations" },
    { id: 4, title: "Testimonials", url: "#testimonials" },
  ];

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a menu option is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Navbar for larger screens (Laptop and above) */}
      <div className="flex justify-between items-center p-6 fixed top-0 w-full bg-slate-50/20 backdrop-blur-lg shadow-lg z-10">
        {/* Logo */}
        <div className="text-5xl font-semibold flex-shrink-0">
          <span>
            <a href="/">
              HOTEL<span className="text-6xl text-red-800">Y</span>
            </a>
          </span>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            {list.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="text-lg text-gray-800 hover:text-red-800 transition"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Book Now Button */}
        <div>
          <button className="font-serif hover:border hover:border-black transition-all duration-300 py-2 px-6 border-2 border-transparent rounded-md bg-red-800 text-white hover:bg-transparent hover:text-black">
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Navigation Hamburger Button */}
      <div className="md:hidden flex justify-between items-center p-6 fixed top-0 left-0 w-full bg-slate-50/20 backdrop-blur-lg shadow-lg z-10">
        {/* Logo */}
        <div className="text-5xl font-semibold">
          <span>
            <a href="/">
              HOTEL<span className="text-6xl text-red-800">Y</span>
            </a>
          </span>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-3xl text-gray-800 hover:text-red-800"
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Side Navigation for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-20 transition-all transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`} // Controls visibility on mobile
      >
        <div
          className={`fixed top-0 left-0 bg-white w-3/4 h-full p-6 transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-6">
            {list.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  onClick={closeMenu} // Close the menu when a link is clicked
                  className="text-lg text-gray-800 hover:text-red-800 transition"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
