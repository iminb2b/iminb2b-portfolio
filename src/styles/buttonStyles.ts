import colors from "@/value/colors";
import { css } from "@emotion/react";

const buttonStyles = ({
  size = "medium",
  darkmode,
}: // variant = "contained",
{
  size?: "medium" | "large";
  darkmode: boolean;
  variant?: "contained" | "filled";
}) => css`
  color: ${colors.background};
  padding: ${size === "medium" ? "0.5rem 1rem" : "1.5rem"};
  border-radius: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${darkmode ? colors.white : colors.primary};
  font-size: ${size === "medium" ? "1rem" : "1.5rem"};
  font-weight: bold;
  height: ${size === "medium" ? "3rem" : "4.5rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};

  &:hover {
    background-color: ${darkmode ? colors.white : colors.primary};
    color: ${darkmode ? colors.primary : colors.white};
    border: 2px solid ${darkmode ? colors.white : colors.primary};
  }
`;

export default buttonStyles;
