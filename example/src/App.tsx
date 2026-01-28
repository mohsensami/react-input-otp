import { useOTPForm } from "@mohsensami/input-otp";

export default function PlateFormExample() {
  const { register, watch, setValue, getValues } = useOTPForm({
    inputs: [
      { name: "part1", length: 2, defaultValue: "11" },
      { name: "part2", length: 3, defaultValue: "222" },
      { name: "part3", length: 2, defaultValue: "33" },
    ],
    handleSubmit: (val) => {
      console.log("پلاک کامل:", val);
    },
  });

  return (
    <div className="flex items-center gap-2 rtl">
      {JSON.stringify(getValues())}
      <hr />
      <input {...register("part1")} className="w-14 text-center border p-2" />
      <span className="text-lg font-bold">ب</span>
      <input {...register("part2")} className="w-16 text-center border p-2" />
      <span className="text-lg font-bold">ایران</span>
      <input {...register("part3")} className="w-14 text-center border p-2" />
    </div>
  );
}
