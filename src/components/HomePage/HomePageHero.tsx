import { FC, useContext } from "react";
import { css, keyframes } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import { AppContext } from "@/context/AppContext";
import HomePageMarqueeListItem from "./HomePageMarqueeListItem";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import buttonStyles from "@/styles/buttonStyles";
import routeLinks from "@/routeLinks";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const contentWrapper = ({ darkmode }: { darkmode: boolean }) => css`
  ${contentContainer}
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 35rem;
  gap: 2rem;
  width: 100%;
  border-bottom: 1px solid ${darkmode ? "#fff" : "#000"};

  @media screen and (max-width: 720px) {
    padding-top: 0;
    height: 20rem;
    gap: 1rem;
  }
`;
const title = css`
  font-size: clamp(2.5rem, 5.15625vw, 6rem);
  font-weight: bold;
  line-height: 1.4;
`;

const jobTitle = css`
  text-align: right;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  letter-spacing: 1rem;
  font-size: 1.125rem;
  @media screen and (max-width: 720px) {
    font-size: 0.75rem;
  }
`;

const marquee = ({ darkmode }: { darkmode: boolean }) => css`
  height: 12rem;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 720px) {
    height: 8rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    z-index: 20;
    height: 100%;
    left: -5px;
    width: 7px;
    background-color: ${darkmode ? "#000" : "#fff"};
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -5px;
    height: 100%;
    width: 7px;
    z-index: 20;
    background-color: ${darkmode ? "#000" : "#fff"};
  }
`;
const aboutLink = css`
  display: flex;
  justify-content: flex-end;
`;

const HomePageHero: FC = () => {
  const {
    state: { lang, strings, darkmode },
  } = useContext(AppContext);

  const stringArray = strings.HomePage.Hero.description.split("");
  console.log(stringArray);
  return (
    <div css={container}>
      <div css={contentWrapper({ darkmode })} data-aos="fade-up">
        <h1 css={title}>NHUNG NGUYEN</h1>
        <h1 css={jobTitle}>WEB DEVELOPER</h1>

        <Marquee
          css={marquee({ darkmode })}
          gradient
          // autoFill
          gradientColor={darkmode ? "#000" : "#fff"}
        >
          {stringArray.map((char, index) => (
            <HomePageMarqueeListItem char={char} index={index} />
          ))}
        </Marquee>
        <div css={aboutLink}>
          <Link
            css={buttonStyles({ darkmode, size: "medium" })}
            href={routeLinks.about({ lang })}
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
