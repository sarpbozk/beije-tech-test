import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Slider from "@react-native-community/slider";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Tab from "./components/Tab";

const App = () => {
  const [standardPad, setStandardPad] = useState(50);
  const [superPad, setSuperPad] = useState(20);
  const [superPlusPad, setSuperPlusPad] = useState(50);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Header />
        <Summary />
        <Tab />
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Standart Ped</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={60}
            step={1}
            value={standardPad}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#000000"
            onValueChange={(value) => setStandardPad(value)}
          />
          <Text style={styles.sliderValue}>{standardPad}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Süper Ped</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={60}
            step={1}
            value={superPad}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#000000"
            onValueChange={(value) => setSuperPad(value)}
          />
          <Text style={styles.sliderValue}>{superPad}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Süper+ Ped</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={60}
            step={1}
            value={superPlusPad}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#000000"
            onValueChange={(value) => setSuperPlusPad(value)}
          />
          <Text style={styles.sliderValue}>{superPlusPad}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  container: {
    flex: 1,
    padding: 16,
  },
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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  tab: {
    fontSize: 16,
    color: "#999",
  },
  sliderContainer: {
    marginVertical: 20,
  },
  sliderLabel: {
    fontSize: 16,
    color: "#333",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderValue: {
    textAlign: "right",
    fontSize: 16,
    color: "#333",
  },
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

export default App;
