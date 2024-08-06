import { useContext } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { UserContext, AppContext } from "../App";
import { BotonSwitch } from "../components/BotonSwitch";

const HomeScreen = ({ navigation }) => {
  const { userName } = useContext(UserContext);
  const { getColor, colors } = useContext(AppContext);

  const styles = StyleSheet.create({
    mainContainer: {
      display: "flex",
      backgroundColor: getColor(colors.light1, colors.dark1),
      height: "100%",
      padding: 20,
    },
    container: {
      border: `solid ${getColor("black", "#35FBD6")} 3px`,
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      flex: 1,
    },
    text1: {
      color: getColor("black", "#35FBD6"),
      textAlign: "center",
      //alignContent:'center',
      //alignItems: 'center',
      fontSize: 30,
      fontWeight:'bold',
      marginBottom: 10,
      marginTop: 10,
    },
    text2: {
      color: getColor("black", "#35FBD6"),
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "justify",
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      marginTop: 15,
    },
    text3: {
      color: getColor("black", "#35FBD6"),
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: "justify",
      
    },
    boton: {
      margin:10,
      width: 'auto',
      height: 'auto',
      justifyContent: 'center',
      border: `solid ${getColor("black", "#35FBD6")} 2px`,
      padding: 5,
      borderRadius: 5
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <BotonSwitch />
        <Text style={styles.text1}>Hola {userName}</Text>
        <Text style={styles.text2}>
          Esta es la vista de presentación del proyecto presentado con
          react-navite, este proyecto es una calculadora basica completamente
          funcional.
        </Text>
        {/*<Button
          title="INICIAR"
          onPress={() => {
            navigation.navigate("Calculadora");
          }}
        />*/}
        <Pressable 
        style={styles.boton}
        onPress={() => navigation.navigate("Calculadora")}>
          <Text style = {styles.text3}>INICIAR</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
