import { FC, useContext } from "react";
import { css, keyframes } from "@emotion/react";
import { sectionService, sectionTitle } from "@/styles/generalStyles";
import { AppContext } from "@/context/AppContext";
import colors from "@/value/colors";
import about from "@/assets/images/about.png";
import HomePageExperienceList from "./HomePageExperienceList";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { educationList, experienceList } from "@/value/aboutMe";
import AboutMeSkillList from "./AboutMeSkillList";
const container = css({
  width: "100%",
  display: "flex",
  maxWidth: "1200px",
  borderTop: `1px solid ${colors.primary}`,
  borderBottom: `1px solid ${colors.primary}`,
  padding: "5rem 0",
  position: "relative",
});

const animation = keyframes({
  "0%": {
    transform: "rotate(0)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});
const circle = css({
  animation: `${animation}`,
  animationTimeline: "view(auto 90%)",
  fontWeight: "800",
  color: colors.primary,
  // transform: "rotate(45deg)",
  height: "max-content",
  width: "max-content",
  fontSize: "4.25rem",
});

const aboutContainer = css({
  height: "100%",
  width: "15%",
});
const menuContainer = css({
  width: "20%",
  height: "100%",
});
const aboutBox = css({
  width: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "fixed",
  float: "left",
});
const menuBox = css(
  {
    width: "15rem",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    padding: "1rem 0",
    gap: "1rem",
    float: "left",
  },
  {
    li: {
      display: "flex",
      gap: "5px",
      alignItems: "center",
    },
  },
);

const contentContainer = css({
  width: "50%",
});
const circleMenu = css({
  height: "1rem",
  width: "1rem",
  background: colors.primary,
});

const infoContainer = css(
  {
    color: colors.primary,
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    lineHeight: "1.5",
  },
  {
    h2: {
      fontSize: "4rem",
    },
  },
);

const icon = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${darkmode ? colors.background : colors.primary};
  font-size: 1.25rem;
`;

const downloadLink = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${darkmode ? colors.background : colors.primary};
  align-items: center;
  display: flex;

  &:hover {
    text-decoration: underline;
  }
`;

const AboutMe: FC = () => {
  const {
    state: { lang, darkmode },
  } = useContext(AppContext);

  return (
    <div css={container}>
      <div css={aboutContainer}>
        <div css={aboutBox}>
          <div css={circle}>A</div>
          <div css={circle}>B</div>
          <div css={circle}>O</div>
          <div css={circle}>U</div>
          <div css={circle}>T</div>
          <div css={circle}>M</div>
          <div css={circle}>E</div>
        </div>
      </div>

      <div css={menuContainer}>
        <ul css={menuBox}>
          <li>
            <div css={circleMenu} />
            Introduction
          </li>
          <li>
            <div css={circleMenu} />
            Technical Skills
          </li>
          <li>
            <div css={circleMenu} />
            Education
          </li>
          <li>
            <div css={circleMenu} />
            Experiences
          </li>
        </ul>
      </div>
      <div css={contentContainer}>
        <div css={infoContainer}>
          <h2>Hi! I am Min.</h2>
          <p>
            Experienced Frontend Developer skilled in building efficient,
            user-friendly web applications using cutting-edge technologies like
            Next.js, TypeScript, React.js, and GraphQL.
          </p>
          <p>
            With a solid foundation in frontend development and over 2 years of
            industry experience, I excel in translating design concepts into
            responsive, high-performance web interfaces. Adept at collaborating
            with cross-functional teams to deliver innovative solutions that
            meet and exceed client expectations.
          </p>
          <a
            href={"/pdf/NhungNguyenResume.pdf"}
            target="_blank"
            rel={"norefferer noopener"}
          >
            <div css={downloadLink({ darkmode })}>
              <OpenInNewIcon css={icon({ darkmode })} />
              &nbsp; View My Resume
            </div>
          </a>
        </div>

        <AboutMeSkillList />

        <HomePageExperienceList experience={educationList} title="Education" />
        <HomePageExperienceList
          experience={experienceList}
          title="Experience"
        />
      </div>
    </div>
  );
};

export default AboutMe;
