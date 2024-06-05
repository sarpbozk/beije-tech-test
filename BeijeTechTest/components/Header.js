import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => (
  <View>
    <Text style={styles.header}>Kendi Paketini Oluştur</Text>
    <Text style={styles.subHeader}>
      Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan,
      sana özel bir paket oluşturalım.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subHeader: {
    fontSize: 16,
    marginVertical: 10,
    color: "#666",
  },
});

export default Header;
