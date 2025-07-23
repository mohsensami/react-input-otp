import React, { useEffect, useState } from "react";
import InputOTP from "@mohsensami/input-otp";

const App = () => {
  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <div className="p-4">
        <h2 className="mb-4 text-xl">پلاک خودرو</h2>
        <InputOTP
          fields={[
            { type: "input", length: 2 }, // 12
            { type: "static", value: "ب" }, // ب
            { type: "input", length: 3 }, // 345
            { type: "static", value: "ایران" }, // ایران
          ]}
          onComplete={(val) => console.log("پلاک کامل:", val)}
        />
      </div>
    </div>
  );
};

export default App;
