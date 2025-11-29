import React from "react";
import Card from "./Card2"; // Adjust path
import "../index.css";

export default {
  title: "Example/Card2",
  component: Card,
  tags: ["autodocs"], // Auto-generates docs
  argTypes: {
    color: {
      control: "select",
      options: ["green", "blue", "red", "#3e9d26", "#ff6b6b"],
    },
  },
};
export const Default = {
  args: {
    imageSrc: "/images/sample-image.jpg", // Provide a valid image path
    title: "Sample Card Title nnn",
    description: "This is a sample description for the card component.",
    buttonText: "Learn More",
    color: "green",
    textcolor: "black",
  },
};
export const BlueCard = {
  args: {
    imageSrc: "https://iili.io/33etOiX.png", // Provide a different image path
    title: "Blue Themed Card",
    description: "This card uses a blue theme for its button.",
    buttonText: "Discover",
    color: "blue",
    textcolor: "yelloe",
  },
};
