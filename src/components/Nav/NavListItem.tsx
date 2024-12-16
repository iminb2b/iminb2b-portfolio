import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { NavInfo } from "./NavList";
import colors from "@/value/colors";
import { AppContext } from "@/context/AppContext";

const link = ({ darkmode }: { darkmode: boolean }) => css`
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      height: 2px;
      background-color: ${colors.background};
      width: 80%;
      left: 10%;
    }
  }
`;

const activeLink = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${colors.background};
  position: relative;
  text-transform: uppercase;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    height: 2px;
    background-color: ${colors.background};
    width: 80%;
    left: 10%;
  }
`;

const NavListItem: FC<{
  item: NavInfo;
  isActive: boolean;
}> = ({ item, isActive }) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

  return (
    <Link
      href={item.url}
      css={isActive ? activeLink({ darkmode }) : link({ darkmode })}
    >
      {item.name}
    </Link>
  );
};

export default NavListItem;
