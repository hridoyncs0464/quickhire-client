import { useState } from "react";
import { Link } from "react-router";
// import logo from "../assets/logo.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  const [email, setEmail] = useState("");

  const aboutLinks = [
    { label: "Companies",      path: "/companies" },
    { label: "Pricing",        path: "/pricing" },
    { label: "Terms",          path: "/terms" },
    { label: "Advice",         path: "/advice" },
    { label: "Privacy Policy", path: "/privacy" },
  ];

  const resourceLinks = [
    { label: "Help Docs",   path: "/help" },
    { label: "Guide",       path: "/guide" },
    { label: "Updates",     path: "/updates" },
    { label: "Contact Us",  path: "/contact" },
  ];

  return (
    <footer className="bg-[#202430] text-white">

      {/* ── Main Footer Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="QuickHire" className="w-9 h-9 object-contain" />
              <span className="text-white font-bold text-xl tracking-tight">
                QuickHire
              </span>
            </Link>
            <p className="text-[#9EAEC0] text-sm leading-relaxed max-w-[220px]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* ── Col 2: About ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-base">About</h4>
            <ul className="flex flex-col gap-4">
              {aboutLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#9EAEC0] text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Resources ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-base">Resources</h4>
            <ul className="flex flex-col gap-4">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#9EAEC0] text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Get Job Notifications ── */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-base">
              Get job notifications
            </h4>
            <p className="text-[#9EAEC0] text-sm leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            {/* Email Subscribe */}
            <div className="flex items-stretch">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-[#25324B] text-sm px-4 py-3 outline-none placeholder-gray-400 min-w-0"
              />
              <button className="btn-primary px-5 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-[#2e3447]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-[#9EAEC0] text-sm">
            {new Date().getFullYear()} @ QuickHire. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">

            {/* Facebook */}
            <a href="#" aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-[#3a4060] flex items-center justify-center text-[#9EAEC0] hover:text-white hover:border-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#3a4060] flex items-center justify-center text-[#9EAEC0] hover:text-white hover:border-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>

            {/* Globe/Website */}
            <a href="#" aria-label="Website"
              className="w-9 h-9 rounded-full border border-[#3a4060] flex items-center justify-center text-[#9EAEC0] hover:text-white hover:border-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[#3a4060] flex items-center justify-center text-[#9EAEC0] hover:text-white hover:border-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="#" aria-label="Twitter"
              className="w-9 h-9 rounded-full border border-[#3a4060] flex items-center justify-center text-[#9EAEC0] hover:text-white hover:border-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;