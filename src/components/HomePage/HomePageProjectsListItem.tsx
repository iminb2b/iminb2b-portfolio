import { FC, useContext } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";
import routeLinks from "@/routeLinks";
import { ProjectInfo } from "@/value/projectsInfo";
import buttonStyles from "@/styles/buttonStyles";

const projectContainer = ({ darkmode }: { darkmode: boolean }) => css`
  border-radius: 0.5rem;
  background-color: ${darkmode ? "rgba(20,0,157,0.3)" : colors.white};
  padding: 0;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
  background-color: transparent;
  display: flex;
  transition: all 0.3s ease-in-out;
`;

const image = css`
  border-radius: 0.5rem;
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  aspect-ratio: 3/2;
`;
const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const toolList = css`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  flex-wrap: wrap;
`;

const toolItem = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${darkmode ? colors.white : colors.black};
  padding: 0.5rem;
`;

const title = css`
  font-size: 2rem;
`;

const linkContainer = css`
  display: flex;
  gap: 2rem;
`;

const HomePageProjectsListItem: FC<{ project: ProjectInfo }> = ({
  project,
}) => {
  const {
    state: { darkmode, lang },
  } = useContext(AppContext);

  return (
    <div css={projectContainer({ darkmode })}>
      <Link href={routeLinks.project({ lang, slug: project.slug })}>
        <img css={image} src={project.img} />
      </Link>
      <div css={infoContainer}>
        <h3 css={title}>{project.title}</h3>

        <ul css={toolList}>
          {project.tool.map((item, index) => (
            <li key={index} css={toolItem({ darkmode })}>
              {item}
            </li>
          ))}
        </ul>

        <div css={linkContainer}>
          <Link
            href={project.link}
            css={buttonStyles({ darkmode })}
            target="_blank"
          >
            Website
          </Link>
          {project.sourceCode && (
            <Link
              href={project.sourceCode}
              target="_blank"
              css={buttonStyles({ darkmode })}
            >
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageProjectsListItem;
