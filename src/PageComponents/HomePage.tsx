import HomePageProjects from "@/components/HomePage/HomePageProjects";
import HomePageHero from "@/components/HomePage/HomePageHero";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageMySkills from "@/components/HomePage/HomePageMySkills";
import HomePageMyServices from "@/components/HomePage/HomePageMyServices";
import HomePageAboutMe from "@/components/AboutMe/AboutMe";
import HomePageHero2 from "@/components/HomePage/HomePageHero2";
import hero from "@/assets/images/hero.png";
import Image from "next/image";
import { css } from "@emotion/react";

const heroImage = css({
  height: "800px",
});

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="Min - Home Page" description={"Nhung Nguyen"} />
      <HomePageHero2 />

      <Image src={hero.src} alt="" width={600} css={heroImage} height={800} />
      {/* <HomePageMyServices /> */}
      {/* <HomePageMySkills /> */}
      <HomePageProjects />
    </PageContainer>
  );
};

export default HomePage;
