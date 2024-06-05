import React, { useState, useMemo } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Tab from "./components/Tab";
import SliderComponent from "./components/SliderComponent";

const App = () => {
  const [quantities, setQuantities] = useState({
    "Standart Ped": 0,
    "Süper Ped": 0,
    "Süper+ Ped": 0,
  });

  const priceMap = {
    "Standart Ped": [0, 60.84, 119.85, 189.41, 239.7, 299.76, 358.82],
    "Süper Ped": [0, 71.4, 140.01, 208.42, 279.82, 348.43, 416.84],
    "Süper+ Ped": [0, 80.03, 158.21, 235.74, 315.77, 393.95, 471.48],
  };

  const handleValueChange = (label, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [label]: quantity,
    }));
  };

  const totalPrice = useMemo(() => {
    return (
      priceMap["Standart Ped"][quantities["Standart Ped"] / 10] +
      priceMap["Süper Ped"][quantities["Süper Ped"] / 10] +
      priceMap["Süper+ Ped"][quantities["Süper+ Ped"] / 10]
    );
  }, [quantities]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Header />
        <Summary quantities={quantities} totalPrice={totalPrice} />
        <Tab />
        <SliderComponent
          label="Standart Ped"
          onValueChange={(value) => handleValueChange("Standart Ped", value)}
        />
        <SliderComponent
          label="Süper Ped"
          onValueChange={(value) => handleValueChange("Süper Ped", value)}
        />
        <SliderComponent
          label="Süper+ Ped"
          onValueChange={(value) => handleValueChange("Süper+ Ped", value)}
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
