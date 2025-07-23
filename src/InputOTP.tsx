import React, { useRef, useState } from "react";

interface InputOTPProps {
  fields: number;
  charsPerField: number;
  separator?: string;
}

const InputOTP: React.FC<InputOTPProps> = ({
  fields,
  charsPerField,
  separator = "-",
}) => {
  const [values, setValues] = useState<string[]>(Array(fields).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (value.length > charsPerField) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Move to next input if filled
    if (value.length === charsPerField && index < fields - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    // If last input filled completely
    if (index === fields - 1 && value.length === charsPerField) {
      console.log("Full Input:", newValues.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && values[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: fields }, (_, i) => (
        <React.Fragment key={i}>
          <input
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="text"
            maxLength={charsPerField}
            value={values[i]}
            onChange={(e) => handleChange(e.target.value.toUpperCase(), i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="w-12 h-12 text-center border border-gray-400 rounded text-lg uppercase"
          />
          {i < fields - 1 && <span className="text-xl">{separator}</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InputOTP;
