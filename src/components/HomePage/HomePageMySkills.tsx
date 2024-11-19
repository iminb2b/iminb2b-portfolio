import { FC, useContext, useEffect, useRef } from "react";
import { css, keyframes } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import { AppContext } from "@/context/AppContext";
import HomePageMySkillsList from "./HomePageMySkillsList";
import colors from "@/value/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";

import htmlIcon from "@/assets/images/tools/html5.png";
import reactIcon from "@/assets/images/tools/react.png";
import cssIcon from "@/assets/images/tools/css.png";
import nextjsIcon from "@/assets/images/tools/nextjs.png";
import jsIcon from "@/assets/images/tools/js.png";
import graphQlIcon from "@/assets/images/tools/graphql.png";
import emotionIcon from "@/assets/images/tools/emotion.png";
import styledComponentsIcon from "@/assets/images/tools/styledcomponent.png";
import Lenis from "lenis";
import { useScroll } from "framer-motion";

const container = css(contentContainer, {
  height: "100vh",
  borderBottom: `1px solid ${colors.primary}`,
  maxWidth: "1200px",
  padding: "3rem 1rem",
  width: "100%",
});

const contentWrapper = css({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  height: "100%",
});

const title = css({
  fontWeight: "800",
  color: colors.primary,
  fontSize: "4rem",
  textAlign: "right",
  width: "100%",
});

const animation = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },
});

const icon = css({
  animation: animation,
  animationTimeline: "view()",
  fontSize: "4rem",
  height: "4rem",
});

const skillContainer = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflow: "hidden",
  flex: 1,
  justifyContent: "center",
  gap: "3rem",
});

export type SkillInfo = {
  name: string;
};

const HomePageMySkills: FC = () => {
  const {
    state: { lang, darkmode },
  } = useContext(AppContext);

  const skillsList: SkillInfo[] = [
    {
      name: "Javascript",
    },
    {
      name: "Typescript",
    },
    {
      name: "CSS3",
    },
    {
      name: "GraphQl",
    },
    {
      name: "HTML",
    },
    {
      name: "Sass",
    },
  ];

  const skillsList2: SkillInfo[] = [
    {
      name: " Next.js",
    },
    {
      name: "React",
    },
    {
      name: "Gastby",
    },
    {
      name: "Node.js",
    },
    {
      name: "Styled Component",
    },
    {
      name: "Material Ui",
    },
    {
      name: "Emotion",
    },
    {
      name: "CapacitorJs",
    },
  ];

  const skillsList3: SkillInfo[] = [
    {
      name: "Git",
    },
    {
      name: "Github",
    },
    {
      name: "Mattermost",
    },
    {
      name: "Netlify",
    },
    {
      name: "Figma",
    },
    {
      name: "Firebase",
    },
    {
      name: "Docker",
    },
    {
      name: "Vercel",
    },
  ];

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <div css={container}>
      <div css={contentWrapper}>
        <p css={title}>
          TOOLS & LANGUAGE <FontAwesomeIcon icon={faGear} css={icon} />
        </p>
        <div css={skillContainer} ref={ref}>
          <HomePageMySkillsList
            left="-15%"
            progress={scrollYProgress}
            direction="right"
            skillsList={skillsList}
          />
          <HomePageMySkillsList
            left="-15%"
            progress={scrollYProgress}
            direction="left"
            skillsList={skillsList2}
          />
          <HomePageMySkillsList
            left="-15%"
            progress={scrollYProgress}
            direction="right"
            skillsList={skillsList3}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageMySkills;
