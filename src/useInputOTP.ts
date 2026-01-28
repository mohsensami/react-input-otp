import { useRef, useState } from "react";

type InputField = {
  name: string;
  length: number;
  defaultValue?: string;
};

interface UseOTPFormOptions {
  inputs: InputField[];
  handleSubmit?: (fullValue: string) => void;
}

export function useOTPForm({ inputs, handleSubmit }: UseOTPFormOptions) {
  const [values, setValuesState] = useState<Record<string, string>>(() =>
    Object.fromEntries(inputs.map((f) => [f.name, f.defaultValue ?? ""]))
  );

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const setValue = (name: string, value: string) => {
    setValuesState((prev) => ({ ...prev, [name]: value }));
  };

  const reset = (newValues: Record<string, string> = {}) => {
    setValuesState(
      Object.fromEntries(inputs.map((f) => [f.name, newValues[f.name] ?? ""]))
    );
  };

  const focusNext = (currentName: string) => {
    const index = inputs.findIndex((i) => i.name === currentName);
    if (index >= 0 && index < inputs.length - 1) {
      inputRefs.current[inputs[index + 1].name]?.focus();
    }
  };

  const focusPrev = (currentName: string) => {
    const index = inputs.findIndex((i) => i.name === currentName);
    if (index > 0) {
      inputRefs.current[inputs[index - 1].name]?.focus();
    }
  };

  const register = (name: string) => {
    const field = inputs.find((i) => i.name === name);
    if (!field) throw new Error(`Field "${name}" not found`);

    return {
      name,
      ref: (el: HTMLInputElement | null) => {
        inputRefs.current[name] = el;
      },
      maxLength: field.length,
      value: values[name] ?? "",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.toUpperCase().slice(0, field.length);

        setValuesState((prev) => {
          const next = { ...prev, [name]: val };

          const allFilled = inputs.every(
            (f) => next[f.name].length === f.length
          );

          if (allFilled) {
            const fullValue = inputs.map((f) => next[f.name]).join("");
            handleSubmit?.(fullValue);
          }

          return next;
        });

        if (val.length === field.length) {
          focusNext(name);
        }
      },
      onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && values[name] === "") {
          focusPrev(name);
        }
      },
    };
  };

  const watch = () => values;

  const getValues = (name?: string) => {
    if (!name) return values;
    return values[name];
  };

  return {
    register,
    watch,
    getValues,
    setValue,
    reset,
  };
}
