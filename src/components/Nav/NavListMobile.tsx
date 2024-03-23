import { FC, useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { AppContext } from "@/context/AppContext";
import routeLinks from "@/routeLinks";
import NavListItem from "./NavListItem";
import { useRouter } from "next/router";
import LanguageLinks from "./LanguageLinks";
import { Dialog, DialogStore } from "@ariakit/react/dialog";
import colors from "@/value/colors";
import DarkModeSettings from "./DarkModeSettings";

const container = ({ darkmode }: { darkmode: boolean }) => css`
  display: flex;
  top: 4.5rem;
  left: 0;
  background-color: ${darkmode ? colors.black : colors.white};
  position: fixed;
  z-index: 10;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding: 7rem 3rem;
  box-shadow: ${darkmode
    ? "rgba(255, 255, 255, 0.1) 0px 4px 12px;"
    : "rgba(0, 0, 0, 0.1) 0px 4px 12px;"};

  width: 100%;
  color: ${darkmode ? colors.white : colors.textPrimary};

  @media screen and (min-width: 720px) {
    display: none;
  }
`;

export type NavInfo = {
  name: string;
  url: string;
  isButtonLink: boolean;
};

const NavListMobile: FC<{
  dialogStore: DialogStore;
}> = ({ dialogStore }) => {
  const {
    state: { lang, darkmode },
  } = useContext(AppContext);

  const router = useRouter();

  const navListInfo: NavInfo[] = [
    {
      name: "About",
      url: routeLinks.about({ lang }),
      isButtonLink: false,
    },
    {
      name: "Work",
      isButtonLink: false,
      url: routeLinks.projects({ lang }),
    },
    {
      name: "Contact",
      isButtonLink: true,
      url: routeLinks.contact({ lang }),
    },
  ];

  useEffect(() => {
    const onRouteChangeStart = () => {
      dialogStore.hide();
    };

    router.events.on("routeChangeStart", onRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
    };
  }, [dialogStore, router.events]);

  return (
    <Dialog css={container({ darkmode })} modal store={dialogStore}>
      {navListInfo.map((item, index) => (
        <NavListItem
          item={item}
          key={index}
          isActive={router.asPath === item.url}
        />
      ))}

      <LanguageLinks lang={lang} />
      <DarkModeSettings />
    </Dialog>
  );
};

export default NavListMobile;
