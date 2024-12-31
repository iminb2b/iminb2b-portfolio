import { FC } from "react";
import { css } from "@emotion/react";
import HomePageProjectsListItem from "./HomePageProjectsListItem";

import { projectInfos } from "@/value/projectsInfo";
const container = css`
  margin: auto;
  width: 100%;
`;
const contentWrapper = css`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8rem;
  padding: 5rem 0;

  @media screen and (max-width: 1000px) {
    padding: 1rem 0;
    gap: 3rem;
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
    fontSize: "4rem",
    width: "100%",
    position: "absolute",
    marginBottom: "3rem",
  },
  {
    "@media screen and (max-width: 1000px)": {
      fontSize: "1.5rem",
    },
  },
);

const titleContainer = css({
  position: "relative",
  width: "100%",
});

const HomePageProjects: FC = () => {
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
