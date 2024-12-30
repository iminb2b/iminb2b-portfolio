import { css, Global } from "@emotion/react";
import { FC, memo, ReactNode, useContext, useEffect } from "react";
import Header from "./Header";
import globalStyles from "@/styles/globalStyles";
import { AppContext } from "@/context/AppContext";
import colors from "@/value/colors";

const pageContent = css`
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
`;

const pageContainer = ({ darkmode }: { darkmode: boolean }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh);
  background-color: ${darkmode ? colors.primary : colors.background};
  color: ${darkmode ? colors.background : colors.primary};
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;
`;

const Layout: FC<{
  children: ReactNode;
}> = memo(({ children }) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

  return (
    <div css={pageContainer({ darkmode })}>
      <Global styles={globalStyles} />

      <Header />

      <div css={pageContent}>{children}</div>

      {/* <Footer /> */}
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
