import {
  DropDownData,
  CREATED_AT,
  FILE_NAME_ASC,
  FILE_NAME_DESC,
  DropdownOptions,
  Sort,
} from "@/types";
import { useState, useMemo } from "react";

export default function DropDown({ onChange, sortValue }: DropDownData) {
  const [open, setOpen] = useState(false);

  const handleClick = (value: Sort) => {
    onChange(value);
    setOpen(false);
  };

  const dropDownLabel = useMemo(() => {
    if (sortValue === CREATED_AT) {
      return "Created At";
    } else if (sortValue === FILE_NAME_ASC) {
      return "Filename Ascending";
    } else if (sortValue === FILE_NAME_DESC) {
      return "Filename Descending";
    } else {
      return "Select Sort Order";
    }
  }, [sortValue]);

  return (
    <div className="flex items-center justify-center mb-10 border w-max rounded p-2">
      <button onClick={() => setOpen((prev) => !prev)}>{dropDownLabel}</button>
      {open && (
        <div
          className={"absolute z-100 mt-2 w-max rounded-lg bg-white text-black"}
        >
          {DropdownOptions.map((option) => (
            <button
              key={option.value}
              className={`block px-4 py-2 text-sm w-full ${
                option.value === sortValue && "bg-slate-500"
              }`}
              onClick={() => handleClick(option.value as Sort)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
