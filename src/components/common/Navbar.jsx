import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Find Jobs", path: "/" },
    { label: "Browse Companies", path: "/companies" },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-8">
        
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="QuickHire" className="w-9 h-9 object-contain" />
            <span className="text-[#1b2340] font-bold text-[1.1rem] tracking-tight">
              QuickHire
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-[0.85rem] transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-[#4f46e5] font-semibold"
                      : "text-[#3d3d3d] font-normal hover:text-[#1b2340]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Login | Sign Up */}
        <div className="hidden md:flex items-stretch h-full">
          <Link
            to="/login"
            className="flex items-center px-8 py-5 text-[0.9rem] font-bold text-[#4f46e5] hover:bg-gray-100 transition-colors duration-200"
          >
            Login
          </Link>
          
          <div className="w-px bg-gray-300 self-stretch" />
          
          <Link
            to="/signup"
            className="flex items-center px-8 py-5 text-[0.9rem] font-bold text-white bg-[#4f46e5] hover:bg-[#4338ca] transition-colors duration-200 rounded-none"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#f4f4f6] hover:bg-[#e8e8f0] transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="flex flex-col gap-[5px] w-5">
            <span
              className={`block h-0.5 bg-[#1a1f36] rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[#1a1f36] rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[#1a1f36] rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-2 flex flex-col gap-4 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-[#4f46e5]"
                  : "text-[#4a5568] hover:text-[#1a1f36]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-[#1a1f36] hover:text-[#4f46e5] transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold text-white bg-[#4f46e5] hover:bg-[#4338ca] px-5 py-2.5 rounded-lg text-center transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
