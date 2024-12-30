import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { css } from "@emotion/react";
import useMousePosition from "@/hooks/useMousePosition";
import { AppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import colors from "@/value/colors";
const container = ({ darkmode }: { darkmode: boolean }) =>
  css({
    height: "calc(100vh - 50px)",
    position: "relative",
    width: "100%",
    backgroundColor: darkmode ? colors.primary : colors.background,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "50rem",
  });
const textContainer = css({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",
  cursor: "default",
  background: "transparent",
});

const mask = ({ darkmode }: { darkmode: boolean }) =>
  css(
    textContainer,
    {
      position: "absolute",
      maskImage: `url("../../../mask.svg")`,
      background: darkmode ? colors.background : colors.primary,
      maskRepeat: "no-repeat",
      color: darkmode ? colors.primary : colors.background,
      height: "100%",
      width: "100%",
      top: "0",
    },
    {
      "@media (pointer: coarse)": {
        display: "none",
      },
    },
  );
const maskContainer = css(
  {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1200px",
    paddingBottom: "3rem",
    gap: "3rem",
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
  },
  {
    "@media screen and (max-width: 600px)": {
      justifyContent: "space-around",
    },
  },
);
const body = css(maskContainer, {});

const title = css({
  fontSize: "clamp(3.5rem, 5.15625vw, 6rem)",
  fontWeight: "bold",
  lineHeight: 1.4,
});

const jobTitle = css(
  {
    width: "100%",
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontWeight: "300",
    letterSpacing: "1rem",
    fontSize: "1.125rem",
  },
  {
    "@media screen and (max-width: 600px)": {
      letterSpacing: "0.25rem",
    },
  },
);

const timeContainer = css(
  {
    fontSize: "1.5rem",
    padding: "2rem 0",
    borderBottom: `1px solid ${colors.primary}`,
    width: "100%",
    fontStyle: "italic",
  },
  {
    "@media screen and (max-width: 600px)": {
      fontSize: "1rem",
    },
  },
);

const contentContainer = css({
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  width: "100%",
  alignItems: "flex-start",
  gap: "1rem",
  fontSize: "1rem",
});

const experienceContainer = css({
  padding: "4rem 0",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  fontSize: "1.125rem",
  width: "100%",
});

const HomePageHero: FC = () => {
  const {
    state: { lang, strings, darkmode },
  } = useContext(AppContext);

  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();
  const cursorSize = useMemo(() => (isHovered ? 200 : 40), [isHovered]);

  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => setIsHovered(false), []);

  const [vietnamTime, setVietnamTime] = useState<string>("");
  const [torontoTime, setTorontoTime] = useState<string>("");

  useEffect(() => {
    const updateTimes = () => {
      const vietnamFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Ho_Chi_Minh",
        hour12: false,
      });

      const torontoFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Toronto",
        hour12: false,
      });

      const now = new Date();
      setVietnamTime(vietnamFormatter.format(now));
      setTorontoTime(torontoFormatter.format(now));
    };

    // Initial call and set interval for updating every second
    updateTimes();
    const intervalId = setInterval(updateTimes, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div css={container({ darkmode })}>
      <motion.div
        css={mask({ darkmode })}
        animate={{
          WebkitMaskPosition: `${x - cursorSize / 2}px ${y - cursorSize / 2}px`,
          WebkitMaskSize: `${cursorSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          css={maskContainer}
        >
          <div css={timeContainer}>
            Based in Toronto - <b>{torontoTime}</b>
          </div>
          <div css={contentContainer}>
            <h3 css={title}>Hi, I am Min</h3>
            <h2 css={jobTitle}>FRONT END DEVELOPER</h2>
          </div>

          <div css={experienceContainer}>
            <p>
              Currently - <b>Front End Developer @ Asl19</b>
            </p>
            <p>
              Previously - <b>Front End Intern @ LOOCREATIVE</b>
            </p>
          </div>
        </div>
      </motion.div>

      <div css={body}>
        <div css={timeContainer}>
          Based in Viet Nam - <b>{vietnamTime}</b>
        </div>
        <div css={contentContainer}>
          <h3 css={title}>Hi, I am Nhung</h3>
          <h2 css={jobTitle}>FRONT END DEVELOPER</h2>
        </div>

        <div css={experienceContainer}>
          <p>
            Currently - <b>Front End Developer @ Asl19</b>
          </p>
          <p>
            Previously - <b>Front End Intern @ LOOCREATIVE</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
