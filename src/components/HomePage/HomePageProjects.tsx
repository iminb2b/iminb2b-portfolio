import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import HomePageProjectsListItem from "./HomePageProjectsListItem";
import { AppContext } from "@/context/AppContext";

import { projectInfos } from "@/value/projectsInfo";
import colors from "@/value/colors";
const container = css`
  ${contentContainer}

  margin: auto;
  width: 100%;
`;
const contentWrapper = css`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding: 2rem 0;

  @media screen and (max-width: 688px) {
    padding: 1rem 0;
  }
`;

const projectsContainer = css`
  border-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  grid-gap: 2rem;
  margin-bottom: 3rem;
  width: 100%;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const title = css({
  fontWeight: "800",
  color: colors.primary,
  fontSize: "4rem",
  width: "100%",
  position: "absolute",
});

const titleLight = css({
  width: "100%",
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  fontWeight: "200",
  letterSpacing: "1rem",
  fontSize: "4.125rem",
  textAlign: "right",
  position: "absolute",
  color: "#a4a49c",
  bottom: "2rem",
});

const titleContainer = css({
  position: "relative",
  height: "6rem",
  width: "100%",
});

const HomePageProjects: FC = () => {
  const {
    state: { lang, darkmode },
  } = useContext(AppContext);

  return (
    <div css={container}>
      <div css={contentWrapper}>
        <div css={titleContainer}>
          {/* <p css={titleLight}>FEATURED PROJECTS</p> */}
          <p css={title}>FEATURED PROJECTS</p>
        </div>

        <div css={projectsContainer}>
          {projectInfos.map((project) => (
            <HomePageProjectsListItem project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageProjects;
