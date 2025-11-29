import React from "react";
import PropTypes from "prop-types";

const Card = ({
  imageSrc,
  title,
  description,
  buttonText = "Shop",
  color = "#3e9d26",
  variant = "classic",
}) => {
  const colorClass = `bg-[${color}]`;
  const hoverColorClass = `hover:bg-[color-mix(in,srgb,${color}_80%)]`;

  const renderVariant = () => {
    switch (variant) {
      case "compact":
        return (
          <div className="group h-64 w-48 overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <img
              className="h-2/3 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              src={imageSrc}
              alt={title}
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                {title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                {description}
              </p>
              <button
                className={`w-full rounded-lg py-2 text-xs font-bold text-white ${colorClass} ${hoverColorClass} hover:scale-105 transition-all`}
              >
                {buttonText}
              </button>
            </div>
          </div>
        );

      case "horizontal":
        return (
          <div className="group flex h-32 max-w-md overflow-hidden rounded-2xl bg-gradient-to-r from-white to-blue-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-x-1 border border-blue-100 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
            <img
              className="h-full w-24 flex-shrink-0 rounded-xl object-cover mr-4 group-hover:scale-105 transition-transform"
              src={imageSrc}
              alt={title}
            />
            <div className="flex-1 py-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {description}
              </p>
              <button
                className={`inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-bold text-white ${colorClass} ${hoverColorClass} shadow-sm hover:shadow-md transition-all`}
              >
                {buttonText} →
              </button>
            </div>
          </div>
        );

      case "glass":
        return (
          <div className="group relative h-72 w-72 overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50 dark:bg-gray-800/80 transition-all duration-500 hover:shadow-3xl hover:scale-105">
            <img
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              src={imageSrc}
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="relative p-8 text-white">
              <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
                {title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 opacity-90 line-clamp-3 drop-shadow-md">
                {description}
              </p>
              <button
                className={`rounded-full px-8 py-3 text-base font-bold shadow-2xl ${colorClass} hover:scale-110 transition-all duration-300`}
              >
                {buttonText}
              </button>
            </div>
          </div>
        );

      case "minimal":
        return (
          <div className="group max-w-sm p-8 space-y-6 transition-all duration-300 hover:-translate-y-2 border border-gray-200 rounded-2xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 dark:border-gray-700 hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <img
                className="h-16 w-16 rounded-2xl object-cover ring-4 ring-white/50 shadow-lg"
                src={imageSrc}
                alt={title}
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
            <button
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-bold border-2 ${colorClass.replace(
                "bg",
                "border"
              )} text-${color.replace(
                "#",
                ""
              )} hover:bg-[${color}] hover:text-white transition-all shadow-sm hover:shadow-md`}
            >
              {buttonText} →
            </button>
          </div>
        );

      default: // "classic"
        return (
          <div className="group relative max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
            <div className="mb-6">
              <img
                className="h-48 w-full rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                src={imageSrc}
                alt={title}
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-['Roboto'] text-gray-900 dark:text-white line-clamp-2">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 max-h-16 overflow-hidden">
                {description}
              </p>
              <button
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-['Roboto'] text-white ${colorClass} ${hoverColorClass} shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-500/20`}
              >
                <span>{buttonText}</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
    }
  };

  return renderVariant();
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf([
    "classic",
    "compact",
    "horizontal",
    "glass",
    "minimal",
  ]),
};

Card.defaultProps = {
  buttonText: "Shop",
  color: "#3e9d26",
  variant: "classic",
};

export default Card;
