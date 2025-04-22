import React, { useState } from "react";
import { usePinCode } from "./lib/hooks/usePinCode";
// import './App.css';

const App: React.FC = () => {
  const { getInputProps, otpValues } = usePinCode({
    inputs: [
      { name: "input1", length: 3 },
      { name: "input2", length: 1 },
      { name: "input3", length: 2 },
    ],
  });

  return <div className="App"></div>;
};

export default App;
