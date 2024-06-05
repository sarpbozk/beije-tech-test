import React, { useState, useMemo } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Tab from "./components/Tab";
import SliderGroup from "./components/SliderGroup";
import useSliderState from "./hooks/useSliderState";
import priceMap from "./constants/priceMap";
import SliderComponent from "./components/SliderComponent";

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
