import HeroSection from "../components/home/HeroSection";
import FeaturedJobs from "../components/home/FeaturedJobs";
import Categories from "../components/home/Categories";
import CompanyMarquee from "../components/home/CompanyMarquee";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
      <HeroSection />
      <CompanyMarquee />
      <FeaturedJobs />
      <Categories />
    </div>
  );
};

export default HomePage;
