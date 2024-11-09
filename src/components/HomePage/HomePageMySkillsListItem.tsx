import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { SkillInfo } from "./HomePageMySkills";
import colors from "@/value/colors";
import { AppContext } from "@/context/AppContext";

const container = css({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  padding: "0.5rem 1rem",
  border: `2px solid ${colors.primary}`,
  borderRadius: "10px",
});

const image = css`
  height: 2.5rem;
  min-height: 2.5rem;
  aspect-ratio: 1/1;

  @media screen and (max-width: 720px) {
    height: 2.5rem;
    min-height: 2.5rem;
  }
`;

const title = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${darkmode ? colors.white : colors.black};
`;

const HomePageMySkillsListItem: FC<{ skill: SkillInfo }> = ({
  skill: { name, img },
}) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

  return (
    <div css={container}>
      <img src={img} css={image} />
      <h2 css={title({ darkmode })}>{name}</h2>
    </div>
  );
};

export default HomePageMySkillsListItem;
