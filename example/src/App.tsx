import React, { useEffect, useState } from "react";
import InputOTP from "@mohsensami/input-otp";

const fields = [
  { type: "input", name: "part1", length: 2, defaultValue: "12" },
  { type: "static", value: "ب" },
  { type: "input", name: "part2", length: 3, defaultValue: "345" },
  { type: "static", value: "ایران" },
  { type: "input", name: "part3", length: 2, defaultValue: "64" },
];
const App = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    part1: "21",
    part2: "457",
    part3: "64",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("اطلاعات ارسال شده:", formData);
  };
  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <div className="p-4">
        <h2 className="mb-4 text-xl">پلاک خودرو</h2>
        <InputOTP
          fields={fields}
          controlValues={formData}
          onChange={handleChange}
          // onComplete={(val) => console.log("کد کامل پلاک:", val)}
        />
      </div>
    </div>
  );
};

export default App;
