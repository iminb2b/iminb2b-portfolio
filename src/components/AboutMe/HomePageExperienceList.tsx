import { FC } from "react";
import { css } from "@emotion/react";
import HomePageExperienceListItem from "./HomePageExperienceListItem";
import { ExperienceInfo } from "@/value/aboutMe";

const educationContainer = css`
  width: 100%;
  padding: 1rem 0;
`;

const mediumTitle = css`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
const jobList = css`
  display: flex;
  flex-direction: column;
`;

const HomePageExperienceList: FC<{
  experience: ExperienceInfo[];
  title: string;
  showDescription?: boolean;
  showAchievement?: boolean;
}> = ({
  experience,
  title,
  showDescription = true,
  showAchievement = true,
}) => {
  return (
    <div css={educationContainer}>
      {showAchievement && <h4 css={mediumTitle}>{title}</h4>}
      <div css={jobList}>
        {experience.map((item, index) => (
          <HomePageExperienceListItem
            item={item}
            key={index}
            index={index}
            showDescription={showDescription}
            showAchievement={showAchievement}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageExperienceList;
