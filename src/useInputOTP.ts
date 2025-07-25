import { useRef, useState } from "react";

type InputField = {
  name: string;
  length: number;
  defaultValue?: string;
};

interface UseInputOTPOptions {
  inputs: InputField[];
  onComplete?: (fullValue: string) => void;
}

export function useInputOTP({ inputs, onComplete }: UseInputOTPOptions) {
  const [otpValues, setOtpValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(inputs.map((f) => [f.name, f.defaultValue ?? ""]))
  );

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const setValues = (
    valuesOrName: Record<string, string> | string,
    value?: string
  ) => {
    if (typeof valuesOrName === "string" && value !== undefined) {
      setOtpValues((prev) => ({ ...prev, [valuesOrName]: value }));
    } else if (typeof valuesOrName === "object") {
      setOtpValues((prev) => ({ ...prev, ...valuesOrName }));
    }
  };

  const focusNext = (currentName: string) => {
    const index = inputs.findIndex((i) => i.name === currentName);
    if (index >= 0 && index < inputs.length - 1) {
      const next = inputs[index + 1].name;
      inputRefs.current[next]?.focus();
    }
  };

  const getInputProps = (name: string) => {
    const field = inputs.find((i) => i.name === name);
    if (!field) throw new Error(`Input "${name}" not found`);

    return {
      name,
      ref: (el: HTMLInputElement | null) => {
        inputRefs.current[name] = el;
      },
      maxLength: field.length,
      value: otpValues[name] || "",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.toUpperCase().slice(0, field.length);

        setOtpValues((prev) => {
          const newState = { ...prev, [name]: val };

          const allFilled = inputs.every(
            (f) => newState[f.name].length === f.length
          );

          if (allFilled) {
            const full = inputs.map((f) => newState[f.name]).join("");
            onComplete?.(full);
          }

          return newState;
        });

        if (val.length === field.length) {
          focusNext(name);
        }
      },
      onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && otpValues[name] === "") {
          const index = inputs.findIndex((f) => f.name === name);
          if (index > 0) {
            const prevName = inputs[index - 1].name;
            inputRefs.current[prevName]?.focus();
          }
        }
      },
    };
  };

  return {
    getInputProps,
    otpValues,
    setValues,
  };
}
