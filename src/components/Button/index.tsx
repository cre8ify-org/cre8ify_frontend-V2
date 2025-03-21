import React from "react";
type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  return (
    <button className={`${className} `} {...restProps}>
      {" "}
      {!!leftIcon && leftIcon} {children} {!!rightIcon && rightIcon}{" "}
    </button>
  );
};
export { Button };
