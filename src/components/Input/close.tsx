import type React from "react";

type CloseSVGProps = React.SVGProps<SVGSVGElement> &
  Partial<{ fillColor: string; className: string }>;

const CloseSVG: React.FC<CloseSVGProps> = ({
  fillColor = "#000000",
  className = "",
  ...props
}) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      height={props?.width || 20}
      width={props?.height || 20}
      viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
    >
      <path d="M4.707 3.293L3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414l7.293 7.293 1.414-1.414L13.414 12l7.293-7.293-1.414-1.414L12 10.586 4.707 3.293z" />
    </svg>
  );
};

export { CloseSVG };
