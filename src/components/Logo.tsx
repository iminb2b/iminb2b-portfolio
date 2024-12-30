import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import routeLinks from "@/routeLinks";
import { AppContext } from "@/context/AppContext";

const logo = css(
  {
    fontSize: "2rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  {
    "@media screen and (max-width: 1000px)": {
      fontSize: "1.5rem",
    },
  },
);

const Logo: FC = () => {
  const {
    state: { lang },
  } = useContext(AppContext);

  return (
    <Link href={routeLinks.homePage({ lang })} css={logo}>
      <svg
        width="21"
        height="21"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="5"
          width="30"
          height="30"
          stroke="currentcolor"
          stroke-width="10"
        />
        <path d="M15 40H25V60H15V40Z" fill="currentcolor" />
        <rect x="25" y="50" width="35" height="10" fill="currentcolor" />
        <rect x="50" width="10" height="60" fill="currentcolor" />
      </svg>
      min
    </Link>
  );
};

export default Logo;
