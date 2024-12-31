import { FC, useCallback, useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { AppContext } from "@/context/AppContext";

const DarkModeSettings: FC = () => {
  const {
    state: { darkmode },
    dispatch,
  } = useContext(AppContext);

  const onDarkmodeClick = useCallback(() => {
    dispatch({ type: "enableDarkMode", payload: true });
  }, [dispatch]);

  const onLightModeClick = useCallback(() => {
    dispatch({ type: "enableDarkMode", payload: false });
  }, [dispatch]);

  return darkmode ? (
    <Brightness5Icon onClick={onLightModeClick} />
  ) : (
    <DarkModeIcon onClick={onDarkmodeClick} />
  );
};

export default DarkModeSettings;
