import React, { useRef } from "react";

type PlateField =
  | {
      type: "input";
      name: string;
      length: number;
      defaultValue?: string;
    }
  | {
      type: "static";
      value: string;
    };

interface PlateInputProps {
  fields: PlateField[];
  register?: (name: string) => any; // react-hook-form register
  onComplete?: (value: string) => void;
  controlValues?: Record<string, string>; // for controlled input values from RHF
  onChange?: (name: string, value: string) => void;
}

const PlateInput: React.FC<PlateInputProps> = ({
  fields,
  register,
  onComplete,
  controlValues,
  onChange,
}) => {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const inputFields = fields.filter((f) => f.type === "input") as Extract<
    PlateField,
    { type: "input" }
  >[];

  const focusNext = (index: number) => {
    if (index + 1 < refs.current.length) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: Extract<PlateField, { type: "input" }>,
    index: number
  ) => {
    const val = e.target.value.toUpperCase().slice(0, field.length);
    onChange?.(field.name, val);

    if (val.length === field.length) {
      if (index === inputFields.length - 1) {
        const final = inputFields
          .map((f) => controlValues?.[f.name] ?? f.defaultValue ?? "")
          .join("");
        onComplete?.(final);
      } else {
        focusNext(index);
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const field = inputFields[index];
    const val = controlValues?.[field.name] ?? field.defaultValue ?? "";
    if (e.key === "Backspace" && val === "" && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  let inputIndex = 0;

  return (
    <div className="flex items-center gap-2 rtl">
      {fields.map((field, i) => {
        if (field.type === "static") {
          return (
            <span key={i} className="text-lg font-bold">
              {field.value}
            </span>
          );
        }

        const value = controlValues?.[field.name] ?? field.defaultValue ?? "";

        const currentInputIndex = inputIndex++;

        return (
          <input
            key={i}
            ref={(el) => {
              refs.current[currentInputIndex] = el;
            }}
            type="text"
            maxLength={field.length}
            {...(register ? register(field.name) : {})}
            value={value}
            onChange={(e) => handleChange(e, field, currentInputIndex)}
            onKeyDown={(e) => handleKeyDown(e, currentInputIndex)}
            className="w-14 h-12 text-center border border-gray-400 rounded text-lg uppercase"
          />
        );
      })}
    </div>
  );
};

export default PlateInput;
