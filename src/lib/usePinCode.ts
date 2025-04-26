import { useRef, useState } from "react";

interface InputConfig {
  name: string;
  length: number;
  defaultValue?: string;
}

interface UsePinCodeProps {
  inputs: InputConfig[];
}

interface PinInputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref: (el: HTMLInputElement | null) => void;
  maxLength: number;
}

export const usePinCode = ({ inputs }: UsePinCodeProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [otpValues, setOtpValues] = useState<Record<string, string>>(() =>
    inputs.reduce((acc, input) => {
      acc[input.name] = input.defaultValue ?? ""; // Use defaultValue if present
      return acc;
    }, {} as Record<string, string>)
  );

  const getInputProps = (index: number): PinInputProps => {
    const { name, length } = inputs[index];

    return {
      name,
      value: otpValues[name],
      maxLength: length,
      ref: (el: HTMLInputElement | null) => {
        inputRefs.current[index] = el;
      },
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        // if (!/^[0-9]*$/.test(val)) return;

        const trimmed = val.slice(0, length);
        setOtpValues((prev) => ({
          ...prev,
          [name]: trimmed,
        }));

        if (trimmed.length === length && index < inputs.length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
      },
      onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
          if (otpValues[name] === "" && index > 0) {
            inputRefs.current[index - 1]?.focus();
          }
        }
      },
    };
  };

  const setOtpValue = (name: string, value: string) => {
    setOtpValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    otpValues,
    getInputProps,
    setOtpValue,
  };
};
