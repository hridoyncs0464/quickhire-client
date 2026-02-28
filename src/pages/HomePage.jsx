import HeroSection from "../components/home/HeroSection";
import CompanyMarquee from "../components/home/CompanyMarquee";
import Categories from "../components/home/Categories";
import FeaturedJobs from "../components/home/FeaturedJobs";
import PostJobBanner from "../components/home/PostJobBanner";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CompanyMarquee />
      <FeaturedJobs />
      <Categories />
      <PostJobBanner />
    </>
  );
};

export default HomePage;