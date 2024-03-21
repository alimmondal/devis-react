import data from "../Data.json";
import About from "../components/About/About";
import IconBox from "../components/Iconbox/Iconbox";
import Skill from "../components/Skill/Skill";
import Resume from "../components/Resume/ResumeSection";
import BlogSection from "../components/Blog/BlogSection";
import ReviewSection from "../components/Review/ReviewSection";
import Contact from "../components/Contact/Contact";
import PortfolioSection from "../components/Protfolio/PortfolioSection";
import Hero from "../components/Hero/Hero";
import { useEffect, useState } from "react";

const Home = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
  }, []);

  const user = datas?.user;
  const projects = datas?.user?.projects;
  console.log("portfolio: ", projects);

  console.log("api data loaded", datas);

  const {
    heroData,
    aboutData,
    serviceData,
    skillData,
    portfolioData,
    blogData,
    resumeData,
    reviewData,
    contactData,
    socialData,
  } = data;
  // console.log("portfolio", portfolioData);
  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero data={heroData.homeOneHero} socialData={socialData} />
      <About data={aboutData} data-aos="fade-right" />
      <IconBox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact
        data={contactData}
        socialData={socialData}
        data-aos="fade-right"
      />
    </>
  );
};

export default Home;
