import { FC, useContext } from "react";
import { css } from "@emotion/react";
import {
  contentContainer,
  sectionDescription,
  sectionTitle,
} from "@/styles/generalStyles";
import HomePageProjectsListItem from "../HomePage/HomePageProjectsListItem";
import { AppContext } from "@/context/AppContext";

import { projectInfos } from "@/value/projectsInfo";
const container = css`
  ${contentContainer}

  margin: auto;
  width: 100%;
`;
const contentWrapper = css`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding: 5rem 0;

  @media screen and (max-width: 688px) {
    padding: 1rem 0;
    gap: 1rem;
  }
`;

const projectsContainer = css`
  border-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  grid-gap: 3rem;
  margin-bottom: 3rem;
  width: 100%;
  padding: 3rem 0;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const ProjectsPageContent: FC = () => {
  const {
    state: {
      strings: { MyProjects: projectsStrings },
    },
  } = useContext(AppContext);

  return (
    <div css={container}>
      <div css={contentWrapper}>
        <h1 css={sectionTitle}>{projectsStrings.title}</h1>
        <p css={sectionDescription}>{projectsStrings.description}</p>

        <div css={projectsContainer}>
          {projectInfos.map((project) => (
            <HomePageProjectsListItem project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageContent;
