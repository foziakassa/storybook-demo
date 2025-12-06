/* eslint-disable no-undef */
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
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    // eslint-disable-next-line no-undef
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    // eslint-disable-next-line no-undef
    await expect(loginButton).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    ///fghbhdgjb

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
