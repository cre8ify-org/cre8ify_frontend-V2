import React from "react";
const sizes = {
  dm_sans_14: "text-[14px] font-normal",
  dm_sans_24: "text-[24px] font-normal lg:text-[20px] md:text-[22px]",
  textxs: "text-[20px] font-normal lg:text-[17px]",
  textmd:
    "text-[32px] font-normal lg:text-[27px] md:text-[30px] sm:text-[28px]",
};
export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "dm_sans_24",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-tech_silver-0 font-dmsans ${className} ${
        sizes[size as keyof typeof sizes]
      } `}
      {...restProps}
    >
      {" "}
      {children}{" "}
    </Component>
  );
};
export { Text };
