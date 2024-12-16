import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import routeLinks from "@/routeLinks";
import { AppContext } from "@/context/AppContext";

const logo = ({ primary }: { primary: boolean }) =>
  css(
    {
      fontSize: "2rem",
      fontWeight: "700",
      color: primary ? colors.primary : colors.background,
      display: "flex",
      alignItems: "center",
    },
    {
      "@media screen and (max-width: 1000px)": {
        fontSize: "1.5rem",
      },
    },
  );

const Logo: FC<{ variant: "primary" | "secondary" }> = ({ variant }) => {
  const {
    state: { lang },
  } = useContext(AppContext);

  return (
    <Link
      href={routeLinks.homePage({ lang })}
      css={logo({ primary: variant === "primary" })}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 156 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="26" width="50" height="50" rx="10" fill="#0BE3B7" />
        <circle cx="106" cy="26" r="25" fill="#E78FB3" />
        <path
          d="M84.6409 110.101C80.8529 113.466 75.1471 113.466 71.3591 110.101L30.1257 73.4765C23.2495 67.3689 27.5696 56 36.7666 56L119.233 56C128.43 56 132.75 67.3689 125.874 73.4765L84.6409 110.101Z"
          fill="#F1C40F"
        />
      </svg>
      min
    </Link>
  );
};

export default Logo;
