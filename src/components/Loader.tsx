import React from "react";

type LoaderSize = "sm" | "md" | "lg";
type LoaderColor = "blue" | "green" | "red" | "yellow" | "purple";

interface LoaderProps {
  size?: LoaderSize;
  color?: LoaderColor;
}

const sizeClasses: Record<LoaderSize, string> = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-16 h-16",
};

const colorClasses: Record<LoaderColor, string> = {
  blue: "border-blue-500",
  green: "border-green-500",
  red: "border-red-500",
  yellow: "border-yellow-500",
  purple: "border-purple-500",
};

const Loader: React.FC<LoaderProps> = ({ size = "md", color = "blue" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`
          ${sizeClasses[size]}
          ${colorClasses[color]}
          border-4 border-t-transparent rounded-full animate-spin
        `}
      ></div>
    </div>
  );
};

export default Loader;
