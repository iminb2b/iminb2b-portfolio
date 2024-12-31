import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useRouter } from "next/router";
import ErrorPageContent from "@/components/ErrorPageContent";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { projectInfos } from "@/value/projectsInfo";
import Link from "next/link";
import buttonStyles from "@/styles/buttonStyles";
import colors from "@/value/colors";

const container = css(
  contentContainer,
  {
    display: "flex",
    gap: "2rem",
    padding: "5rem 0",
  },
  {
    "@media screen and (max-width: 1000px)": {
      flexDirection: "column-reverse",
    },
  },
);

const contentWrapper = css(
  {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  {
    "@media screen and (max-width: 1000px)": {
      width: "100%",
    },
  },
);

const infoContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const image = css`
  width: 100%;
`;

const title = css`
  font-size: clamp(2rem, 4vw, 4rem);
`;

const toolList = css({
  padding: "0 1rem",
});
const infoContentContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const detailsContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const mediumText = css`
  font-weight: 600;
`;

const description = css`
  line-height: 1.5;
`;

const toolItem = css({
  listStyleType: "circle",
  padding: "0.25rem",
});

const linkContainer = css`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const tag = ({ darkmode }: { darkmode: boolean }) =>
  css({
    height: "2.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2px solid ${darkmode ? colors.background : colors.primary}`,
    maxWidth: "10rem",
    padding: "auto 1rem",
  });

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const {
    state: { darkmode },
  } = useContext(AppContext);

  const slug = router.query.slug;

  const project = projectInfos.filter((project) => project.slug === slug)[0];

  if (!project) return <ErrorPageContent />;

  return (
    <PageContainer>
      <PageMeta title="Min - Projects Page" description={"Nhung Nguyen"} />
      <div css={container}>
        <div css={contentWrapper}>
          <h1 css={title}>{project.title}</h1>
          <div css={infoContainer}>
            <div css={infoContentContainer}>
              <div css={tag({ darkmode })}>
                {project.isPersonal ? "Personal Project" : "Work Project"}{" "}
              </div>
              <div css={detailsContainer}>
                {project.objectives && <h3 css={mediumText}>Objectives:</h3>}
                <p css={description}>{project.objectives}</p>
              </div>
              <div css={detailsContainer}>
                <h3 css={mediumText}>Description:</h3>
                <p css={description}>{project.description}</p>
              </div>

              {project.features.length > 0 && (
                <h3 css={mediumText}>Features</h3>
              )}
              <ul css={toolList}>
                {project.features.map((item, index) => (
                  <li key={index} css={toolItem}>
                    {item}
                  </li>
                ))}
              </ul>

              {project.role.length > 0 && (
                <h3 css={mediumText}>Role and Contribution</h3>
              )}
              <ul css={toolList}>
                {project.role.map((item, index) => (
                  <li key={index} css={toolItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div css={contentWrapper}>
          <img src={project.img} css={image} />

          <div css={infoContentContainer}>
            <h3 css={mediumText}>Frameworks/Library:</h3>
            <ul css={toolList}>
              {project.framework.map((item, index) => (
                <li key={index} css={toolItem}>
                  {item}
                </li>
              ))}
            </ul>
            <h3 css={mediumText}>Styling:</h3>
            <ul css={toolList}>
              {project.styling.map((item, index) => (
                <li key={index} css={toolItem}>
                  {item}
                </li>
              ))}
            </ul>
            <h3 css={mediumText}>Others:</h3>
            <ul css={toolList}>
              {project.others.map((item, index) => (
                <li key={index} css={toolItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

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
    </PageContainer>
  );
};

export default ProjectPage;
