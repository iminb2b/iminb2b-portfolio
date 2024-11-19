import HomePageProjects from "@/components/HomePage/HomePageProjects";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageMySkills from "@/components/HomePage/HomePageMySkills";
import HomePageHero2 from "@/components/HomePage/HomePageHero2";
import HomePageExperience from "@/components/HomePage/HomePageExperiences";
import HomePageContact from "@/components/HomePage/HomePageContact";
import Footer from "@/components/HomePage/Footer";

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="Min - Home Page" description={"Nhung Nguyen"} />

      <HomePageHero2 />

      <HomePageExperience />
      <HomePageMySkills />
      <HomePageProjects />
      <HomePageContact />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
