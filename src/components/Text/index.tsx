import type React from "react";

// const sizes = {
//   dm_sans_14: "text-sm",
//   dm_sans_24: "text-2xl lg:text-base md:text-2xl",
//   textxs: "text-xl lg:text-lg",
//   textmd: "text-3xl lg:text-2xl md:text-3xl sm:text-2xl",
// };

export type TextProps = Partial<{
  className: string;
  as: React.ElementType;
}> &
  React.HTMLAttributes<HTMLElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as: Component = "p",
  ...restProps
}) => {
  return (
    <Component className={`font-dmsans ${className}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
