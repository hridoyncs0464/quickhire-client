import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobCategories from "../../constants/jobCategories";
import CategoryCard from "../jobs/CategoryCard";

const defaultCounts = {
  design: 235,
  sales: 756,
  marketing: 140,
  finance: 325,
  technology: 436,
  engineering: 542,
  business: 211,
  "human-resource": 346,
};

const Categories = ({ categoryCounts = {} }) => {
  const navigate = useNavigate();

  // ── "marketing" is active by default — matches Figma ──
  const [activeCategory, setActiveCategory] = useState(null);

  const counts =
    Object.keys(categoryCounts).length > 0 ? categoryCounts : defaultCounts;

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    navigate(`/jobs?category=${categoryId}`);
  };

  return (
    <section className="bg-white py-16 mx-4 sm:mx-8 lg:mx-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-3xl mb-24 font-bold text-[#25324B] ">
            Explore by <span className="text-[#26A4FF]">category</span>
          </h2>
          <button
            onClick={() => navigate("/jobs")}
            className="flex items-center gap-2 text-[#4640DE] text-sm font-semibold hover:underline"
          >
            Show all jobs
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* ── 4x2 Grid — loops jobCategories.js data ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {jobCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              jobCount={counts[category.id]}
              isActive={activeCategory === category.id} // ← controlled active state
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
