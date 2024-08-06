import { View } from "react-native";
import { useContext } from "react";
import { AppContext } from "../App";
import { BotonSwitch } from "../components/BotonSwitch";
import { DisplayView } from "../components/Display";
import { BtnsView } from "../components/BtnsView";


const AppScreen = ({ navigation }) => {
  //obteniendo el contexto
  const { getColor, colors } =
    useContext(AppContext);

  //definiendo los estilos
  const styles = {
    container: {
      backgroundColor: getColor(colors.light1, colors.dark1),
      width: "100%",
      height: "100%",
      paddingTop: 50,
      //paddingVertical: 20,
      alignItems: "center",
    }
  };

  return (
    <View style={styles.container}>
      <BotonSwitch />
      <DisplayView />
      <BtnsView navigation={navigation}/>
    </View>
  );
};

export default AppScreen;
