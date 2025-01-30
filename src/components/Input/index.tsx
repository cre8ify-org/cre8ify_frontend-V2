"use client";

import React from "react";

type InputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "prefix" | "size"
> &
  Partial<{ label: string; prefix: React.ReactNode; suffix: React.ReactNode }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      style,
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      ...restProps
    },
    ref
  ) => {
    return (
      <label className={className}>
        {label && <span>{label}</span>}
        {prefix}
        <input
          className="focus:outline-none focus:ring-0 focus:border-none placeholder:text-tech_silver-0"
          style={style}
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {suffix}
      </label>
    );
  }
);

Input.displayName = "Input";

export { Input };
