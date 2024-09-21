import React, { SVGProps } from "react";

const CompanyLogo: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className="w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-10 lg:h-10"
    viewBox="0 0 85 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M42.0331 13.9454L25.2969 23.8637V36.0708L42.0331 45.9891L55.4588 38.3596V41.9836L42.0331 49.9946L25.2969 39.8855V44.2725L42.0331 54L58.7693 44.2725V32.0653L45.3435 39.8855V36.0708L58.7693 28.0599V23.8637L42.0331 13.9454Z"
      fill="#0156FF"
    />
  </svg>
);

export default CompanyLogo;
