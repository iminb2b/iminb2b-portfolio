import HomePageProjects from "@/components/HomePage/HomePageProjects";
import HomePageHero from "@/components/HomePage/HomePageHero";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageMySkills from "@/components/HomePage/HomePageMySkills";
import HomePageMyServices from "@/components/HomePage/HomePageMyServices";
import HomePageAboutMe from "@/components/AboutMe/AboutMe";

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="Min - Home Page" description={"Nhung Nguyen"} />
      <HomePageHero />
      {/* <HomePageMyServices /> */}
      {/* <HomePageMySkills /> */}
      <HomePageProjects />
    </PageContainer>
  );
};

export default HomePage;
