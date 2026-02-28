import { useNavigate } from "react-router-dom";
import dashboardImg from "../../assets/dashboardImg.png";

const PostJobBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-4 sm:mx-8 lg:mx-16 mt-28 overflow-hidden">
      <div className="bg-[#4640DE] relative flex items-center justify-between min-h-[220px] px-12 py-10 gap-8">
        {/* ── Decorative angled shapes (left + right edges) ── */}
        <div
          className="absolute left-0 top-0 h-full w-16 opacity-20"
          style={{
            background: "linear-gradient(135deg, #ffffff 25%, transparent 25%)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 h-full w-16 opacity-20"
          style={{
            background: "linear-gradient(315deg, #ffffff 25%, transparent 25%)",
          }}
        />

        {/* ── LEFT: Text + Button ── */}
        <div className="relative z-10 flex flex-col gap-5 max-w-xs">
          <h2 className="text-white font-extrabold text-4xl leading-tight">
            Start posting <br /> jobs today
          </h2>
          <p className="text-[#c7c4f5] text-base">
            Start posting jobs for only $10.
          </p>
          <div>
            <button
              onClick={() => navigate("/signup")}
              className="border-2 border-white text-white font-bold text-sm px-8 py-3
                         hover:bg-white hover:text-[#4640DE] transition-colors duration-200"
            >
              Sign Up For Free
            </button>
          </div>
        </div>

        {/* ── RIGHT: Dashboard Image ── */}
        <div className="relative z-10 hidden md:flex items-end justify-end flex-1">
          <img
            src={dashboardImg}
            alt="QuickHire Dashboard"
            className="max-h-[280px] w-auto object-contain drop-shadow-2xl
                       translate-y-6"
          />
        </div>
      </div>
    </section>
  );
};

export default PostJobBanner;
