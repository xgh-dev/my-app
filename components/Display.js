import { useContext } from "react";
import { Text, View } from "react-native";
import { AppContext } from "../App";

export const DisplayView = () => {
  const { result, getColor, colors } =
    useContext(AppContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark1, colors.light2),
          width: "100%",
          textAlign: "right",
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        {result}
      </Text>
    </View>
  );
};
