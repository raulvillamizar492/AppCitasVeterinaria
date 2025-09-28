import { Text, View, StyleSheet, Button, Pressable, Modal } from "react-native";
import { useState } from "react";
import Formulario from "./src/components/Formulario";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.subtitulo}>Veterinaria Angelitos </Text>
      <Pressable onPress={() => setModalVisible(true)} style={styles.btn}>
        <Text style={styles.btnNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
    color: "#374151",
  },
  subtitulo: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 5,
    color: "#6D28D9",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  btn: {
    backgroundColor: "#6D28D9",
    padding: 15,
    marginTop: 35,
    marginHorizontal: "20",
    borderRadius: 10,
  },
  btnNuevaCita: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});
