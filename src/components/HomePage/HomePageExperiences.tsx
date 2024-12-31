import { FC, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import HomePageExperiencesList from "./HomePageExperiencesList";
import { experienceList } from "@/value/aboutMe";
import Lenis from "lenis";
import { useScroll } from "framer-motion";
import HomePageExperienceList from "../AboutMe/HomePageExperienceList";

const container = css(
  {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    maxWidth: "1200px",
    borderTop: `1px solid ${colors.primary}`,
    padding: "5rem 0",
  },
  {
    "@media screen and (max-width: 1000px)": {
      padding: "1rem 0",
    },
  },
);

const contentContainer = css(
  {
    width: "50%",
    display: "flex",
    position: "relative",
    maxHeight: "50rem",
    height: "100%",
  },
  {
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
  },
);

const exerienceContainer = css(
  {
    maxHeight: "50rem",
    width: "50%",
  },
  {
    "@media screen and (max-width: 1000px)": {
      width: "100%",
      padding: "0",
    },
  },
);

const title = css(
  {
    fontWeight: "800",
    fontSize: "1.5rem",
    width: "100%",
  },
  {
    "@media screen and (min-width: 1000px)": {
      display: "none",
    },
  },
);

const HomePageExperience: FC = () => {
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

  const letters = ["E", "X", "P", "E", "R", "I", "E", "N", "C", "I", "E", "S"];

  return (
    <div css={container}>
      <div css={contentContainer} ref={ref}>
        {letters.map((letter, index) => (
          <HomePageExperiencesList
            key={index}
            letter={letter}
            scrollYProgress={scrollYProgress}
            index={index}
          />
        ))}
      </div>
      <div css={exerienceContainer}>
        <div css={title}>EXPERIENCES</div>
        <HomePageExperienceList
          experience={experienceList}
          title="Experience"
          showAchievement={false}
        />
      </div>
    </div>
  );
};

export default HomePageExperience;
