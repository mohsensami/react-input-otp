import React, { useEffect, useState } from "react";
import InputOTP from "@mohsensami/input-otp";

const App = () => {
  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <InputOTP fields={4} charsPerField={2} separator="|" />
    </div>
  );
};

export default App;
