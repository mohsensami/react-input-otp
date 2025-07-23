import React, { useRef, useState } from "react";

type PlateField =
  | { type: "input"; length: number }
  | { type: "static"; value: string };

interface PlateInputProps {
  fields: PlateField[];
  onComplete?: (value: string) => void;
}

const PlateInput: React.FC<PlateInputProps> = ({ fields, onComplete }) => {
  const inputIndexes = fields
    .map((field, idx) => (field.type === "input" ? idx : null))
    .filter((i): i is number => i !== null);

  const [values, setValues] = useState<string[]>(inputIndexes.map(() => ""));

  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const focusNext = (currentIdx: number) => {
    const nextIdx = currentIdx + 1;
    if (nextIdx < refs.current.length) {
      refs.current[nextIdx]?.focus();
    }
  };

  const handleChange = (val: string, idx: number) => {
    const maxLength = (fields[inputIndexes[idx]] as any).length;
    if (val.length > maxLength) return;

    const newValues = [...values];
    newValues[idx] = val;
    setValues(newValues);

    if (val.length === maxLength) {
      if (idx === values.length - 1) {
        // آخرین فیلد پر شد
        onComplete?.(newValues.join(""));
      } else {
        focusNext(idx);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Backspace" && values[idx] === "" && idx > 0) {
      refs.current[idx - 1]?.focus();
    }
  };

  let inputCounter = 0;

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

        const inputIdx = inputCounter++;
        return (
          <input
            key={i}
            ref={(el) => {
              refs.current[inputIdx] = el;
            }}
            type="text"
            maxLength={field.length}
            value={values[inputIdx]}
            onChange={(e) =>
              handleChange(e.target.value.toUpperCase(), inputIdx)
            }
            onKeyDown={(e) => handleKeyDown(e, inputIdx)}
            className="w-14 h-12 text-center border border-gray-400 rounded text-lg uppercase"
          />
        );
      })}
    </div>
  );
};

export default PlateInput;
