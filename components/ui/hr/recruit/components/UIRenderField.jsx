"use client";

import React from "react";
import {
  Input,
  Textarea,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
} from "@heroui/react";

export function renderInputField({
  labelTH,
  labelEN,
  name,
  type,
  value,
  onChange,
  error,
  required = true,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-start justify-start w-full h-full p-2 gap-2 text-sm">
        {labelTH} <br /> {labelEN}
      </div>
      <div className="flex items-center justify-center w-full h-full p-2 gap-2">
        <Input
          name={name}
          type={type}
          size="md"
          variant="underlined"
          color="primary"
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

export function renderTextAreaField({
  labelTH,
  labelEN,
  name,

  value,
  onChange,
  error,
  required = true,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-start justify-start w-full h-full p-2 gap-2 text-sm">
        {labelTH} <br /> {labelEN}
      </div>

      <div className="flex items-center justify-center w-full h-full p-2 gap-2">
        <Textarea
          name={name}
          value={value}
          onValueChange={(val) => onChange({ target: { value: val } })}
          isRequired={required}
          isInvalid={!!error}
          errorMessage={error}
          minRows={3}
          variant="underlined"
          radius="full"
          size="md"
          classNames={{
            base: "w-full",
            input: "rounded-3xl px-4 py-2",
          }}
        />
      </div>
    </div>
  );
}
export function renderSelectField({
  labelTH,
  labelEN,
  name,
  value,
  onChange,
  error,
  options = [],
}) {
  const selectedKeys = value ? new Set([value]) : new Set();

  const handleSelectionChange = (keys) => {
    const selected = Array.from(keys)[0] || "";
    onChange({ target: { value: selected } });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-start justify-start w-full h-full p-2 gap-2 text-sm">
        {labelTH} <br /> {labelEN}
      </div>

      <div className="flex items-center justify-center w-full h-full p-2 gap-2">
        <Select
          name={name}
          size="md"
          variant="underlined"
          color="primary"
          radius="full"
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelectionChange}
          isInvalid={!!error}
          errorMessage={error}
          aria-label={`เลือก ${labelTH}`}
        >
          {options.map((opt) => (
            <SelectItem
              key={opt.value}
              textValue={`${opt.labelTH}${
                opt.labelEN ? ` (${opt.labelEN})` : ""
              }`}
            >
              {opt.labelTH}
              {opt.labelEN && <> ({opt.labelEN})</>}
            </SelectItem>
          ))}
        </Select>
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
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-start justify-start w-full h-full p-2 gap-2 text-sm">
        {labelTH} <br /> {labelEN}
      </div>
      <div className="flex items-center justify-start w-full h-full p-2 gap-2">
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
