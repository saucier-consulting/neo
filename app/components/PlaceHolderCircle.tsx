import React from "react";

interface PlaceHolderCircleProps {
  size?: number; // Diameter of the circle in pixels
  color?: string; // TailwindCSS color class
  className?: string; // Additional TailwindCSS classes
}

const PlaceHolderCircle: React.FC<PlaceHolderCircleProps> = ({
  size = 50,
  color = "bg-gray-300",
  className = "",
}) => {
  return (
    <div
      className={`rounded-full ${color} ${className}`}
      style={{ width: size, height: size }}
    ></div>
  );
};

export default PlaceHolderCircle;
