import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AppContext } from "../App";

export const Btn = ({ title, type, navigation }) => {
  //extraer contextos
  const { calcular, getBtnColor, getColor, colors } =
    useContext(AppContext);

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(colors.light1, colors.dark1),
        height: 70,
        width: 70,
        margin: 16,
      }}
      onPress={() => {
        if (title == "R") {
          navigation.navigate("Home");
        } else {
          calcular(title);
        }
      }}
    >
      <Text
        style={{
          fontSize: 37,
          color: getColor(colors.dark1, colors.light1),
          textAlign: "center",
          color: getBtnColor(type),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
