import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const priceMap = {
  "Standart Ped": [0, 60.84, 119.85, 189.41, 239.7, 299.76, 358.82],
  "Süper Ped": [0, 71.4, 140.01, 208.42, 279.82, 348.43, 416.84],
  "Süper+ Ped": [0, 80.03, 158.21, 235.74, 315.77, 393.95, 471.48],
};

const SliderComponent = ({ label, onValueChange }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    onValueChange(value, priceMap[label][value / 10]);
  }, [value]);

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderLabel}>{label}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={60}
        step={10}
        value={value}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#000000"
        onValueChange={(val) => setValue(val)}
      />
      <Text style={styles.sliderValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SliderComponent;
