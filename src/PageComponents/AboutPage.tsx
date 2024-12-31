import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageAboutMe from "@/components/AboutMe/AboutMe";
import { contentContainer } from "@/styles/generalStyles";

const AboutPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta
        title="Min - About Me"
        description={"Information about Nhung Nguyen"}
      />
      <div css={contentContainer}>
        <HomePageAboutMe />
      </div>
    </PageContainer>
  );
};

export default AboutPage;
