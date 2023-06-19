import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function Cronometro() {
  const [tempo, setTempo] = useState(0);
  const [intervalo, setIntervalo] = useState(null);

  const iniciarCronometro = () => {
    setIntervalo(
      setInterval(() => {
        setTempo((tempo) => tempo + 1);
      }, 1000)
    );
  };

  const pausarCronometro = () => {
    clearInterval(intervalo);
    setIntervalo(null);
  };

  const reiniciarCronometro = () => {
    clearInterval(intervalo);
    setIntervalo(null);
    setTempo(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{tempo} segundos</Text>
      <View style={styles.buttons}>
        <Button title="Start" onPress={iniciarCronometro} />
        <Button title="Pause" onPress={pausarCronometro} />
        <Button title="Reset" onPress={reiniciarCronometro} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
  },
  buttons: {
    width: "50%",
    height: 200,
    justifyContent: "space-around",
    marginTop: 60,
  },
});
