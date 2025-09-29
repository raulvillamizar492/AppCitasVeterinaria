import {
  Modal,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
const Formulario = ({ modalVisible, setModalVisible }) => {
  const [paciente, setPaciente] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const [sintomas, setSintomas] = useState("");

  return (
    <Modal animationType="fade" visible={modalVisible}>
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>
          Nueva {""}
          <Text style={styles.tituloBold}>Cita</Text>
        </Text>

        <View>
          <Pressable
            onLongPress={() => setModalVisible(false)}
            style={styles.btn}
          >
            <Text style={styles.btnSalir}>Salir</Text>
          </Pressable>
          <Text style={styles.label}>Nombre Paciente 🐕</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre Paciente "
            placeholderTextColor={"#666"}
            value={paciente}
            onChangeText={setPaciente}
          />
        </View>
        <View>
          <Text style={styles.label}>Nombre Propietario 👤</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre Propietario"
            placeholderTextColor={"#666"}
            value={propietario}
            onChangeText={setPropietario}
          />
        </View>
        <View>
          <Text style={styles.label}>Email Propietario ✉️</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Propietario"
            placeholderTextColor={"#666"}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={styles.label}>Numero Telefonico ☎️</Text>
          <TextInput
            style={styles.input}
            placeholder="Numero Telefonico"
            placeholderTextColor={"#666"}
            keyboardType="number-pad"
            value={telefono}
            onChangeText={setTelefono}
          />
        </View>

        <View>
          <Text style={styles.label}>Sintomas</Text>
          <TextInput
            style={styles.input}
            placeholder="Sintomas Paciente"
            placeholderTextColor={"#666"}
            keyboardType="ascii-capable"
            value={sintomas}
            onChangeText={setSintomas}
            multiline={true}
            numberOfLines={4}
          />
          <Pressable
            onLongPress={() => setModalVisible(false)}
            style={styles.btn2}
          >
            <Text style={styles.btnSalir}>Nueva Cita</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
};

//Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#817696FF",
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#ffff",
    fontSize: 31,
  },
  tituloBold: {
    fontWeight: "bold",
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "600",
    marginHorizontal: 15,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "#F703038F",
    padding: 15,
    marginTop: 35,
    marginHorizontal: "20",
    borderRadius: 10,
  },
  btn2: {
    backgroundColor: "#6D28D9",
    padding: 15,
    marginTop: 35,
    marginHorizontal: 40,
    borderRadius: 10,
  },

  btnSalir: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});

export default Formulario;
