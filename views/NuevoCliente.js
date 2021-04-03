import axios from "axios";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Headline, TextInput, Button } from "react-native-paper";
import { useForm } from "../hooks/useForm";
import globalStyles from "../styles/styles";

const NuevoCliente = () => {
  const [inputValue, setInputValue, reset] = useForm({
    Nombre: "",
    Telefono: "",
    Correo: "",
    Empresa: "",
  });

  const { Nombre, Telefono, Correo, Empresa } = inputValue;
  const leerNombre = async () => {
    if (
      Nombre.trim() === "" ||
      Telefono.trim() === "" ||
      Correo.trim() === "" ||
      Empresa.trim() === ""
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios", [
        {
          text: "ok",
        },
      ]);
    } else {
      console.log("Enviado con exito");
  
      try {
        await axios.post("http://192.168.1.68:3000/Clientes", inputValue);
      } catch (error) {
        console.log("errores",error);
      }
      reset();
    }
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        value={Nombre}
        style={styles.input}
        onChangeText={(text) => {
          setInputValue({ ...inputValue, Nombre: text });
        }}
        label="Nombre"
      />
      <TextInput
        value={Telefono}
        onChangeText={(text) => {
          setInputValue({ ...inputValue, Telefono: text });
        }}
        style={styles.input}
        label="Telefono"
      />
      <TextInput
        value={Correo}
        onChangeText={(text) => {
          setInputValue({ ...inputValue, Correo: text });
        }}
        style={styles.input}
        label="Correo"
      />
      <TextInput
        value={Empresa}
        onChangeText={(text) => {
          setInputValue({ ...inputValue, Empresa: text });
        }}
        style={styles.input}
        label="Empresa"
      />

      <Button
        icon="pencil-circle"
        mode="contained"
        onPress={() => {
          leerNombre();
        }}
      >
        Enviar
      </Button>
    </View>
  );
};

export default NuevoCliente;

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: "transparent",
  },
});
