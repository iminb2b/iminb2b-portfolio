import { FC } from "react";
import { css } from "@emotion/react";
import { useTransform, motion, useSpring, MotionValue } from "framer-motion";

const circle = css({
  fontWeight: "800",
  height: "max-content",
  fontSize: "4rem",
});

const HomePageExperienceList: FC<{
  scrollYProgress: MotionValue<number>;
  index: number;
  letter: string;
}> = ({ scrollYProgress, index, letter }) => {
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
};

export default HomePageExperienceList;
