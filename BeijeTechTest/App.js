import React, { useMemo, useState } from "react";
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
