import React, { useState } from "react";
import { FaStar, FaFire, FaAward } from "react-icons/fa";
import { IoSnowSharp } from "react-icons/io5";

type RibbonType = "new" | "featured" | "popular" | "winner";

interface RibbonProps {
  type: RibbonType;
  text: string;
  competitionName?: string;
  awardDate?: string;
}

const Ribbon: React.FC<RibbonProps> = ({
  type,
  text,
  competitionName,
  awardDate,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStyles = (type: RibbonType) => {
    switch (type) {
      case "new":
        return "bg-green-500";
      case "featured":
        return "bg-blue-500";
      case "popular":
        return "bg-red-500";
      case "winner":
        return "bg-yellow-400 text-black";
      default:
        return "bg-gray-500";
    }
  };

  const getIcon = (type: RibbonType) => {
    switch (type) {
      case "new":
        return <IoSnowSharp />;
      case "featured":
        return <FaStar />;
      case "popular":
        return <FaFire />;
      case "winner":
        return <FaAward />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute top-0 right-0 ${getStyles(
        type
      )} rounded-bl-lg text-[10px] font-semibold z-10 transition-all duration-300 ease-in-out overflow-hidden`}
      style={{
        transform: isHovered ? "scale(2)" : "scale(1.5)",
        transformOrigin: "top right",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-end p-1">
        {getIcon(type)}
        <span className="ml-1 whitespace-nowrap">{text}</span>
      </div>
      {isHovered && type === "winner" && (
        <div className="text-[8px] leading-tight px-1 pb-1">
          {competitionName && <div>{competitionName}</div>}
          {awardDate && <div>{awardDate}</div>}
        </div>
      )}
    </div>
  );
};

export default Ribbon;
