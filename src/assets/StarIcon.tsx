import React from "react";

interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  fillPercentage?: number;
  filledColor?: string;
  unfilledColor?: string;
}

const StarIcon: React.FC<StarIconProps> = ({
  fillPercentage = 100,
  filledColor = "#FFD700",
  unfilledColor = "#D3D3D3",
  ...props
}) => {
  const id = `star-fill-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${fillPercentage}%`} stopColor={filledColor} />
          <stop offset={`${fillPercentage}%`} stopColor={unfilledColor} />
        </linearGradient>
      </defs>
      <path
        d="M6.75474 0.173835C6.7919 0.10127 6.8956 0.10127 6.93276 0.173834L8.77297 3.76772C8.7875 3.79609 8.81467 3.81583 8.84614 3.82088L12.8328 4.46045C12.9133 4.47337 12.9453 4.572 12.8878 4.62976L10.0385 7.49048C10.016 7.51306 10.0056 7.54501 10.0105 7.57649L10.6342 11.5657C10.6468 11.6462 10.5629 11.7072 10.4902 11.6703L6.88897 9.84443C6.86055 9.83002 6.82695 9.83002 6.79853 9.84443L3.19733 11.6703C3.12462 11.7072 3.04072 11.6462 3.05331 11.5657L3.67698 7.57649C3.68191 7.54501 3.67153 7.51306 3.64904 7.49048L0.799704 4.62976C0.742173 4.572 0.77422 4.47337 0.854715 4.46045L4.84136 3.82088C4.87283 3.81583 4.9 3.79609 4.91453 3.76772L6.75474 0.173835Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
};

export default StarIcon;
