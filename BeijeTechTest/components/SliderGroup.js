import React from "react";
import SliderComponent from "./SliderComponent";

const SliderGroup = ({
  activeTab,
  quantities,
  handleValueChange,
  priceMap,
}) => {
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

  return <>{renderSliders()}</>;
};

export default SliderGroup;
