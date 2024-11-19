import { FC, useContext } from "react";
import { css, keyframes } from "@emotion/react";
import colors from "@/value/colors";
import { AppContext } from "@/context/AppContext";
import { ExperienceInfo } from "@/value/aboutMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
const container = css({ display: "flex", gap: "1rem" });
const contentContainer = css({ display: "flex", flexDirection: "column" });

const borderContainer = css({
  width: "1rem",
  minWidth: "1rem",
  position: "relative",
});

const lineAnimation = keyframes({
  "100%": {
    height: "110%",
  },
});

const line = css({
  height: "0",
  border: "2px dashed",
  width: "2px",
  transform: "translateY(20px)",
  animation: lineAnimation,
  animationTimeline: "view(auto 10%)",
  position: "relative",
});
const icon = css({
  position: "absolute",
  bottom: "-1rem",
  left: "-0.5rem",
});

const jobTitle = ({ darkmode }: { darkmode: boolean }) => css`
  font-size: 1.125rem;
  line-height: 1.6;

  color: ${darkmode ? colors.white : colors.black};
`;
const list = css`
  padding: 0.5rem 1.5rem;
  list-style-type: circle !important;
  line-height: 1.6;

  @media screen and (max-width: 688px) {
    padding: 0.5rem 1rem;
  }
`;

const descriptionContainer = css`
  gap: 0.5rem;
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

  return (
    <div css={container}>
      <div css={borderContainer}>
        {index === 0 && (
          <>
            <div css={line}>
              <FontAwesomeIcon css={icon} icon={faPaperPlane} />
            </div>
          </>
        )}
      </div>
      <div css={contentContainer}>
        <h4 css={jobTitle({ darkmode })}>{name}</h4>
        <b>{date}</b>
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
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {achievements && showAchievement && (
          <div>
            <b>Achievement:</b>
            <ul css={list}>
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageExperienceListItem;
