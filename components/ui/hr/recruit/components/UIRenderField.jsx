"use client";

import React from "react";
import { Input, RadioGroup, Radio } from "@heroui/react";

export function renderInputField({
  labelTH,
  labelEN,
  name,
  type = "text",
  placeholder = "xxx xxx",
  value,
  onChange,
  error,
  required = true,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-primary">
      <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
        {labelTH} <br /> {labelEN}
      </div>
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          size="md"
          variant="underlined"
          color="none"
          radius="full"
          required={required}
          value={value}
          onChange={onChange}
          isInvalid={!!error}
          errorMessage={error}
        />
      </div>
    </div>
  );
}

export function renderRadioGroupField({
  labelTH,
  labelEN,
  name,
  value,
  onChange,
  error,
  options = [],
  orientation = "horizontal",
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 border-4 border-primary">
      <div className="flex items-start justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[600]">
        {labelTH} <br /> {labelEN}
      </div>
      <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
        <RadioGroup
          name={name}
          size="md"
          variant="underlined"
          color="primary"
          radius="full"
          orientation={orientation}
          value={value}
          onValueChange={(val) => onChange({ target: { value: val } })}
          isInvalid={!!error}
          errorMessage={error}
        >
          {options.map((opt) => (
            <Radio key={opt.value} value={opt.value}>
              {opt.labelTH}
              {opt.labelEN && <>({opt.labelEN})</>}
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
