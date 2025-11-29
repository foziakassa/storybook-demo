import React from "react";
import PropTypes from "prop-types";

const Card = ({
  imageSrc,
  title,
  description,
  buttonText = "Shop",
  color = "#3e9d26", // Keep hex default
}) => {
  // Map color strings to Tailwind classes, fallback to inline style
  const getButtonColorClass = () => {
    switch (color) {
      case "green":
        return "text-[#3e9d26]";
      case "blue":
        return "text-blue-600";
      case "red":
        return "text-red-600";
      case "white":
        return "text-white";
      default:
        return ""; // Use inline style for hex/custom colors
    }
  };
  return (
    <div>
      <img className="mb-7 rounded-xl" src={imageSrc} alt={title} />
      <div>
        <h3 className="text-[#0A2025] dark:text-white text-2xl font-bold font-['Roboto']">
          {title}
        </h3>
        <p className="mt-5 mb-8 text-[#0A2025] dark:text-white text-sm font-normal font-['Roboto']">
          {description}
        </p>
        <button
          style={getButtonColorClass() ? {} : { color }} // Inline fallback
          className={`
            text-sm font-semibold font-['Roboto']
            ${getButtonColorClass()}
          `}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textcolor: PropTypes.string,
  buttonText: PropTypes.string,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(["green", "blue", "red"]),
    PropTypes.string, // For hex colors
  ]),
};

Card.defaultProps = {
  buttonText: "Shop",
  color: "#3e9d26",
};

export default Card;
