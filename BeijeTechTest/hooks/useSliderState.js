import { useState, useEffect } from "react";

const useSliderState = (initialQuantities, priceMap) => {
  const [quantities, setQuantities] = useState(initialQuantities);

  const handleValueChange = (label, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [label]: value,
    }));
  };

  const calculateTotalPrice = () => {
    return Object.keys(quantities).reduce((total, key) => {
      const priceArray = priceMap[key] || [];
      const value = quantities[key];
      const priceIndex = value / 10;
      const price = priceArray[priceIndex] || 0;
      return total + price;
    }, 0);
  };

  return {
    quantities,
    handleValueChange,
    calculateTotalPrice,
  };
};

export default useSliderState;
