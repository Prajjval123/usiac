import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  // Example links for the sidebar:
  const sidebarLinks = ["Home", "About", "Services", "Contact"];

  return (
    <aside
      className={`fixed top-0 right-0 w-64 h-full bg-blackBackground transform transition-transform duration-300 ease-in-out z-[200]
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        lg:hidden  // Hide the sidebar entirely on large screens
      `}
    >
      {/* Close Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-white"
      >
        X
      </button>

      <ul className="flex flex-col mt-16 space-y-6 text-center text-white">
        {sidebarLinks.map((item) => (
          <li key={item} onClick={toggleSidebar}>
            <Link to={`/${item.toLowerCase()}`} className="block py-2">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
