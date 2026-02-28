import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Find Jobs",        path: "/" },
    { label: "Browse Companies", path: "/companies" },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-8">

        {/* ── LEFT: Logo + Nav Links ── */}
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

        {/* ── RIGHT: Login | Sign Up ── */}
        <div className="hidden md:flex items-stretch h-full">

          {/* Login — bold indigo text, vertically centered, tall click area */}
          <Link
            to="/login"
            className="flex items-center px-8 py-5 text-[0.9rem] font-bold text-[#4f46e5] hover:bg-gray-100 transition-colors duration-200"
          >
            Login
          </Link>

          {/* Thin vertical divider */}
          <div className="w-px bg-gray-300 self-stretch" />

          {/* Sign Up — solid indigo, sharp corners, no border-radius */}
          <Link
            to="/signup"
            className="flex items-center px-8 py-5 text-[0.9rem] font-bold text-white bg-[#4f46e5] hover:bg-[#4338ca] transition-colors duration-200 rounded-none"
          >
            Sign Up
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="flex flex-col justify-center gap-[5px] w-[17px]">
            <span className={`block h-[1.8px] bg-[#1b2340] rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.8px]" : ""}`} />
            <span className={`block h-[1.8px] bg-[#1b2340] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.8px] bg-[#1b2340] rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.8px]" : ""}`} />
          </span>
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pt-3 pb-6 flex flex-col gap-4 bg-[#f5f5f7] border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-[#4f46e5] font-semibold"
                  : "text-[#3d3d3d] font-normal hover:text-[#1b2340]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-200" />
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-bold text-[#4f46e5] hover:text-[#4338ca] transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-bold text-white bg-[#4f46e5] hover:bg-[#4338ca] px-5 py-3 text-center transition-colors rounded-none"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;