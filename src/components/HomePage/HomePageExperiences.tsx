import { FC, useEffect, useRef } from "react";
import { css, keyframes } from "@emotion/react";
import colors from "@/value/colors";
import HomePageExperienceList from "../AboutMe/HomePageExperienceList";
import { experienceList } from "@/value/aboutMe";
import Lenis from "lenis";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const container = css({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  maxWidth: "1200px",
  borderTop: `1px solid ${colors.primary}`,
  padding: "5rem 0",
});

const circle = css({
  fontWeight: "800",
  color: colors.primary,
  height: "max-content",
  fontSize: "4rem",
});

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
      padding: "0 1rem",
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
        {letters.map((letter, index) => {
          const delayedScrollYProgress = useSpring(scrollYProgress, {
            stiffness: 20 + index * 20, // Controls the spring speed
            damping: 30, // Controls the spring oscillation
            mass: 1, // Controls the spring weight
          });

          const translateY = useTransform(
            delayedScrollYProgress,
            [0, 1],
            ["75vh", "0vh"],
          );
          const rotate = useTransform(delayedScrollYProgress, [0, 1], [0, 360]);

          return (
            <motion.div css={circle} style={{ translateY, rotate }}>
              {letter}
            </motion.div>
          );
        })}
      </div>
      <div css={exerienceContainer}>
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
