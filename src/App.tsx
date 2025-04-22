import React, { useState } from "react";
import { usePinCode } from "./lib/usePinCode";
// import './App.css';

const App: React.FC = () => {
  const { getInputProps, otpValues } = usePinCode({
    inputs: [
      { name: "input1", length: 3 },
      { name: "input2", length: 1 },
      { name: "input3", length: 2 },
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

export default App;
