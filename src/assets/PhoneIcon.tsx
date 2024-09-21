import { SVGProps } from "react";

const PhoneIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 5 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.17669 3.85626L3.52669 3.50626C3.57383 3.4597 3.63347 3.42783 3.69838 3.41452C3.76328 3.4012 3.83065 3.40702 3.89231 3.43126L4.31888 3.60157C4.38119 3.62686 4.43462 3.67004 4.47244 3.72565C4.51025 3.78126 4.53076 3.84682 4.53138 3.91407V4.69532C4.53101 4.74107 4.5214 4.78627 4.50311 4.8282C4.48481 4.87013 4.45823 4.90793 4.42494 4.93931C4.39166 4.9707 4.35237 4.99502 4.30944 5.01083C4.2665 5.02663 4.22082 5.03358 4.17513 5.03126C1.18607 4.84532 0.58294 2.31407 0.468878 1.34532C0.463583 1.29775 0.468421 1.24959 0.483073 1.20402C0.497725 1.15846 0.521859 1.11651 0.553888 1.08093C0.585917 1.04536 0.625115 1.01698 0.668902 0.997641C0.71269 0.978307 0.760075 0.968463 0.80794 0.968756H1.56263C1.62997 0.968956 1.69572 0.989298 1.75141 1.02717C1.8071 1.06504 1.85018 1.1187 1.87513 1.18126L2.04544 1.60782C2.07048 1.66924 2.07687 1.73667 2.06381 1.8017C2.05075 1.86672 2.01882 1.92646 1.972 1.97344L1.622 2.32344C1.622 2.32344 1.82356 3.68751 3.17669 3.85626Z"
      fill="white"
    />
  </svg>
);
export default PhoneIcon;
