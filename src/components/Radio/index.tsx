"use client";
import React from "react";
const variants = { primary: " checked:border-2 " } as const;
const sizes = { xs: "text-[24px]" } as const;
export type RadioProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
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
      <label className={className + " undefined"}>
        {" "}
        <input
          className={` ${(size && sizes[size]) || ""} ${
            (variant && variants[variant]) || ""
          }`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />{" "}
        <span>{label}</span>{" "}
      </label>
    );
  }
);
export { Radio };
