import React, { ChangeEventHandler } from "react";

interface Props {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  error: string | undefined;
  placeHolder: string;
  type: string;
  label: string;
  name: string;
}
export default function Input({
  value,
  handleChange,
  placeHolder,
  error,
  type,
  name,
  label,
}: Props) {
  return (
    <div className="pt-6">
      <label htmlFor={name} className="">
        <span className="text-mainGreen-100 px-4 capitalize">{label}</span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeHolder}
          className={`input ${
            error
              ? "border border-mainRed-200 placeholder:text-mainRed-200"
              : "border-none placeholder:text-mainGreen-100"
          }`}
        />
        {error && <p className="text-mainRed-200 text-sm">{error}</p>}
      </label>
    </div>
  );
}
