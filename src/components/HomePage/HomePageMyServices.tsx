import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { contentContainer, sectionTitle } from "@/styles/generalStyles";
import { AppContext } from "@/context/AppContext";
import performanceImg from "@/assets/images/performance.png";
import accessibilityImg from "@/assets/images/accessibility.png";
import lockImg from "@/assets/images/lock.png";
import keyImg from "@/assets/images/key.png";
import colors from "@/value/colors";

const container = css`
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  width: 100%;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
const contentWrapper = css`
  ${contentContainer}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5rem 1rem;
  grid-gap: 1rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 1rem 2rem;
  }
`;

const service = css`
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const service1Container = css`
  ${service}

  background-color: ${colors.pink};
`;
const service2Container = css`
  ${service}

  gap: 0;
  padding-top: 2rem;

  background-color: ${colors.white};
`;
const service3Container = css`
  border-radius: 2rem;
`;
const img1 = css`
  width: 100%;
  margin-top: -4.5rem;
  transition: all 0.3s ease;

  @media screen and (max-width: 940px) {
    margin-top: -3.5rem;
  }

  @media screen and (max-width: 720px) {
    margin-top: -2.5rem;
  }
`;
const img2 = css`
  width: 120%;
  margin-left: -7.5%;
`;
const img3 = css`
  width: 100%;
  @media screen and (max-width: 720px) {
    height: 100%;
    width: fit-content;
  }
`;
const img4 = css`
  width: 100%;
  @media screen and (max-width: 720px) {
    height: 100%;
    width: fit-content;
  }
`;
const blockContainer = css`
  height: 50%;
  display: flex;
  border-radius: 2rem;
`;

const block1 = css`
  height: 50%;
  background-color: ${colors.yellow};
  border-radius: 2rem;
  border-bottom-left-radius: 0;
  padding: 2rem 2rem;
`;
const block2 = css`
  width: 40%;
  height: 100%;
  background-color: ${colors.yellow};
  border-radius: 2rem;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  padding: 0 1rem 1rem;
  display: flex;
  justify-content: center;
`;
const block3 = css`
  background-color: transparent;
  height: 100%;
  width: 60%;
  border-radius: 2rem;
  position: relative;
  padding: 1rem 0 0 1rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px -10px 0 ${colors.yellow};
  }
`;

const block4 = css`
  background-color: ${colors.black};
  border-radius: 2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const title = css`
  font-size: clamp(1rem, 3vw, 2rem);
`;

const HomePageMyServices: FC = () => {
  const {
    state: { lang },
  } = useContext(AppContext);

  return (
    <div css={container}>
      <h1 css={sectionTitle}>My Service</h1>

      <div css={contentWrapper} data-aos="fade-up">
        <div css={service1Container}>
          <img
            src={performanceImg.src}
            css={img1}
            alt="Performance optimization"
          />
          <h1 css={title}>Performance Optimization</h1>
        </div>
        <div css={service2Container}>
          <h1 css={title}>Accessibility</h1>
          <img src={accessibilityImg.src} css={img2} alt="Accessibility" />
        </div>
        <div css={service3Container}>
          <div css={block1}>
            <h1 css={title}>
              Front-End &<br /> Back-End Integration
            </h1>
          </div>
          <div css={blockContainer}>
            <div css={block2}>
              <img src={lockImg.src} css={img3} alt="Lock" />
            </div>
            <div css={block3}>
              <div css={block4}>
                <img src={keyImg.src} css={img4} alt="Lock" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMyServices;
