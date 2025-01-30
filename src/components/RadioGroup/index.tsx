"use client";
import React, { type HTMLAttributes } from "react";
import { Radio } from "../Radio";

type RadioGroupProps = Omit<HTMLAttributes<HTMLInputElement>, "onChange"> &
  Partial<{
    selectedValue: string;
    orientation: string;
    name: string;
    disabled: boolean;
    onChange: (
      value: string,
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
  }>;

const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  (
    {
      selectedValue,
      orientation = "horizontal",
      className,
      name,
      children,
      onChange,
      disabled,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(selectedValue);

    React.useEffect(() => {
      setValue(selectedValue);
    }, [selectedValue]);

    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      val: string,
      isDisabled: boolean
    ) => {
      if (isDisabled) return;
      setValue(val);
      onChange?.(val, event);
    };

    const compChildren = React.Children.map(children, (child: any) => {
      if (child?.type === Radio) {
        return React.cloneElement(child, {
          value: child.props.value,
          name,
          checked: child.props.value === value,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, child.props.value, child.props.disabled),
          orientation,
          disabled: child.props.disabled,
        });
      }
      return child;
    });

    return <div className={className}>{compChildren}</div>;
  }
);

RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
