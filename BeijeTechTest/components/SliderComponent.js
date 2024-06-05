import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const SliderComponent = ({ label, value, onValueChange, priceMap }) => {
  const handleValueChange = (val) => {
    onValueChange(label, val);
  };

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderLabel}>{label}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={priceMap[label] ? (priceMap[label].length - 1) * 10 : 0}
        step={10}
        value={value}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#000000"
        onValueChange={handleValueChange}
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
