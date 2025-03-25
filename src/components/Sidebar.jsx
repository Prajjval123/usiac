import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  // Example links for the sidebar:
  const sidebarLinks = [{name: "Home", link: "home"}, {name: "About Us", link: "about-us"}, {name: "Projects & Products", link: "projects-products"}, {name: "Artworks", link: "artworks"}, {name: "Exhibition", link: "exhibitions"}, {name: "Art History", link: "art-history"},{name: "Infrastructure", link: "infrastructure"}, {name: "Login", link: "login"}];

  return (
    <aside
      className={`
        fixed top-0 right-0
        w-64 h-[60vh]
        bg-gray-900 bg-opacity-100
        z-[9999]
        border-rounded-tl-3xl
        transform
        transition-transform
        duration-300
        ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        lg:hidden
        overflow-y-auto
      `}
    >
      {/* Close Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="mt-12 overflow-y-auto h-[calc(80vh-3rem)]">
        <ul className="flex flex-col space-y-6 text-center text-white">
          {sidebarLinks.map((item) => (
            <li key={item} onClick={toggleSidebar}>
              <Link to={`/${item.link}`} className="block py-2">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
