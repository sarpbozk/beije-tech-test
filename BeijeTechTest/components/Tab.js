import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tab = () => (
  <View style={styles.tabContainer}>
    <Text style={styles.tab}>beije Ped</Text>
    <Text style={styles.tab}>beije Günlük Ped</Text>
    <Text style={styles.tab}>beije Tampon</Text>
  </View>
);

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  tab: {
    fontSize: 16,
    color: "#999",
  },
});

export default Tab;
