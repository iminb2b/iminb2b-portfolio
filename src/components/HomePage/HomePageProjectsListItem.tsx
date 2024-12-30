import { FC, useContext } from "react";
import { css, keyframes } from "@emotion/react";
import colors from "@/value/colors";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";
import { ProjectInfo } from "@/value/projectsInfo";
import buttonStyles from "@/styles/buttonStyles";
import routeLinks from "@/routeLinks";

const animation = keyframes({
  "0%": {
    transform: "scale(0.5)",
  },
  "60%": {
    transform: "scale(1)",
  },
});

const projectContainer = css(
  {
    width: "100%",
    borderRadius: "10px",
    aspectRatio: "3/2",
    animation: `${animation}`,
    animationTimeline: "view()",
    overflow: "hidden",
    boxShadow: `0 70px 83px -60px ${colors.primary}`,
    position: "relative",
    transition: "0.8s",
  },
  {
    ":hover": {
      transform: "translateY(-20px)",
      boxShadow: `0 90px 83px -20px ${colors.primary}`,

      img: {
        transform: "scale(2)",
        filter: "sepia(0%) hue-rotate(0deg) saturate(100%)",
      },

      "#info": {
        backdropFilter: "blur(15px)",
        transform: "translate(0)",
      },
    },
  },
);

const image = css({
  width: "100%",
  aspectRatio: "3/2",
  position: "absolute",
  top: 0,
  left: 0,
  objectFit: "cover",
  transition: "1s ease-in-out",
  filter: "sepia(100%) hue-rotate(200deg) saturate(150%)",
});
const infoContainer = css({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  color: colors.primary,
  padding: "1rem",
  transition: "0.8s",
  backdropFilter: "blur(0px)",
  transform: "translateY(100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  gap: "1rem",
});

const description = css``;

const title = css``;

const HomePageProjectsListItem: FC<{ project: ProjectInfo }> = ({
  project,
}) => {
  const {
    state: { darkmode, lang },
  } = useContext(AppContext);

  return (
    <div css={projectContainer}>
      {/* <Link href={routeLinks.project({ lang, slug: project.slug })}> */}
      <img css={image} src={project.img} />
      {/* </Link> */}
      <div css={infoContainer} id="info">
        <h3 css={title}>{project.title}</h3>
        <p css={description}>{project.description}</p>

        <Link
          href={routeLinks.project({ lang, slug: project.slug })}
          css={buttonStyles({ darkmode })}
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default HomePageProjectsListItem;
