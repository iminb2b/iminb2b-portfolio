import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { SkillInfo } from "./HomePageMySkills";
import colors from "@/value/colors";
import { AppContext } from "@/context/AppContext";

const container = css(
  {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    padding: "1rem 2rem",
    border: `2px solid ${colors.primary}`,
    borderRadius: "8px",
    textWrap: "nowrap",
  },
  {
    "@media screen and (max-width: 1000px)": {
      padding: "0.75rem",
    },
  },
);

const title = ({ darkmode }: { darkmode: boolean }) =>
  css(
    {
      color: darkmode ? colors.background : colors.primary,
    },
    {
      "@media screen and (max-width: 1000px)": {
        fontSize: "1rem",
      },
    },
  );

const HomePageMySkillsListItem: FC<{ skill: SkillInfo }> = ({
  skill: { name },
}) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

  return (
    <div css={container}>
      <h2 css={title({ darkmode })}>{name}</h2>
    </div>
  );
};

export default HomePageMySkillsListItem;
