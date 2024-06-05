import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tab = ({ tabs, activeTab, setActiveTab }) => (
  <View style={styles.tabContainer}>
    {tabs.map((tab) => (
      <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
        <Text style={[styles.tab, activeTab === tab && styles.activeTab]}>
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
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
  activeTab: {
    fontWeight: "bold",
    color: "#000",
  },
});

export default Tab;
