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
import SliderComponent from "./components/SliderComponent";
import usePadState from "./hooks/usePadState";

const App = () => {
  const {
    standardPad,
    setStandardPad,
    superPad,
    setSuperPad,
    superPlusPad,
    setSuperPlusPad,
  } = usePadState(50, 20, 50);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Header />
        <Summary />
        <Tab />
        <SliderComponent
          label="Standart Ped"
          value={standardPad}
          onValueChange={setStandardPad}
        />
        <SliderComponent
          label="Süper Ped"
          value={superPad}
          onValueChange={setSuperPad}
        />
        <SliderComponent
          label="Süper+ Ped"
          value={superPlusPad}
          onValueChange={setSuperPlusPad}
        />
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
});

export default App;
