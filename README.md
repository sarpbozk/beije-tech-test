## Project Summary

This project is a React Native application that allows users to customize their product packages by selecting quantities of different types of pads and tampons. Users can navigate between different product categories and adjust the quantities using sliders, with the total price calculated dynamically made for Beije internship techtest using seperate hooks and components much as possble.

## Features

1. **Tab Navigation:**
   - Users can switch between three tabs: "beije Ped," "beije Günlük Ped," and "beije Tampon."
   - Each tab displays a different set of sliders corresponding to the product category.

2. **Dynamic Sliders:**
   - Each tab contains sliders that allow users to select quantities for different products.
   - The sliders are customized for each product type, with different price calculations.

3. **Real-time Price Calculation:**
   - As users adjust the sliders, the total price is calculated in real-time.
   - The total price and selected quantities are displayed in a summary section.

## Implementation Details

1. **Component-based Architecture:**
   - The app is built using a modular component-based architecture.
   - Key components include `Header`, `Summary`, `Tab`, `SliderGroup`, and `SliderComponent`.

2. **State Management:**
   - The `useSliderState` custom hook manages the state of the sliders and calculates the total price.
   - State is lifted to the `App` component and passed down to child components as props.

3. **Price Mapping:**
   - A centralized `priceMap` object defines the pricing for different quantities of each product.
   - The `priceMap` is imported into relevant components to ensure consistent pricing calculations.


note: sepete ekle button is not functional
also when you clone the project dont forget to cd into the project folder BeijeTechTest
