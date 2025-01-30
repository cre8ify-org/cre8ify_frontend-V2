"use client";
import React from "react";
import Select, { type Props } from "react-select";

type selectOptionType = { value: string; label: React.ReactNode };

type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      ...restProps
    },
    ref
  ) => {
    const [menuPortalTarget, setMenuPortalTarget] =
      React.useState<HTMLElement | null>(null);

    React.useEffect(() => {
      setMenuPortalTarget(document.body);
    }, []);

    return (
      <Select
        ref={ref}
        options={options}
        className={className}
        isSearchable={isSearchable}
        isMulti={isMulti}
        components={{
          IndicatorSeparator: () => null,
          ...(indicator && { DropdownIndicator: () => indicator }),
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "transparent",
            border: "0 !important",
            boxShadow: "none !important",
            minHeight: "auto",
          }),
          menu: (base) => ({
            ...base,
            zIndex: 999999,
          }),
        }}
        menuPortalTarget={menuPortalTarget}
        closeMenuOnScroll={(event: any) =>
          event.target.id === "scrollContainer"
        }
        {...restProps}
      />
    );
  }
);

SelectBox.displayName = "SelectBox";

export { SelectBox };
