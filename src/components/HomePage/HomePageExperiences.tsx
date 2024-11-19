import { FC } from "react";
import { css, keyframes } from "@emotion/react";
import colors from "@/value/colors";
import HomePageExperienceList from "../AboutMe/HomePageExperienceList";
import { experienceList } from "@/value/aboutMe";

const container = css({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  maxWidth: "1200px",
  borderTop: `1px solid ${colors.primary}`,
  borderBottom: `1px solid ${colors.primary}`,
  padding: "5rem 0",
});

const animation = keyframes({
  "0%": {
    transform: "translateY(0) rotate(0)",
  },
  "50%": {
    transform: "translateY(0) rotate(0)",
  },
  "100%": {
    transform: "translateY(75vh) rotate(360deg)",
  },
});
const circle = css({
  animation: `${animation}`,
  animationTimeline: "view(auto 50%)",
  fontWeight: "800",
  color: colors.primary,
  // transform: "rotate(45deg)",
  height: "max-content",
  fontSize: "4rem",
  transform: "translateY(75vh) rotate(360deg)",
});
const circle2 = css(circle, {
  animationTimeline: "view(auto 45%)",
});
const circle3 = css(circle, {
  animationTimeline: "view(auto 40%)",
});
const circle4 = css(circle, {
  animationTimeline: "view(auto 35%)",
});
const circle5 = css(circle, {
  animationTimeline: "view(auto 30%)",
});
const circle6 = css(circle, {
  animationTimeline: "view(auto 25%)",
});
const circle7 = css(circle, {
  animationTimeline: "view(auto 20%)",
});
const circle8 = css(circle, {
  animationTimeline: "view(auto 15%)",
});
const circle9 = css(circle, {
  animationTimeline: "view(auto 10%)",
});
const circle10 = css(circle, {
  animationTimeline: "view(auto 5%)",
});
const circle11 = css(circle, {
  animationTimeline: "view(auto 0%)",
});

const contentContainer = css(
  {
    width: "50%",
    display: "flex",
    position: "relative",
    height: "100%",
  },
  {
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
  },
);

const exerienceContainer = css({
  width: "50%",
});

const HomePageExperience: FC = () => {
  return (
    <div css={container}>
      <div css={contentContainer}>
        <div css={circle}>E</div>
        <div css={circle2}>X</div>
        <div css={circle3}>P</div>
        <div css={circle4}>E</div>
        <div css={circle5}>R</div>
        <div css={circle6}>I</div>
        <div css={circle7}>E</div>
        <div css={circle8}>N</div>
        <div css={circle9}>C</div>
        <div css={circle10}>E</div>
        <div css={circle11}>S</div>
      </div>
      <div css={exerienceContainer}>
        <HomePageExperienceList
          experience={experienceList}
          title="Experience"
          showAchievement={false}
        />
      </div>
    </div>
  );
};

export default HomePageExperience;
