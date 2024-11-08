import { FC, useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { AppContext } from "@/context/AppContext";
import Logo from "./Logo";
import { contentContainer } from "@/styles/generalStyles";
import NavList from "./Nav/NavList";
import { useDialogStore } from "@ariakit/react";
import NavMenuMobileButton from "./Nav/NavMenuMobileButton";
import NavListMobile from "./Nav/NavListMobile";
const container = ({ scrollNav }: { scrollNav: boolean }) => css`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 10;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;

  width: ${scrollNav ? "80%" : "100%"};
  max-width: ${scrollNav ? "1000px" : "1200px"};

  background: transparent;
`;

const contentWrapper = css`
  ${contentContainer}

  width: 100%;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  padding: 0;

  border-radius: 3rem;
`;

const lightModeContainer = ({ scrollNav }: { scrollNav: boolean }) => css`
  ${contentWrapper}

  padding: ${scrollNav ? "0.5rem 1rem" : "0.5rem 0"};
  background-color: ${scrollNav ? "rgba(86, 98,149, 0.95)" : "transparent"};
  box-shadow: ${scrollNav ? "rgba(0, 0, 0, 0.1) 0px 4px 12px;" : "none"};
`;

const darkModeContainer = ({ scrollNav }: { scrollNav: boolean }) => css`
  ${contentWrapper}
  padding: ${scrollNav ? "0.5rem 1rem" : "0.5rem 0"};

  background-color: ${scrollNav ? "rgba(0,0,0, 0.5)" : "transparent"};
  box-shadow: ${scrollNav ? "rgba(0, 0, 0, 0.1) 0px 4px 12px;" : "none"};
`;

const Header: FC = () => {
  // const strings = useContext(AppContext);
  const {
    state: { darkmode },
  } = useContext(AppContext);

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const mobileHeaderNavDialogStore = useDialogStore();
  const mobileHeaderNavDialogIsMounted =
    mobileHeaderNavDialogStore.useState("mounted");

  return (
    <div
      css={container({
        scrollNav: mobileHeaderNavDialogIsMounted || scrollNav,
      })}
    >
      <div
        css={
          darkmode
            ? darkModeContainer({
                scrollNav: mobileHeaderNavDialogIsMounted || scrollNav,
              })
            : lightModeContainer({
                scrollNav: mobileHeaderNavDialogIsMounted || scrollNav,
              })
        }
      >
        <Logo />
        <NavList />

        <NavMenuMobileButton dialogStore={mobileHeaderNavDialogStore} />

        {mobileHeaderNavDialogIsMounted && (
          <NavListMobile dialogStore={mobileHeaderNavDialogStore} />
        )}
      </div>
    </div>
  );
};

export default Header;
