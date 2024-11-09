import { FC } from "react";
import { css, keyframes } from "@emotion/react";

import HomePageMySkillsListItem from "./HomePageMySkillsListItem";
import { useTransform } from "framer-motion";
import { motion, MotionValue } from "framer-motion";
import { SkillInfo } from "./HomePageMySkills";
const container = css({
  display: "flex",
  gap: "2rem",
});

const HomePageMySkillsList: FC<{
  skillsList: SkillInfo[];
  left: string;
  progress: MotionValue<number>;
  direction: string;
}> = ({ skillsList, progress, direction }) => {
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-750 * dir, 750 * dir]);
  return (
    <motion.div css={container} style={{ x }}>
      {skillsList.map((skill) => (
        <HomePageMySkillsListItem skill={skill} key={skill.name} />
      ))}
    </motion.div>
  );
};

export default HomePageMySkillsList;
