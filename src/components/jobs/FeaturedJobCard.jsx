




// import React from "react";

// // ── Tag color map ──
// const tagColors = {
//   marketing: "bg-[#FFE7D3] text-[#FF8A00]",
//   design: "bg-[#E6F4FF] text-[#26A4FF]",
//   business: "bg-[#EDEAFF] text-[#4640DE]",
//   technology: "bg-[#E6F9F4] text-[#0BA02C]",
//   engineering: "bg-[#FFE7E6] text-[#FF4539]",
//   finance: "bg-[#FFF3D3] text-[#E9A605]",
//   sales: "bg-[#F3EFFF] text-[#7B61FF]",
//   "human-resource": "bg-[#E6F4FF] text-[#26A4FF]",
//   illustration: "bg-[#E6F4FF] text-[#26A4FF]",
//   backend: "bg-[#FFE7E6] text-[#FF4539]",
//   "node.js": "bg-[#E6F9F4] text-[#0BA02C]",
// };

// const getTagColor = (tag) => {
//   const key = tag.toLowerCase().replace(/\s+/g, "-");
//   return tagColors[key] || "bg-[#F3F4F6] text-[#7C8493]";
// };

// // ── Company Avatar ──
// const CompanyAvatar = ({ company, logo }) => {
//   if (logo) {
//     return (
//       <img
//         src={logo}
//         alt={company}
//         className="w-12 h-12 object-contain rounded-md"
//       />
//     );
//   }

//   return (
//     <div className="w-12 h-12 rounded-md bg-[#4640DE] flex items-center justify-center text-white font-semibold text-lg shrink-0">
//       {company?.charAt(0).toUpperCase()}
//     </div>
//   );
// };

// // ── Featured Job Card ──
// const FeaturedJobCard = ({ job, onClick }) => {
//   const tags = job.tags || [];

//   const shortDesc =
//     job.description?.length > 90
//       ? job.description.slice(0, 90) + "..."
//       : job.description;

//   return (
//     <div
//       onClick={onClick}
//       className="
//         bg-white
//         border border-[#E4E7EC]
//         rounded-xl
//   px-6 py-7      
//     flex flex-col
//         gap-5
//         cursor-pointer
//         transition-all duration-200
//         hover:border-[#4640DE]
//         hover:shadow-lg
//       "
//     >
//       {/* ── Top Section (Logo + Badge) ── */}
//       <div className="flex items-start justify-between">
//         <CompanyAvatar
//           company={job.company}
//           logo={job.companyLogo}
//         />

//         <span className="border border-[#4640DE] text-[#4640DE] px-4 py-1.5 text-xs font-medium rounded-md shrink-0">
//           {job.type || "Full Time"}
//         </span>
//       </div>

//       {/* ── Title & Company ── */}
//       <div>
//         <h3 className="text-lg font-semibold text-[#25324B] leading-tight">
//           {job.title}
//         </h3>

//         <p className="text-sm text-[#7C8493] mt-1">
//           {job.company}
//           <span className="mx-2 text-gray-300">•</span>
//           {job.location}
//         </p>
//       </div>

//       {/* ── Description ── */}
//       <p className="text-sm text-[#7C8493] leading-6">
//         {shortDesc}
//       </p>

//       {/* ── Tags ── */}
//       {tags.length > 0 && (
//         <div className="flex gap-3 flex-wrap pt-2">
//           {tags.slice(0, 2).map((tag) => (
//             <span
//               key={tag}
//               className={`px-4 py-1.5 rounded-full text-sm font-medium ${getTagColor(
//                 tag
//               )}`}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeaturedJobCard;






// // ── Tag color map ──
const tagColors = {
  "marketing":        "bg-[#FFE7D3] text-[#FF8A00]",
  "design":           "bg-[#E6F4FF] text-[#26A4FF]",
  "business":         "bg-[#EDEAFF] text-[#4640DE]",
  "technology":       "bg-[#E6F9F4] text-[#0BA02C]",
  "engineering":      "bg-[#FFE7E6] text-[#FF4539]",
  "finance":          "bg-[#FFF3D3] text-[#E9A605]",
  "sales":            "bg-[#F3EFFF] text-[#7B61FF]",
  "human-resource":   "bg-[#E6F4FF] text-[#26A4FF]",
  "illustration":     "bg-[#E6F4FF] text-[#26A4FF]",
  "backend":          "bg-[#FFE7E6] text-[#FF4539]",
  "node.js":          "bg-[#E6F9F4] text-[#0BA02C]",
};

const getTagColor = (tag) => {
  const key = tag.toLowerCase().replace(/\s+/g, "-");
  return tagColors[key] || "bg-[#F3F3F3] text-[#7C8493]";
};

const CompanyAvatar = ({ company, logo }) => {
  if (logo) {
    return <img src={logo} alt={company} className="w-12 h-12 object-contain" />;
  }
  return (
    <div className="w-12 h-12 rounded bg-[#4640DE] flex items-center justify-center text-white font-bold text-lg shrink-0">
      {company?.charAt(0).toUpperCase()}
    </div>
  );
};

const FeaturedJobCard = ({ job, onClick }) => {
  const tags = job.tags || [];
  const shortDesc = job.description?.length > 80
    ? job.description.slice(0, 80) + "..."
    : job.description;

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 m-10 p-16 flex flex-col gap-4 cursor-pointer
                 hover:border-[#4640DE] hover:shadow-md transition-all duration-200"
    >
      {/* ── Logo + Type Badge ── */}
      <div className="flex items-start justify-between gap-2">
        <CompanyAvatar company={job.company} logo={job.companyLogo} />
        <span className="border border-[#4640DE] text-[#4640DE] px-3 py-1 text-xs font-medium shrink-0">
          {job.type || "Full-Time"}
        </span>
      </div>

      {/* ── Title ── */}
      <div>
        <h3 className="font-bold text-[#25324B] text-base mb-1 leading-snug">
          {job.title}
        </h3>
        <p className="text-sm text-[#7C8493]">
          {job.company}
          <span className="mx-1 text-gray-300">•</span>
          {job.location}
        </p>
      </div>

      {/* ── Description ── */}
      <p className="text-xs text-[#7C8493] leading-relaxed">
        {shortDesc}
      </p>

      {/* ── Tags ── */}
      {tags.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-auto pt-2">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedJobCard;