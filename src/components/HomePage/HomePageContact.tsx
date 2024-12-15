import { FC, useContext } from "react";
import { css, keyframes } from "@emotion/react";
import { AppContext } from "@/context/AppContext";
import colors from "@/value/colors";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import buttonStyles from "@/styles/buttonStyles";

const container = css(
  {
    maxWidth: "1200px",
    padding: "5rem 1rem",
    display: "flex",
    gap: "3rem",
    alignItems: "center",
    width: "100%",
  },
  {
    "@media screen and (max-width: 1000px)": {
      maxWidth: "100%",
    },
  },
);

const animation = keyframes({
  "0%": {
    transform: "translateY(0)",
  },
  "20%": {
    transform: "translateY(-60px)",
  },
  "40%, 100%": {
    transform: "translateY(0)",
  },
});
const circle = css({
  animation: animation,
  animationTimeline: "view(auto 0%)",
});

const circle2 = css(circle, {
  animationTimeline: "view(auto 2%)",
});
const circle3 = css(circle, {
  animationTimeline: "view(auto 4%)",
});
const circle4 = css(circle, {
  animationTimeline: "view(auto 6%)",
});
const circle5 = css(circle, {
  animationTimeline: "view(auto 8%)",
});
const circle6 = css(circle, {
  animationTimeline: "view(auto 10%)",
});
const circle7 = css(circle, {
  animationTimeline: "view(auto 12%)",
});
const circle8 = css(circle, {
  animationTimeline: "view(auto 14%)",
});
const circle9 = css(circle, {
  animationTimeline: "view(auto 16%)",
});
const circle10 = css(circle, {
  animationTimeline: "view(auto 18%)",
});
const circle11 = css(circle, {
  animationTimeline: "view(auto 20%)",
});
const circle12 = css(circle, {
  animationTimeline: "view(auto 22%)",
});
const circle13 = css(circle, {
  animationTimeline: "view(auto 24%)",
});
const circle14 = css(circle, {
  animationTimeline: "view(auto 26%)",
});
const circle15 = css(circle, {
  animationTimeline: "view(auto 28%)",
});
const circle16 = css(circle, {
  animationTimeline: "view(auto 30%)",
});
const circle17 = css(circle, {
  animationTimeline: "view(auto 32%)",
});

const title = css({
  fontSize: "clamp(2.5rem, 5.15625vw, 4rem)",
  fontWeight: "bold",
  lineHeight: 1.4,
  color: colors.primary,
  flex: 1,
  display: "flex",
});

const link = css({
  padding: "1rem",
  background: colors.primary,
  borderRadius: "10px",
});

const HomePageContact: FC = () => {
  const {
    state: { lang },
  } = useContext(AppContext);

  return (
    <div css={container}>
      <div css={title}>
        <div css={circle}>L</div>
        <div css={circle2}>E</div>
        <div css={circle3}>T</div>
        <div css={circle4}>'</div>
        <div css={circle5}>S</div> &nbsp;
        <div css={circle6}>W</div>
        <div css={circle7}>O</div>
        <div css={circle8}>R</div>
        <div css={circle9}>K</div> &nbsp;
        <div css={circle10}>T</div>
        <div css={circle11}>O</div>
        <div css={circle12}>G</div>
        <div css={circle13}>E</div>
        <div css={circle14}>T</div>
        <div css={circle15}>H</div>
        <div css={circle16}>E</div>
        <div css={circle17}>R</div>
      </div>
      <Link
        css={buttonStyles({ darkmode: false })}
        href={routeLinks.contact({ lang: "en" })}
      >
        Contact Me
      </Link>
    </div>
  );
};

export default HomePageContact;
