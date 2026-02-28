import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedJobCard from "../jobs/FeaturedJobCard";

const FeaturedJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const res  = await fetch("http://localhost:5001/api/jobs/featured");
      const data = await res.json();
      setJobs(data.data || []);
    } catch (err) {
      setError("Could not connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchJobs(); }, []);

  return (
    <section className="bg-white py-16 mx-4 sm:mx-8 lg:mx-16 my-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#25324B]">
            Featured <span className="text-[#26A4FF]">jobs</span>
          </h2>
          <button
            onClick={() => navigate("/jobs")}
            className="flex items-center gap-2 text-[#4640DE] text-sm font-semibold hover:underline"
          >
            Show all jobs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border border-gray-100 p-6 flex flex-col gap-4 animate-pulse">
                <div className="flex justify-between">
                  <div className="w-10 h-10 bg-gray-200 rounded" />
                  <div className="w-20 h-6 bg-gray-200" />
                </div>
                <div className="w-3/4 h-4 bg-gray-200" />
                <div className="w-1/2 h-3 bg-gray-200" />
                <div className="w-full h-3 bg-gray-200" />
                <div className="flex gap-2">
                  <div className="w-16 h-6 bg-gray-200 rounded-full" />
                  <div className="w-16 h-6 bg-gray-200 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-16">
            <p className="text-[#7C8493] mb-4">{error}</p>
            <button onClick={fetchJobs} className="btn-primary px-8 py-3">
              Try again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && jobs.length === 0 && (
          <p className="text-center py-16 text-[#7C8493]">
            No featured jobs found. Set <code>isFeatured: true</code> in MongoDB.
          </p>
        )}

        {/* Jobs Grid */}
        {!loading && !error && jobs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {jobs.map(job => (
              <FeaturedJobCard
                key={job._id}
                job={job}
                onClick={() => navigate(`/jobs/${job._id}`)}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedJobs;