import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ServicesDropdown from "./ServicesDropdown";
import Sidebar from "./Sidebar";
import { GlobalContext } from "../context/GlobalContext";
import gsap from "gsap";

const Header = () => {
  const [selected, setSelected] = useState("");
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { homepageData, loading, error } = useContext(GlobalContext);
  // const links = homepageData?.header?.links || [];
  const links = [
    { name: "Home", url: "/home" },
    { name: "About Us", url: "/about-us" },
    { name: "Product & Projects", url: "projects-products" },
    { name: "Artworks", url: "artworks" },
    { name: "Exhibition", url: "exhibitions" },
    { name: "Art History", url: "art-history" },
    { name: "Infrastructure", url: "infrastructure" },
    { name: "Login", url: "login" },
  ];

  // GSAP Refs
  const headerRef = useRef(null);
  const linkRefs = useRef([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelection = (link) => {
    setSelected(link);
    if (link !== "Services") {
      setIsServiceDropdownOpen(false);
    }
  };

  const handleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  const isHoverHandle = (hover) => {
    setIsHover(hover);
  };

  // Animate header & nav links
  useEffect(() => {
    if (loading || error || !homepageData) return;

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }
      );
    }

    linkRefs.current.forEach((linkEl, i) => {
      if (!linkEl) return;
      gsap.fromTo(
        linkEl,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.inOut",
          delay: i * 0.2,
        }
      );
    });
  }, [loading, error, homepageData]);

  return (
    <header
      ref={headerRef}
      className=" z-[100] flex items-center h-24 py-4 px-4 sm:px-6 lg:px-12"
    >
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/home">
          <img
            src="/assets/US-INDIA-Logo.jpg"
            alt="Logo"
            className="w-44 mt-4"
          />
        </Link>

        {/* Hamburger Icon for small & medium screens */}
        <div className="ml-auto block lg:hidden">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Nav for large screens */}
        <nav>
          <ul className="hidden lg:flex space-x-8 mx-auto font-light">
            {links.map((link, index) => (
              <li
                key={link}
                ref={(el) => (linkRefs.current[index] = el)}
                className="relative group flex items-center"
              >
                <div
                  className={`flex items-center ${
                    link === "Services" ? "cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    handleSelection(link);
                    if (link === "Services") {
                      handleServiceDropdown();
                    } else {
                      isHoverHandle(false);
                    }
                  }}
                  onMouseEnter={() =>
                    link === "Services" && isHoverHandle(true)
                  }
                  onMouseLeave={() =>
                    link === "Services" && !isHover && isHoverHandle(false)
                  }
                >
                  <Link
                    to={link.url}
                    className={`hover:text-[#e4005e]  tracking-wide transform transition-transform duration-300 hover:scale-105 cursor-pointer text-md lg:text-md  ${
                      selected === link ? "text-[#e4005e] " : "text-white"
                    } ${
                      link === "Login"
                        ? "bg-pink-600 hover:bg-pink-700 rounded p-0.5 px-4 text-white"
                        : ""
                    } `}
                    onMouseOver={() =>
                      link === "Services" && isHoverHandle(true)
                    }
                    onMouseOut={() =>
                      link === "Services" && isHoverHandle(false)
                    }
                    onClick={(e) => {
                      if (link === "Services") e.preventDefault();
                    }}
                  >
                    {link.name}
                  </Link>
                </div>

                {/* Services Dropdown */}
                {link === "Services" && (
                  <div className="absolute top-full left-[-900%]">
                    <ServicesDropdown
                      isServiceDropdownOpen={isServiceDropdownOpen}
                      handleServiceDropdown={handleServiceDropdown}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sidebar (renders outside the nav) */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
