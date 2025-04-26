import React from "react";
import { usePinCode } from "./lib/usePinCode";

const MyComponent: React.FC = () => {
  const { getInputProps, otpValues, setOtpValue } = usePinCode({
    inputs: [
      { name: "input1", length: 8, defaultValue: "First" },
      { name: "input2", length: 10, defaultValue: "Second" },
      { name: "input3", length: 10, defaultValue: "Third" },
    ],
  });

  return (
    <div className="App">
      {JSON.stringify(otpValues)}
      <div>
        <div>
          <input
            type="text"
            className="form-control text-center"
            dir="ltr"
            {...getInputProps(0)}
          />
        </div>

        <div>
          <span className="h3">-</span>
        </div>

        <div>
          <input
            type="text"
            className="form-control text-center"
            dir="ltr"
            {...getInputProps(1)}
          />
        </div>

        <div>
          <span className="h3">+</span>
        </div>

        <div>
          <input
            type="text"
            className="form-control text-center"
            dir="ltr"
            {...getInputProps(2)}
          />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
