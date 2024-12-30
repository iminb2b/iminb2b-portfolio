import { DialogDisclosure, DialogStore } from "@ariakit/react/dialog";
import { css } from "@emotion/react";
import { FC, memo, useContext, useMemo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import colors from "@/value/colors";
import { AppContext } from "@/context/AppContext";
const iconTextColumn = css`
  background-color: transparent;
  border: none;
  @media screen and (min-width: 720px) {
    display: none;
  }
`;

const icon = ({ iconColor }: { iconColor: string }) =>
  css({
    fontSize: "2rem",
    color: iconColor,
  });
const NavMenuMobileButton: FC<{
  dialogStore: DialogStore;
  scrollNav: boolean;
}> = memo(({ dialogStore, scrollNav }) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);
  const dialogIsMounted = dialogStore.useState("mounted");

  const iconColor = useMemo(
    () =>
      darkmode
        ? colors.background
        : scrollNav
        ? colors.background
        : colors.primary,
    [darkmode, scrollNav],
  );

  return (
    <DialogDisclosure css={iconTextColumn} store={dialogStore}>
      {dialogIsMounted ? (
        <CloseIcon css={icon({ iconColor })} />
      ) : (
        <MenuIcon css={icon({ iconColor })} />
      )}
    </DialogDisclosure>
  );
});

export default NavMenuMobileButton;
