import { FC, useContext, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { AppContext } from "@/context/AppContext";
import HomePageMySkillsList from "./HomePageMySkillsList";
import colors from "@/value/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import Lenis from "lenis";
import { useScroll, useTransform, motion } from "framer-motion";

const container = ({ darkmode }: { darkmode: boolean }) =>
  css(
    {
      height: "100vh",
      border: `1px solid ${darkmode ? colors.background : colors.primary}`,
      borderRadius: "8px",
      maxWidth: "1200px",
      maxHeight: "50rem",
      width: "100%",
    },
    {
      "@media screen and (max-width: 1000px)": {
        fontSize: "2rem",
        height: "auto",
      },
    },
  );

const contentWrapper = css(
  {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    height: "100%",
    padding: "3rem 0",
  },
  {
    "@media screen and (max-width: 1000px)": {
      gap: "2rem",
      padding: "1rem 0",
    },
  },
);

const title = css(
  {
    fontWeight: "800",
    fontSize: "4rem",
    width: "100%",
    padding: "0 1rem",
    display: "flex",
    gap: "2rem",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  {
    "@media screen and (max-width: 1000px)": {
      fontSize: "1.5rem",
      gap: "1rem",
    },
  },
);

const icon = css(
  {
    fontSize: "4rem",
    height: "4rem",
  },
  {
    "@media screen and (max-width: 1000px)": {
      fontSize: "2rem",
      height: "2rem",
    },
  },
);

const skillContainer = css(
  {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    gap: "3rem",
  },
  {
    "@media screen and (max-width: 1000px)": {
      gap: "1rem",
    },
  },
);

export type SkillInfo = {
  name: string;
};

const HomePageMySkills: FC = () => {
  const {
    state: { darkmode },
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
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["360deg", "-360deg"]);

  return (
    <div css={container({ darkmode })}>
      <div css={contentWrapper}>
        <div css={title}>
          TOOLS & LANGUAGE{" "}
          <motion.div style={{ rotate }}>
            <FontAwesomeIcon icon={faGear} css={icon} />
          </motion.div>
        </div>
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
