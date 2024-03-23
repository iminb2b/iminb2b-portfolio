import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { SkillInfo } from "./HomePageMySkillsList";
import colors from "@/value/colors";
import { AppContext } from "@/context/AppContext";

const container = ({ darkmode }: { darkmode: boolean }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  border-radius: 2rem;
  align-items: center;
  background-color: ${darkmode ? "rgba(255,255,255,0.6)" : colors.white};
  box-shadow: ${darkmode
    ? "rgba(255, 255, 255, 0.24) 0px 3px 8px"
    : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
  text-align: center;
  gap: 2rem;

  @media screen and (max-width: 720px) {
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

const image = css`
  height: 4.5rem;
  min-height: 4.5rem;
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
    <div css={container({ darkmode })}>
      <img src={img} css={image} />
      <h2 css={title({ darkmode })}>{name}</h2>
    </div>
  );
};

export default HomePageMySkillsListItem;
