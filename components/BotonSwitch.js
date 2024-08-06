import { Switch } from "react-native";
import { useContext } from "react";
import { AppContext } from "../App";

export const BotonSwitch = () => {
    const { theme, setTheme, getColor, colors} = useContext(AppContext)
    
    return (
    <Switch
      value={theme === "light"}
      onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
      thumbColor={getColor(colors.light1, colors.dark1)}
      trackColor={{ true: colors.light3, false: colors.dark3 }}
    />
  );
};
