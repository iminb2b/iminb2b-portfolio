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
  gap: 8rem;
  padding: 2rem 0;

  @media screen and (max-width: 1000px) {
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

const title = css(
  {
    fontWeight: "800",
    color: colors.primary,
    fontSize: "4rem",
    width: "100%",
    position: "absolute",
    marginBottom: "3rem",
  },
  {
    "@media screen and (max-width: 1000px)": {
      fontSize: "2rem",
      marginBottom: "2rem",
    },
  },
);

const titleContainer = css({
  position: "relative",
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
