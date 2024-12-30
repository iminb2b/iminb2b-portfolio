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

const container = ({ darkmode }: { darkmode: boolean }) =>
  css({
    display: "flex",
    top: "4.5rem",
    left: 0,
    backgroundColor: darkmode ? colors.primary : colors.background,
    position: "fixed",
    zIndex: 10,
    flexDirection: "column",
    gap: "1.5rem",
    alignItems: "center",
    padding: "7rem 3rem",
    width: "100%",
    height: "100%",
    color: darkmode ? colors.background : colors.textPrimary,

    " @media screen and (min-width: 720px)": {
      display: "none",
    },
  });

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
