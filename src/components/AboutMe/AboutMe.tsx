import { FC, useContext } from "react";
import { css } from "@emotion/react";
import {
  boxWrapper,
  contentContainer,
  sectionService,
  sectionTitle,
} from "@/styles/generalStyles";
import { AppContext } from "@/context/AppContext";
import colors from "@/value/colors";
import about from "@/assets/images/about.png";
import HomePageExperienceList from "./HomePageExperienceList";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { educationList, experienceList } from "@/value/aboutMe";
import AboutMeSkillList from "./AboutMeSkillList";
const container = css`
  ${contentContainer}

  margin: auto;
  width: 100%;
`;

const statementContainer = css`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 5rem;
  padding: 3rem 5rem 0 3rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 688px) {
    padding: 1rem;
  }
`;

const imageContainer = css`
  padding: 3rem;
`;
const desktop = css`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;

  @media screen and (max-width: 688px) {
    display: none;
  }
`;
const infoContainer = css`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.6;

  @media screen and (max-width: 960px) {
    padding: 1rem;
  }

  @media screen and (max-width: 688px) {
    padding: 0;
  }
`;

const icon = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${darkmode ? colors.white : colors.black};
  font-size: 1.25rem;
`;

const nameText = ({ darkmode }: { darkmode: boolean }) => css`
  font-size: clamp(1.5rem, 3vw, 3rem);
  color: ${darkmode ? colors.white : colors.black};
`;

const downloadLink = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${darkmode ? colors.white : colors.black};
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
      <div css={boxWrapper({ darkmode })}>
        <p css={sectionService({ darkmode })}>PROFILE</p>
        <h1 css={sectionTitle}>About Me</h1>

        <div css={statementContainer}>
          <div css={imageContainer}>
            {" "}
            <img src={about.src} css={desktop} />
          </div>
          <div css={infoContainer}>
            <h2 css={nameText({ darkmode })}>Hi! I am Min.</h2>
            <p>
              Experienced Frontend Developer skilled in building efficient,
              user-friendly web applications using cutting-edge technologies
              like Next.js, TypeScript, React.js, and GraphQL.
            </p>
            <p>
              With a solid foundation in frontend development and over 2 years
              of industry experience, I excel in translating design concepts
              into responsive, high-performance web interfaces. Adept at
              collaborating with cross-functional teams to deliver innovative
              solutions that meet and exceed client expectations.
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
