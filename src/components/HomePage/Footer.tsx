import { FC } from "react";
import { css } from "@emotion/react";
import Logo from "../Logo";
import colors from "@/value/colors";

const container = css({
  display: "flex",
  justifyContent: "center",
  background: colors.primary,
  color: colors.background,
  width: "100%",
});

const contentContainer = css({
  width: "1200px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "3rem",
  alignItems: "center",
});

const Footer: FC = () => {
  return (
    <div css={container}>
      <div css={contentContainer}>
        <Logo />
        <div>Linkedin</div>
        <p>iminb2b[at]gmail[dot]com</p>
        <p>Copyright © 2024 Nhung Nguyen</p>
      </div>
    </div>
  );
};

export default Footer;
