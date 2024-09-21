import { SVGProps } from "react";

interface CloseIconInterface extends SVGProps<SVGSVGElement> {
  fillout: string;
  fillin: string;
}

const CloseIcon: React.FC<CloseIconInterface> = (props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={10}
      cy={10}
      r={9.25}
      fill="white"
      stroke={props.fillout}
      strokeWidth={1.5}
    />
    <path d="M7 7L13.5 13.5" stroke={props.fillin} strokeLinecap="round" />
    <path d="M13.5 7L7 13.5" stroke={props.fillin} strokeLinecap="round" />
  </svg>
);
export default CloseIcon;
