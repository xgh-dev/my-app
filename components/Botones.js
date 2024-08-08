import { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../App";

export const Btn = ({ title, type, navigation }) => {
  //extraer contextos
  const { calcular, getBtnColor, getColor, colors } = useContext(AppContext);
  const styles = StyleSheet.create({
    touchO: {
      padding: 10,
      borderRadius: 10,
      elevation: 2,
      backgroundColor: getColor(colors.light1, colors.dark1),
      height: 70,
      width: 70,
      margin: 16,
    },
    text: {
      fontSize: 37,
      color: getColor(colors.dark1, colors.light1),
      textAlign: "center",
      color: getBtnColor(type),
    },
  });

  return (
    <TouchableOpacity
      style={styles.touchO}
      onPress={() => {
        if (title == "R") {
          navigation.navigate("Home");
        } else {
          calcular(title);
        }
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
