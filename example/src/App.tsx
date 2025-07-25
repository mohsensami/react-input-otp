import { useInputOTP } from "@mohsensami/input-otp";
import { useEffect } from "react";

export default function PlateFormExample() {
  const { getInputProps, otpValues, setValues } = useInputOTP({
    inputs: [
      { name: "part1", length: 2, defaultValue: "12" },
      { name: "part2", length: 3, defaultValue: "345" },
      { name: "part3", length: 2, defaultValue: "89" },
    ],
    onComplete: (val) => {
      console.log("پلاک کامل:", val);
    },
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setValues("part1", String(data.id + 10));
      });
  }, []);

  return (
    <div className="flex items-center gap-2 rtl">
      <input
        {...getInputProps("part1")}
        className="w-14 text-center border p-2"
      />
      <span className="text-lg font-bold">ب</span>
      <input
        {...getInputProps("part2")}
        className="w-16 text-center border p-2"
      />
      <span className="text-lg font-bold">ایران</span>
      <input
        {...getInputProps("part3")}
        className="w-14 text-center border p-2"
      />
    </div>
  );
}
