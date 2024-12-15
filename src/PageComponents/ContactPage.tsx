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
  background-color: ${darkmode ? colors.background : colors.primary};
`;
const list = css`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ContactPage: NextPage = () => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

  return (
    <PageContainer>
      <PageMeta title="Min - Contact Me" description={"Nhung Nguyen"} />

      <div css={container}>
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
