import { useState } from "react";

// ── SVG Icons ──
const CategoryIcon = ({ type, active }) => {
  const color = active ? "#ffffff" : "#4640DE";
  const props = {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    design: (
      <svg {...props}>
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6"  x2="21" y2="6"  />
        <line x1="9" y1="18" x2="21" y2="18" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="6" cy="6"  r="3" />
      </svg>
    ),
    sales: (
      <svg {...props}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4"  />
        <line x1="6"  y1="20" x2="6"  y2="14" />
        <polyline points="22 20 2 20" />
      </svg>
    ),
    marketing: (
      <svg {...props}>
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
    finance: (
      <svg {...props}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    technology: (
      <svg {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8"  y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    engineering: (
      <svg {...props}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18"   />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    business: (
      <svg {...props}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    hr: (
      <svg {...props}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  };

  return icons[type] ?? null;
};

// ── CategoryCard — Reusable ──
const CategoryCard = ({ category, jobCount, isActive = false, onClick }) => {
  const [hovered, setHovered] = useState(false);

  // card is "filled" if clicked (active) OR currently hovered
  const isFilled = isActive || hovered;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex flex-col gap-8 p-6 border cursor-pointer
        transition-all duration-200
        ${isFilled
          ? "bg-[#4640DE] border-[#4640DE] shadow-md"
          : "bg-white border-gray-200"
        }
      `}
    >
      {/* ── Icon ── */}
      <CategoryIcon type={category.icon} active={isFilled} />

      {/* ── Label + count ── */}
      <div>
        <h3 className={`font-bold text-base mb-1 ${isFilled ? "text-white" : "text-[#25324B]"}`}>
          {category.label}
        </h3>
        <div className="flex items-center gap-2">
          <span className={`text-sm ${isFilled ? "text-[#c7c4f5]" : "text-[#7C8493]"}`}>
            {jobCount !== undefined ? `${jobCount} jobs available` : "Loading..."}
          </span>
          <svg
            className={`w-4 h-4 shrink-0 ${isFilled ? "text-white" : "text-[#4640DE]"}`}
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;