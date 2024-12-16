import colors from "@/value/colors";
import { css } from "@emotion/react";

export const contentContainer = css(
  {
    maxWidth: "1200px",
  },
  {
    "@media screen and (max-width: 1200px)": {
      maxWidth: "100%",
      padding: "0 1rem",
    },
  },
);
export const sectionService = ({ darkmode }: { darkmode: boolean }) => css`
  font-size: clamp(1rem, 2vw, 1.375rem);
  color: ${darkmode ? colors.white : colors.textPrimary};
`;

export const sectionTitle = css`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: bold;
`;

export const sectionDescription = css`
  font-size: clamp(1rem, 2vw, 1.375rem);
  text-align: center;
  max-width: 700px;
  max-width: 80%;
  line-height: 1.4;
`;

export const boxWrapper = ({ darkmode }: { darkmode: boolean }) => css`
  position: relative;

  background-color: ${darkmode ? "transparent" : colors.white};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  gap: 1rem;

  @media screen and (max-width: 688px) {
    background-color: transparent;
    box-shadow: none;
    border: none;
    padding: 0;
  }
`;
