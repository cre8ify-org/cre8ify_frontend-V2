import type React from "react";

// const sizes = {
//   dm_sans_16: "text-base font-medium lg:text-sm",
//   dm_sans_32: "text-3xl font-medium lg:text-2xl md:text-3xl sm:text-2xl",
//   texts: "text-2xl font-medium lg:text-xl md:text-2xl",
//   headingxs: "text-xl font-bold lg:text-lg",
//   headings: "text-2xl font-bold lg:text-xl md:text-2xl",
//   headingmd: "text-3xl font-bold lg:text-2xl md:text-3xl sm:text-2xl",
// };

export type HeadingProps = Partial<{
  className: string;
  as: keyof JSX.IntrinsicElements;
  // size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  // size = "headingmd",
  as: Component = "h6" as React.ElementType,
  ...restProps
}) => {
  return (
    <Component className={`${className}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
