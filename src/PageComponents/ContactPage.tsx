import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { css, keyframes } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import colors from "@/value/colors";
import messageImg from "@/assets/images/message.png";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons/faCanadianMapleLeaf";
const container = css`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-height: calc(100vh - 5.5rem);
  over-flow: hidden;
`;
const contentWrapper = css`
  ${contentContainer}
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  width: 100%;
  max-width: 1200px;
  over-flow: hidden;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    padding: 5rem 2rem;
    justify-content: flex-end;
  }
`;

const infoContainer = css`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const message = css`
  width: 40%;
  height: fit-content;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const title = css`
  font-size: clamp(1.5rem, 3vw, 4rem);
  max-width: 45rem;
`;
const description = css`
  font-size: 1.375rem;
  line-height: 1.4;
  padding: 1rem 0;
`;
const socialContainer = css`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 1rem;
`;

const emailContainer = css`
  display: flex;
  gap: 1rem;
`;
const emailBox = ({ darkmode }: { darkmode: boolean }) => css`
  padding: 1rem;
  background-color: ${darkmode
    ? "rgba(255, 255, 255, 0.5)"
    : "rgba(0, 0, 0, 0.17)"};
  border-radius: 0.5rem;
`;
const emailInfo = css`
  display: flex;
  flex-direction: column;
  font-size: 1.375rem;
  justify-content: space-between;
  padding: 0.5rem;
`;

const icon = ({ darkmode }: { darkmode: boolean }) => css`
  font-size: 2.5rem;
  color: ${darkmode ? colors.background : colors.primary};
  transform: all 0.5s ease-in;

  &:hover {
    transform: scale(1.2);
  }
`;
const emailTitle = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${darkmode ? colors.white : colors.textPrimary};
`;
const mediaContainer = ({ darkmode }: { darkmode: boolean }) => css`
  padding: 1rem;
  background-color: ${darkmode
    ? "rgba(255,255,255,0.5)"
    : "rgba(0, 0, 0, 0.17)"};
  border-radius: 0.5rem;
  font-size: 1.375rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  display: flex;

  max-width: 80%;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;
const line = ({ darkmode }: { darkmode: boolean }) => css`
  width: 5rem;
  height: 3px;
  border-radius: 0.25rem;
  background-color: ${darkmode ? colors.white : colors.black};
`;
const list = css`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const animation = keyframes({
  "0%": {
    top: "-10%",
    opacity: 0,
    transform: "translateX(40px) rotate(0deg)",
  },
  "10%": {
    opacity: 1,
  },
  "20%": {
    transform: "translateX(-40px) rotate(45deg)",
  },
  "40%": {
    transform: "translateX(-40px) rotate(90deg)",
  },
  "60%": {
    transform: "translateX(40px) rotate(180deg)",
  },
  "80%": {
    transform: "translateX(-40px) rotate(225deg)",
  },
  "100%": {
    top: "90%",
    transform: "translateX(-40px) rotate(360deg)",
  },
});
const circle = css({
  animation: `${animation}  12s linear infinite`,
  animationDelay: "-6s",
  color: "#A94C50",
  fontSize: "4rem",
  position: "absolute",
  top: 0,
  left: "40%",
});

const circle2 = css(circle, {
  animationDelay: "-11s",
  top: "10%",
  animationDuration: "8s",
  left: "10%",
  color: "#A94C50",
  fontSize: "2rem",
});

const circle3 = css(circle, {
  animationDelay: "-12s",
  top: "20%",
  animationDuration: "10s",
  left: "30%",
});
const circle4 = css(circle, {
  animationDelay: "-11s",
  animationDuration: "6s",
  top: "50%",
  color: "#7B8C46",
  left: "50%",
});
const circle5 = css(circle, {
  animationDelay: "-13s",
  animationDuration: "12s",
  color: "#A8A85E",
  top: "40%",
  left: "70%",
});
const circle6 = css(circle, {
  animationDelay: "-11s",
  animationDuration: "8s",
  top: "10%",
  color: "#C5B74B",
  left: "90%",
});
const circle7 = css(circle, {
  animationDuration: "-14s",
  color: "#D87A32",
  top: "50%",
  left: "60%",
});

const ContactPage: NextPage = () => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

  return (
    <PageContainer>
      <PageMeta title="Min - Contact Me" description={"Nhung Nguyen"} />

      <div css={container}>
        <div>
          <FontAwesomeIcon css={circle} icon={faCanadianMapleLeaf} />
          <FontAwesomeIcon css={circle2} icon={faCanadianMapleLeaf} />
          <FontAwesomeIcon css={circle3} icon={faCanadianMapleLeaf} />
          <FontAwesomeIcon css={circle4} icon={faCanadianMapleLeaf} />
          <FontAwesomeIcon css={circle5} icon={faCanadianMapleLeaf} />
          <FontAwesomeIcon css={circle6} icon={faCanadianMapleLeaf} />
          <FontAwesomeIcon css={circle7} icon={faCanadianMapleLeaf} />
        </div>

        <div css={contentWrapper}>
          <div css={infoContainer}>
            <h1 css={title}>Have a project in mind or just want to say hi? </h1>
            <p css={description}>
              Feel free to contact me. I'm always eager to connect with fellow
              developers and potential clients!
            </p>

            <div css={socialContainer}>
              <div css={emailContainer}>
                <div css={emailBox({ darkmode })}>
                  <EmailIcon css={icon({ darkmode })} />
                </div>
                <div css={emailInfo}>
                  <p css={emailTitle({ darkmode })}>EMAIL</p>
                  <b>iminb2b@gmail.com</b>
                </div>
              </div>
              <div css={mediaContainer({ darkmode })}>
                <b>Find me on social media</b>
                <div css={list}>
                  <div css={line({ darkmode })}></div>

                  <Link href="https://github.com/iminb2b">
                    <GitHubIcon css={icon({ darkmode })} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/iminb2b/">
                    <LinkedInIcon css={icon({ darkmode })} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div css={message} />
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;
