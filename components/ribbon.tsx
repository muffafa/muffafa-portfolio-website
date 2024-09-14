import React from "react";

type RibbonType = "new" | "featured" | "popular";

interface RibbonProps {
  type: RibbonType;
  text: string;
}

const Ribbon: React.FC<RibbonProps> = ({ type, text }) => {
  const getStyles = (type: RibbonType) => {
    switch (type) {
      case "new":
        return "bg-green-500";
      case "featured":
        return "bg-blue-500";
      case "popular":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`absolute top-0 right-0 ${getStyles(
        type
      )} text-white px-3 py-1 rounded-bl-lg text-sm font-semibold z-10`}
    >
      {text}
    </div>
  );
};

export default Ribbon;
