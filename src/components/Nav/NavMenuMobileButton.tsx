import { DialogDisclosure, DialogStore } from "@ariakit/react/dialog";
import { css } from "@emotion/react";
import { FC, memo, useContext } from "react";
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

const icon = ({ darkmode }: { darkmode: boolean }) => css`
  font-size: 2rem;
  color: ${darkmode ? colors.white : colors.black};
`;

const NavMenuMobileButton: FC<{
  dialogStore: DialogStore;
}> = memo(({ dialogStore }) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);
  const dialogIsMounted = dialogStore.useState("mounted");

  return (
    <DialogDisclosure css={iconTextColumn} store={dialogStore}>
      {dialogIsMounted ? (
        <CloseIcon css={icon({ darkmode })} />
      ) : (
        <MenuIcon css={icon({ darkmode })} />
      )}
    </DialogDisclosure>
  );
});

export default NavMenuMobileButton;
