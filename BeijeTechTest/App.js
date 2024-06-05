import React, { useState, useMemo } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Tab from "./components/Tab";
import SliderGroup from "./components/SliderGroup";
import useSliderState from "./hooks/useSliderState";
import priceMap from "./constants/priceMap";

const App = () => {
  const [activeTab, setActiveTab] = useState("beije Ped");
  const initialQuantities = {
    "Standart Ped": 0,
    "Süper Ped": 0,
    "Süper+ Ped": 0,
    "Günlük Ped": 0,
    "Süper Günlük Ped": 0,
    "Mini Tampon": 0,
    "Standart Tampon": 0,
    "Super Tampon": 0,
  };

  const { quantities, handleValueChange, calculateTotalPrice } = useSliderState(
    initialQuantities,
    priceMap
  );

  const totalPrice = useMemo(calculateTotalPrice, [quantities]);

  const priceMap = {
    "Standart Ped": [0, 60.84, 119.85, 189.41, 239.7, 299.76, 358.82],
    "Süper Ped": [0, 71.4, 140.01, 208.42, 279.82, 348.43, 416.84],
    "Süper+ Ped": [0, 80.03, 158.21, 235.74, 315.77, 393.95, 471.48],
    "Günlük Ped": [
      0, 37.59, 57.79, 80.11, 115.58, 127.3, 160.22, 185.09, 207.41, 240.33,
      254.6,
    ],
    "Süper Günlük Ped": [
      0, 43.23, 72.37, 105.45, 145.46, 172.84, 210.9, 245.57, 278.29, 316.35,
      345.68,
    ],
    "Mini Tampon": [0, 78.74, 154.47, 228.81, 307.55, 383.28, 357.62],
    "Standart Tampon": [0, 84.88, 165.1, 247.23, 330.2, 412.33, 494.46],
    "Super Tampon": [0, 89.74, 178.16, 263.45, 353.19, 441.61, 526.9],
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
      priceMap["Süper+ Ped"][quantities["Süper+ Ped"] / 10] +
      priceMap["Günlük Ped"][quantities["Günlük Ped"] / 10] +
      priceMap["Süper Günlük Ped"][quantities["Süper Günlük Ped"] / 10] +
      priceMap["Mini Tampon"][quantities["Mini Tampon"] / 10] +
      priceMap["Standart Tampon"][quantities["Standart Tampon"] / 10] +
      priceMap["Super Tampon"][quantities["Super Tampon"] / 10]
    );
  }, [quantities]);

  const renderSliders = () => {
    switch (activeTab) {
      case "beije Ped":
        return (
          <>
            <SliderComponent
              label="Standart Ped"
              value={quantities["Standart Ped"]}
              onValueChange={handleValueChange}
              priceMap={priceMap}
            />
            <SliderComponent
              label="Süper Ped"
              value={quantities["Süper Ped"]}
              onValueChange={handleValueChange}
              priceMap={priceMap}
            />
            <SliderComponent
              label="Süper+ Ped"
              value={quantities["Süper+ Ped"]}
              onValueChange={handleValueChange}
              priceMap={priceMap}
            />
          </>
        );
      case "beije Günlük Ped":
        return (
          <>
            <SliderComponent
              label="Günlük Ped"
              value={quantities["Günlük Ped"]}
              onValueChange={handleValueChange}
              priceMap={priceMap}
            />
            <SliderComponent
              label="Süper Günlük Ped"
              value={quantities["Süper Günlük Ped"]}
              onValueChange={handleValueChange}
              priceMap={priceMap}
            />
          </>
        );
      case "beije Tampon":
        return (
          <>
            <SliderComponent
              label="Mini Tampon"
              value={quantities["Mini Tampon"]}
              onValueChange={handleValueChange}
              priceMap={priceMap}
            />
            <SliderComponent
              label="Standart Tampon"
              value={quantities["Standart Tampon"]}
              onValueChange={handleValueChange}
              priceMap={priceMap}
            />
            <SliderComponent
              label="Super Tampon"
              value={quantities["Super Tampon"]}
              onValueChange={handleValueChange}
              priceMap={priceMap}
            />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Header />
        <Summary quantities={quantities} totalPrice={totalPrice} />
        <Tab
          tabs={["beije Ped", "beije Günlük Ped", "beije Tampon"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SliderGroup
          activeTab={activeTab}
          quantities={quantities}
          handleValueChange={handleValueChange}
          priceMap={priceMap}
        />
        {renderSliders()}
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
