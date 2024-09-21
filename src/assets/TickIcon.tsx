import { SVGProps } from "react";

const TickIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 5 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 1L1.98404 4L0.5 2.27853"
      stroke="white"
      strokeLinecap="round"
    />
  </svg>
);
export default TickIcon;
