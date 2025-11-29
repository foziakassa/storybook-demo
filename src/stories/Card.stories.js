import React from "react";
import SportsSection from "./Card"; // Adjust path
import "../index.css";

export default {
  title: "Example/Card3",
  component: SportsSection,
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
    color: "red",
  },
};
