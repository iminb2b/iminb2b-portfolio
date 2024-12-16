import { FC, useContext, useEffect, useRef } from "react";
import { css, keyframes } from "@emotion/react";
import colors from "@/value/colors";
import { AppContext } from "@/context/AppContext";
import { ExperienceInfo } from "@/value/aboutMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import Lenis from "lenis";
import { useScroll, motion, useTransform } from "framer-motion";
const container = css({ display: "flex", gap: "1rem" });
const contentContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const borderContainer = css({
  width: "1rem",
  minWidth: "1rem",
  position: "relative",
});

const line = css({
  border: "2px dashed",
  width: "2px",
  transform: "translateY(20px)",
  position: "relative",
});
const icon = css({
  position: "absolute",
  bottom: "-1rem",
  left: "-0.5rem",
  fontSize: "1rem",
  height: "1rem",
});

const jobTitle = ({ darkmode }: { darkmode: boolean }) => css`
  font-size: 1.125rem;
  line-height: 1.6;

  color: ${darkmode ? colors.background : colors.primary};
`;

const list = css({
  padding: "0.5rem ",
  gap: "0.5rem",
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.4",
});

const listItem = css({
  listStyleType: "circle !important",
});

const descriptionContainer = css`
  display: flex;
  flex-direction: column;
`;

const HomePageExperienceListItem: FC<{
  item: ExperienceInfo;
  index: number;
  showDescription?: boolean;
  showAchievement?: boolean;
}> = ({
  index,
  item: { name, date, achievements, relevantCourse, description },
  showDescription = true,
  showAchievement = true,
}) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

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

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);

  return (
    <div css={container} ref={ref}>
      <div css={borderContainer}>
        {index === 0 && (
          <motion.div css={line} style={{ height }}>
            <FontAwesomeIcon css={icon} icon={faPaperPlane} />
          </motion.div>
        )}
      </div>
      <div css={contentContainer}>
        <h4 css={jobTitle({ darkmode })}>{name}</h4>
        <i>{date}</i>
        {relevantCourse && (
          <p>
            <b> Relevant Coursework: </b>
            {relevantCourse}
          </p>
        )}
        {description && showDescription && (
          <div css={descriptionContainer}>
            <b> Description: </b>
            <ul css={list}>
              {description.map((item, index) => (
                <li key={index} css={listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {achievements && showAchievement && (
          <div>
            <b>Achievement:</b>
            <ul css={list}>
              {achievements.map((item, index) => (
                <li key={index} css={listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageExperienceListItem;
