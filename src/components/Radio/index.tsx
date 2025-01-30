"use client";
import React from "react";

const variants = { primary: "checked:border-2" };
const sizes = { xs: "text-2xl" };

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "radio_id",
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    return (
      <label className={className}>
        <input
          className={`${sizes[size]} ${variants[variant]}`}
          ref={ref}
          type="radio"
          name={name}
          id={id}
          {...restProps}
        />
        <span>{label}</span>
      </label>
    );
  }
);

Radio.displayName = "Radio";

export { Radio };
