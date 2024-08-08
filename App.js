import { useEffect, useState, createContext } from "react";
//dependencias de la navegacion
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//importar las vistas
import HomeScreen from "./views/HomeScreen";
import AppScreen from "./views/AppScreen";

//creando el stack
const Stack = createNativeStackNavigator();

//creando los contextos
export const UserContext = createContext();
export const AppContext = createContext();

//definiendo los colores
const colors = {
  dark1: "#22252D",
  dark2: "#292B36",
  dark3: "#272B33",
  light1: "#FFF",
  light2: "#F1F1F1",
  light3: "#F7F7F7",
};

export default function App() {
  //crear los hooks
  const [result, setResult] = useState("");
  const [theme, setTheme] = useState("dark");
  const [userName, setUserName] = useState("Usuario");

  //definiendo la funcion que nos realizara las operaciones
  const calcular = (title) => {
    if (title === "C") {
      setResult("");
    } else if (title === "DL") {
      setResult(result.slice(0, -1));
    } else if (title === "=") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("ERORR");
      }
    } else setResult(result + title);
  };

  //realizar una consulta a la appi de usuarios mediante use efect
  useEffect(() => {
    userList();
  }, []);

  //funcion de consulta a la api
  async function userList() {
    const url = `https://jsonplaceholder.typicode.com/users/${
      Math.floor(Math.random() * 10) + 1
    }`;
    try {
      const data = await fetch(url);
      const usuario = await data.json();
      setUserName(usuario.username);
    } catch (error) {
      console.log(error);
    }
  }

  //definiendo la funcion que evaluara el type de los botones y en base a eso les asignara un color a su fuente
  const getBtnColor = (type) => {
    if (type === "no-mat") {
      return "#35FBD6";
    } else if (type === "mat-op") {
      return "#EB6363";
    } else {
      return getColor(colors.dark1, colors.light1);
    }
  };

  //definiendo la funcion que nos modificara la paleta de colores dependiendo de si se quiere en light o dark
  const getColor = (light, dark) => (theme === "light" ? dark : light);

  return (
    <UserContext.Provider value={{ userName, getColor }}>
      <AppContext.Provider
        value={{
          calcular,
          result,
          theme,
          setTheme,
          getBtnColor,
          getColor,
          colors,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Calculadora" component={AppScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </UserContext.Provider>
  );
}
