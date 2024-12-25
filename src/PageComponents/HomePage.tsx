import HomePageProjects from "@/components/HomePage/HomePageProjects";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageMySkills from "@/components/HomePage/HomePageMySkills";
import HomePageHero from "@/components/HomePage/HomePageHero";
import HomePageExperience from "@/components/HomePage/HomePageExperiences";
import HomePageContact from "@/components/HomePage/HomePageContact";
import Footer from "@/components/HomePage/Footer";
import { contentContainer } from "@/styles/generalStyles";
import { useEffect } from "react";

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="Min - Home Page" description={"Nhung Nguyen"} />
      <div css={contentContainer}>
        <HomePageHero />
        <HomePageExperience />
        <HomePageMySkills />
        <HomePageProjects />
        {/* <HomePageContact /> */}
      </div>

      <Footer />
    </PageContainer>
  );
};

export default HomePage;
