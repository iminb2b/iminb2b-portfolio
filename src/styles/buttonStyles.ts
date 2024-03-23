import colors from "@/value/colors";
import { css } from "@emotion/react";

const buttonStyles = ({
  size = "medium",
  darkmode,
}: {
  size?: "medium" | "large";
  darkmode: boolean;
}) => css`
  color: ${darkmode ? colors.white : colors.black};
  padding: ${size === "medium" ? "0.5rem 1rem" : "1.5rem"};
  border-radius: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${darkmode ? colors.white : colors.black};
  font-size: ${size === "medium" ? "1rem" : "1.5rem"};
  font-weight: bold;
  height: ${size === "medium" ? "3rem" : "4.5rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  &:hover {
    background-color: ${darkmode ? colors.white : colors.black};
    color: ${darkmode ? colors.black : colors.white};
    border: 2px solid ${darkmode ? colors.white : colors.black};
  }
`;

export default buttonStyles;
