import React from "react";
import { usePinCode } from "./lib/usePinCode";

const MyComponent: React.FC = () => {
  const { getInputProps, otpValues } = usePinCode({
    inputs: [
      { name: "otp1", length: 3 },
      { name: "otp2", length: 2 },
      { name: "otp3", length: 3 },
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
