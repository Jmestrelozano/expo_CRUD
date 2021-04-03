import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "./views/Inicio";
import { NavigationContainer } from "@react-navigation/native";
import NuevoCliente from "./views/NuevoCliente";
import DetalleCliente from "./views/DetalleCliente";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Barra from "./components/ui/Barra";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1774f2",
    accent: "#0655bf",
  },
};

console.log(theme.colors.primary);

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerTitleAlign:"center",
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.surface,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Inicio" component={Inicio} options={({navigation,route})=> ({
            headerLeft:(props) => <Barra {...props}
            navigation={navigation}
            route={route}
            />
          })} />
          <Stack.Screen name="Nuevo Cliente" component={NuevoCliente} />
          <Stack.Screen name="Detalles Cliente" component={DetalleCliente} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor="#000" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
