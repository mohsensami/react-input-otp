import { useOTPForm } from "@mohsensami/input-otp";
import { useEffect } from "react";

export default function PlateFormExample() {
  const { register, watch, setValue } = useOTPForm({
    inputs: [
      { name: "part1", length: 2, defaultValue: "12" },
      { name: "part2", length: 3, defaultValue: "345" },
      { name: "part3", length: 2, defaultValue: "89" },
    ],
    handleSubmit: (val) => {
      console.log("پلاک کامل:", val);
    },
  });
  const values = watch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setValue("part1", String(data.id));
      });
    console.log("values", values);
  }, []);

  return (
    <div className="flex items-center gap-2 rtl">
      <input {...register("part1")} className="w-14 text-center border p-2" />
      <span className="text-lg font-bold">ب</span>
      <input {...register("part2")} className="w-16 text-center border p-2" />
      <span className="text-lg font-bold">ایران</span>
      <input {...register("part3")} className="w-14 text-center border p-2" />
    </div>
  );
}
