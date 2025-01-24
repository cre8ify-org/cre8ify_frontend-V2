import React from "react";
const sizes = {
  dm_sans_16: "text-[16px] font-medium lg:text-[13px]",
  dm_sans_32:
    "text-[32px] font-medium lg:text-[27px] md:text-[30px] sm:text-[28px]",
  texts: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  headingxs: "text-[20px] font-bold lg:text-[17px]",
  headings: "text-[24px] font-bold lg:text-[20px] md:text-[22px]",
  headingmd:
    "text-[32px] font-bold lg:text-[27px] md:text-[30px] sm:text-[28px]",
};
export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-white font-dmsans ${className} ${
        sizes[size] as keyof typeof sizes
      }`}
      {...restProps}
    >
      {" "}
      {children}{" "}
    </Component>
  );
};
export { Heading };
