import { FC, useContext } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import { AppContext } from "@/context/AppContext";
import { ExperienceInfo } from "@/value/aboutMe";

const jobItem = ({ darkmode }: { darkmode: boolean }) => css`
  border-left: 2px solid ${darkmode ? colors.white : colors.textPrimary};
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -7px;
    width: 14px;
    border-radius: 50%;
    background-color: ${darkmode ? colors.white : colors.black};
    height: 14px;
  }

  &:last-of-type {
    border: none;
  }

  @media screen and (max-width: 688px) {
    padding: 0.5rem 0;
    border: none;

    &::after {
      display: none;
    }
  }
`;

const jobTitle = ({ darkmode }: { darkmode: boolean }) => css`
  font-size: 1.125rem;
  line-height: 1.6;

  color: ${darkmode ? colors.white : colors.black};
`;
const list = css`
  padding: 0.5rem 1.5rem;
  list-style-type: circle;
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
}> = ({ item: { name, date, achievements, relevantCourse, description } }) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

  return (
    <div css={jobItem({ darkmode })}>
      <h4 css={jobTitle({ darkmode })}>{name}</h4>
      <b>{date}</b>
      {relevantCourse && (
        <p>
          <b> Relevant Coursework: </b>
          {relevantCourse}
        </p>
      )}
      {description && (
        <div css={descriptionContainer}>
          <b> Description: </b>
          <ul css={list}>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {achievements && (
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
  );
};

export default HomePageExperienceListItem;
