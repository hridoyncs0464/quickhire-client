import { useState } from "react";
import heroBoyImg from "../../assets/heroBoyImg.png";
import pattern from "../../assets/pattern.png";

const HeroSection = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("Florence, Italy");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", jobTitle, "in", location);
  };

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* ── Background pattern ── */}
      <img
        src={pattern}
        alt=""
        className="absolute top-0 right-0 w-[55%] h-full object-cover object-left opacity-60 pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── LEFT: Text Content ── */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
                <span className="text-[#25324B]">Discover</span>
                <br />
                <span className="text-[#25324B]">more than</span>
                <br />
                <span className="text-[#26A4FF]">5000+ Jobs</span>
              </h1>
              <div className="relative w-[420px] h-3 mt-2">
                <svg viewBox="0 0 420 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C140 2 280 2 418 10" stroke="#26A4FF" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <p className="text-[#515B6F] text-lg leading-relaxed max-w-md">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>

            {/* ── Search Bar ── */}
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white shadow-lg w-full max-w-3xl overflow-hidden border border-gray-100 "
            >
              {/* Job Title Input */}
              <div className="flex items-center gap-3 flex-1 px-8 py-6">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="outline-none text-[#25324B] text-sm placeholder-gray-400 bg-transparent w-full"
                />
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-gray-200" />

              {/* Location Dropdown */}
              <div className="flex items-center gap-3 px-8 py-6 min-w-[220px]">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="outline-none text-[#25324B] text-sm bg-transparent cursor-pointer w-full"
                >
                  <option>Florence, Italy</option>
                  <option>Remote</option>
                  <option>New York, NY</option>
                  <option>San Francisco, CA</option>
                  <option>London, UK</option>
                </select>
              </div>

              {/* Search Button — sharp corners */}
              <button
                type="submit"
                className="btn-primary self-stretch px-10"
              >
                Search my job
              </button>
            </form>

            <div className="text-sm text-[#515B6F]">
              <span className="font-medium">Popular:</span>{" "}
              <span>UI Designer, UX Researcher, Android, Admin</span>
            </div>
          </div>

          {/* ── RIGHT: Hero Boy Image ── */}
          <div className="hidden lg:flex items-end justify-center relative">
            <img
              src={heroBoyImg}
              alt="Job seeker"
              className="relative z-10 max-h-[500px] w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;