const companies = [
  {
    name: "vodafone",
    logo: (
      <div className="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="13" stroke="#C8C8C8" strokeWidth="2.5" fill="none"/>
          <circle cx="14" cy="14" r="6" stroke="#C8C8C8" strokeWidth="2.5" fill="none"/>
        </svg>
        <span className="text-xl font-medium text-[#C8C8C8] tracking-wide">vodafone</span>
      </div>
    ),
  },
  {
    name: "intel",
    logo: (
      <span className="text-2xl font-bold text-[#C8C8C8] tracking-tight">
        intel<span className="text-[#C8C8C8]">.</span>
      </span>
    ),
  },
  {
    name: "TESLA",
    logo: (
      <span className="text-2xl font-bold text-[#C8C8C8] tracking-[0.25em]">
        T E S L A
      </span>
    ),
  },
  {
    name: "AMD",
    logo: (
      <span className="text-2xl font-bold text-[#C8C8C8] tracking-tight">
        AMD<span style={{ fontSize: "1.4rem" }}>&#8963;</span>
      </span>
    ),
  },
  {
    name: "Talkit",
    logo: (
      <span className="text-2xl font-semibold text-[#C8C8C8] italic tracking-tight">
        Talkit
      </span>
    ),
  },
];

// Duplicate for seamless infinite loop
const allCompanies = [...companies, ...companies];

const CompanyMarquee = () => {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mb-6">
        <p className="text-[#C8C8C8] text-sm font-normal">
          Companies we helped grow
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-20 marquee-track">
          {allCompanies.map((company, i) => (
            <div
              key={i}
              className="flex items-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyMarquee;