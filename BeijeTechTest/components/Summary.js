// components/Summary.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Summary = ({ quantities, totalPrice }) => (
  <View style={styles.summary}>
    <Text style={styles.summaryHeader}>Özel Paketin</Text>
    <Text style={styles.deliveryText}>2 ayda 1 gönderim</Text>
    <Image source={require("../assets/Screenshot.png")} style={styles.image} />
    <Text style={styles.summaryText}>
      {quantities["Standart Ped"]} Standart Ped, {quantities["Süper Ped"]} Süper
      Ped ve {quantities["Süper+ Ped"]} Süper+ Ped
    </Text>
    <View style={styles.button}>
      <Text style={styles.buttonText}>
        Sepete Ekle (₺{totalPrice.toFixed(2)})
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  summary: {
    marginTop: 30,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },
  summaryHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  deliveryText: {
    fontSize: 16,
    color: "#666",
  },
  image: {
    width: 200,
    height: 100,
    marginVertical: 10,
  },
  summaryText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Summary;
