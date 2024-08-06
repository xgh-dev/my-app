import { View } from "react-native";
import { Btn } from "./Botones";
import { AppContext } from "../App";
import { useContext } from "react";

export const BtnsView = ({navigation}) => {
    //llamamos al contexto
  const { getColor, colors } =
    useContext(AppContext);

  //definiendo los estilos
  const styles = {
    btnsContainer: {
      flex: 3,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "space-around",
      backgroundColor: getColor(colors.light2, colors.dark2),
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
  };

  return (
    <View style={styles.btnsContainer}>
      <Btn title="R" type={"no-mat"} navigation={navigation} />
      <Btn title="C" type={"no-mat"} />
      <Btn title="DL" type={"no-mat"} />
      <Btn title="/" type={"mat-op"} />
      <Btn title="7" />
      <Btn title="8" />
      <Btn title="9" />
      <Btn title="*" type={"mat-op"} />
      <Btn title="4" />
      <Btn title="5" />
      <Btn title="6" />
      <Btn title="-" type={"mat-op"} />
      <Btn title="1" />
      <Btn title="2" />
      <Btn title="3" />
      <Btn title="+" type={"mat-op"} />
      <Btn title="00" />
      <Btn title="0" />
      <Btn title="." />
      <Btn title="=" type={"mat-op"} />
    </View>
  );
};
