import { FC, useCallback, useContext } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { AppContext } from "@/context/AppContext";

const dark = css`
  color: ${colors.black};
`;

const lightMode = css`
  color: ${colors.white};
`;

const DarkModeSettings: FC<{}> = () => {
  const {
    state: { darkmode },
    dispatch,
  } = useContext(AppContext);

  const onDarkmodeClick = useCallback(() => {
    dispatch({ type: "enableDarkMode", payload: true });
  }, []);

  const onLightModeClick = useCallback(() => {
    dispatch({ type: "enableDarkMode", payload: false });
  }, []);

  return darkmode ? (
    <Brightness5Icon css={lightMode} onClick={onLightModeClick} />
  ) : (
    <DarkModeIcon css={dark} onClick={onDarkmodeClick} />
  );
};

export default DarkModeSettings;
