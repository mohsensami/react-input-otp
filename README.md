# 🚗 React Input OTP

<div dir="rtl" align="right">

یک هوک React سبک و قابل سفارشی‌سازی برای مدیریت فرم‌های ورودی OTP (رمز یکبار مصرف) و پلاک‌های خودرو با مدیریت خودکار فوکوس و اعتبارسنجی.

</div>

A lightweight and customizable React hook for handling OTP (One-Time Password) input forms and **Iranian car license plates** (پلاک خودرو) with automatic focus management and validation.

---

## ✨ Features

- 🔄 **Automatic Focus Management** - Automatically moves focus to the next input field
- ⌨️ **Keyboard Navigation** - Support for backspace navigation between fields
- 🎯 **Flexible Configuration** - Support for multiple input fields with different lengths
- 🔤 **Auto Uppercase** - Automatically converts input to uppercase
- ✅ **Built-in Validation** - Automatic form completion detection
- 🎨 **Framework Agnostic** - Works with any React UI library
- 📱 **Mobile Friendly** - Optimized for mobile input experience
- 🇮🇷 **Perfect for Iranian License Plates** - Designed specifically for Iranian car plate format

---

## 📦 Installation

```bash
npm install @mohsensami/input-otp
```

```bash
yarn add @mohsensami/input-otp
```

```bash
pnpm add @mohsensami/input-otp
```

---

## 🚀 Quick Start

### Basic OTP Input

```tsx
import { useOTPForm } from "@mohsensami/input-otp";

function OTPForm() {
  const { register, watch } = useOTPForm({
    inputs: [
      { name: "otp1", length: 4 },
      { name: "otp2", length: 4 },
      { name: "otp3", length: 4 },
    ],
    handleSubmit: (fullValue) => {
      console.log("Complete OTP:", fullValue);
    },
  });

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <input {...register("otp1")} />
      <input {...register("otp2")} />
      <input {...register("otp3")} />
    </div>
  );
}
```

---

## 🇮🇷 Iranian Car License Plate Examples

<div dir="rtl" align="right">

این پکیج به طور خاص برای پلاک‌های خودرو ایرانی طراحی شده است. فرمت پلاک ایرانی: **XXبXXXایرانXX**

</div>

This package was specifically designed for **Iranian car license plates** (پلاک خودرو ایرانی). The Iranian plate format is: **XXبXXXایرانXX**

### Example 1: Standard Iranian License Plate (پلاک عادی)

```tsx
import { useOTPForm } from "@mohsensami/input-otp";

function IranianLicensePlate() {
  const { register, watch, getValues } = useOTPForm({
    inputs: [
      { name: "region", length: 2 },      // منطقه (Region) - e.g., "11" for Tehran
      { name: "letter", length: 1 },      // حرف (Letter) - e.g., "ب"
      { name: "number", length: 3 },      // شماره (Number) - e.g., "222"
      { name: "iran", length: 5 },        // "ایران" (Iran)
      { name: "serial", length: 2 },      // سریال (Serial) - e.g., "33"
    ],
    handleSubmit: (fullPlate) => {
      console.log("پلاک کامل:", fullPlate); // Complete plate: 11ب222ایران33
      console.log("Plate values:", getValues());
    },
  });

  const values = watch();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", direction: "rtl" }}>
      <input
        {...register("region")}
        placeholder="11"
        style={{
          width: "50px",
          height: "50px",
          textAlign: "center",
          fontSize: "18px",
          border: "2px solid #e1e5e9",
          borderRadius: "8px",
        }}
      />
      <span style={{ fontSize: "24px", fontWeight: "bold" }}>ب</span>
      <input
        {...register("number")}
        placeholder="222"
        style={{
          width: "70px",
          height: "50px",
          textAlign: "center",
          fontSize: "18px",
          border: "2px solid #e1e5e9",
          borderRadius: "8px",
        }}
      />
      <span style={{ fontSize: "18px", fontWeight: "bold" }}>ایران</span>
      <input
        {...register("serial")}
        placeholder="33"
        style={{
          width: "50px",
          height: "50px",
          textAlign: "center",
          fontSize: "18px",
          border: "2px solid #e1e5e9",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
```

### Example 2: Modern Styled Iranian License Plate

```tsx
import { useOTPForm } from "@mohsensami/input-otp";

function ModernIranianPlate() {
  const { register, getValues } = useOTPForm({
    inputs: [
      { name: "region", length: 2 },
      { name: "number", length: 3 },
      { name: "serial", length: 2 },
    ],
    handleSubmit: (plate) => {
      alert(`پلاک ثبت شد: ${plate}`);
    },
  });

  return (
    <div
      style={{
        padding: "32px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        color: "white",
      }}
    >
      <h3 style={{ marginBottom: "24px", textAlign: "center" }}>
        ورود پلاک خودرو
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          direction: "rtl",
        }}
      >
        <input
          {...register("region")}
          placeholder="11"
          style={{
            width: "60px",
            height: "60px",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
            border: "3px solid white",
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            color: "#333",
          }}
        />
        <span
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          ب
        </span>
        <input
          {...register("number")}
          placeholder="222"
          style={{
            width: "80px",
            height: "60px",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
            border: "3px solid white",
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            color: "#333",
          }}
        />
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          ایران
        </span>
        <input
          {...register("serial")}
          placeholder="33"
          style={{
            width: "60px",
            height: "60px",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
            border: "3px solid white",
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            color: "#333",
          }}
        />
      </div>
    </div>
  );
}
```

### Example 3: Iranian License Plate with Validation

```tsx
import { useOTPForm } from "@mohsensami/input-otp";
import { useState } from "react";

function IranianPlateWithValidation() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);

  const { register, getValues, reset } = useOTPForm({
    inputs: [
      { name: "region", length: 2 },
      { name: "number", length: 3 },
      { name: "serial", length: 2 },
    ],
    handleSubmit: (plate) => {
      // Validate Iranian plate format
      const values = getValues();
      const region = values.region;
      const number = values.number;
      const serial = values.serial;

      // Example validation: Region should be between 11-99
      if (parseInt(region) < 11 || parseInt(region) > 99) {
        setError("کد منطقه باید بین 11 تا 99 باشد");
        setSuccess(false);
        return;
      }

      // Example validation: Number should be between 111-999
      if (parseInt(number) < 111 || parseInt(number) > 999) {
        setError("شماره باید بین 111 تا 999 باشد");
        setSuccess(false);
        return;
      }

      setError("");
      setSuccess(true);
      console.log("پلاک معتبر:", plate);
    },
  });

  return (
    <div style={{ padding: "24px", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
        ثبت پلاک خودرو
      </h2>
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          direction: "rtl",
          marginBottom: "16px",
        }}
      >
        <input
          {...register("region")}
          placeholder="11"
          style={{
            width: "55px",
            height: "55px",
            textAlign: "center",
            fontSize: "20px",
            border: `2px solid ${error ? "#ef4444" : success ? "#10b981" : "#d1d5db"}`,
            borderRadius: "8px",
            outline: "none",
          }}
        />
        <span style={{ fontSize: "28px", fontWeight: "bold" }}>ب</span>
        <input
          {...register("number")}
          placeholder="222"
          style={{
            width: "75px",
            height: "55px",
            textAlign: "center",
            fontSize: "20px",
            border: `2px solid ${error ? "#ef4444" : success ? "#10b981" : "#d1d5db"}`,
            borderRadius: "8px",
            outline: "none",
          }}
        />
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>ایران</span>
        <input
          {...register("serial")}
          placeholder="33"
          style={{
            width: "55px",
            height: "55px",
            textAlign: "center",
            fontSize: "20px",
            border: `2px solid ${error ? "#ef4444" : success ? "#10b981" : "#d1d5db"}`,
            borderRadius: "8px",
            outline: "none",
          }}
        />
      </div>

      {error && (
        <div
          style={{
            padding: "12px",
            backgroundColor: "#fee2e2",
            color: "#991b1b",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          {error}
        </div>
      )}

      {success && (
        <div
          style={{
            padding: "12px",
            backgroundColor: "#d1fae5",
            color: "#065f46",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          ✓ پلاک با موفقیت ثبت شد
        </div>
      )}

      <button
        onClick={() => {
          reset();
          setError("");
          setSuccess(false);
        }}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#6b7280",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        پاک کردن
      </button>
    </div>
  );
}
```

---

## 📚 More Examples

### Standard 6-Digit OTP

```tsx
import { useOTPForm } from "@mohsensami/input-otp";

function StandardOTP() {
  const { register, watch } = useOTPForm({
    inputs: [
      { name: "digit1", length: 1 },
      { name: "digit2", length: 1 },
      { name: "digit3", length: 1 },
      { name: "digit4", length: 1 },
      { name: "digit5", length: 1 },
      { name: "digit6", length: 1 },
    ],
    handleSubmit: (otp) => {
      console.log("OTP entered:", otp);
      // Submit OTP to your backend
    },
  });

  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
      {["digit1", "digit2", "digit3", "digit4", "digit5", "digit6"].map(
        (name) => (
          <input
            key={name}
            {...register(name)}
            style={{
              width: "50px",
              height: "50px",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              border: "2px solid #e1e5e9",
              borderRadius: "8px",
              outline: "none",
              transition: "all 0.2s ease",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#007bff";
              e.target.style.boxShadow = "0 0 0 3px rgba(0, 123, 255, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e1e5e9";
              e.target.style.boxShadow = "none";
            }}
          />
        )
      )}
    </div>
  );
}
```

### Multi-Section OTP (Credit Card Style)

```tsx
import { useOTPForm } from "@mohsensami/input-otp";

function MultiSectionOTP() {
  const { register, watch, setValue, getValues } = useOTPForm({
    inputs: [
      { name: "section1", length: 4, defaultValue: "1234" },
      { name: "section2", length: 4 },
      { name: "section3", length: 4 },
    ],
    handleSubmit: (fullOTP) => {
      console.log("Complete OTP:", fullOTP);
      console.log("All values:", getValues());
    },
  });

  const currentValues = watch();

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <input
          {...register("section1")}
          placeholder="1234"
          style={{
            width: "80px",
            padding: "12px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <span>-</span>
        <input
          {...register("section2")}
          placeholder="5678"
          style={{
            width: "80px",
            padding: "12px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <span>-</span>
        <input
          {...register("section3")}
          placeholder="9012"
          style={{
            width: "80px",
            padding: "12px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        <p>Current values: {JSON.stringify(currentValues)}</p>
        <button
          onClick={() => setValue("section2", "9999")}
          style={{
            padding: "8px 16px",
            marginTop: "8px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Set Section 2 to 9999
        </button>
      </div>
    </div>
  );
}
```

### OTP with Reset Functionality

```tsx
import { useOTPForm } from "@mohsensami/input-otp";

function OTPWithReset() {
  const { register, reset } = useOTPForm({
    inputs: [
      { name: "otp1", length: 3 },
      { name: "otp2", length: 3 },
      { name: "otp3", length: 3 },
    ],
    handleSubmit: (otp) => {
      console.log("OTP submitted:", otp);
    },
  });

  const handleReset = () => {
    reset({
      otp1: "",
      otp2: "",
      otp3: "",
    });
  };

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          {...register("otp1")}
          style={{
            width: "60px",
            padding: "12px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          {...register("otp2")}
          style={{
            width: "60px",
            padding: "12px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          {...register("otp3")}
          style={{
            width: "60px",
            padding: "12px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <button
        onClick={handleReset}
        style={{
          padding: "10px 20px",
          backgroundColor: "#6b7280",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Reset Form
      </button>
    </div>
  );
}
```

---

## 📖 API Reference

### `useOTPForm(options)`

The main hook that manages OTP input state and behavior.

#### Parameters

| Parameter      | Type                          | Required | Description                         |
| -------------- | ----------------------------- | -------- | ----------------------------------- |
| `inputs`       | `InputField[]`                | ✅       | Array of input field configurations |
| `handleSubmit` | `(fullValue: string) => void` | ❌       | Callback when all fields are filled |

#### Returns

| Property   | Type                                          | Description                       |
| ---------- | --------------------------------------------- | --------------------------------- |
| `register` | `(name: string) => RegisterReturn`            | Function to register input fields |
| `watch`    | `() => Record<string, string>`                | Function to get current values    |
| `getValues`| `(name?: string) => Record<string, string> \| string` | Function to get field value(s) |
| `setValue` | `(name: string, value: string) => void`       | Function to set field value       |
| `reset`    | `(newValues?: Record<string, string>) => void` | Function to reset form values     |

### `InputField` Type

| Property       | Type     | Required | Description                           |
| -------------- | -------- | -------- | ------------------------------------- |
| `name`         | `string` | ✅       | Unique identifier for the input field |
| `length`       | `number` | ✅       | Maximum number of characters allowed  |
| `defaultValue` | `string` | ❌       | Initial value for the field           |

### `RegisterReturn` Type

| Property    | Type                                                 | Description                        |
| ----------- | ---------------------------------------------------- | ---------------------------------- |
| `name`      | `string`                                             | Field name                         |
| `ref`       | `(el: HTMLInputElement \| null) => void`             | Ref callback for the input element |
| `maxLength` | `number`                                             | Maximum length for the input       |
| `value`     | `string`                                             | Current value of the field         |
| `onChange`  | `(e: React.ChangeEvent<HTMLInputElement>) => void`   | Change event handler               |
| `onKeyDown` | `(e: React.KeyboardEvent<HTMLInputElement>) => void` | Key down event handler             |

---

## 🎨 Styling Tips

### RTL Support for Iranian Plates

<div dir="rtl" align="right">

برای پلاک‌های ایرانی، از `direction: "rtl"` استفاده کنید:

</div>

For Iranian license plates, use `direction: "rtl"`:

```tsx
<div style={{ direction: "rtl", display: "flex", gap: "8px" }}>
  {/* Your inputs */}
</div>
```

### Focus States

```tsx
<input
  {...register("field")}
  onFocus={(e) => {
    e.target.style.borderColor = "#007bff";
    e.target.style.boxShadow = "0 0 0 3px rgba(0, 123, 255, 0.1)";
  }}
  onBlur={(e) => {
    e.target.style.borderColor = "#e1e5e9";
    e.target.style.boxShadow = "none";
  }}
/>
```

---

## 🌐 Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 60+     |
| Firefox | 55+     |
| Safari  | 12+     |
| Edge    | 79+     |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📝 Changelog

### v1.1.0
- Enhanced API with `getValues` method
- Improved TypeScript types
- Better documentation

### v1.0.0
- Initial release
- Basic OTP input functionality
- Automatic focus management
- Keyboard navigation support
- **Iranian license plate support**

---

## 💡 Tips for Iranian License Plates

<div dir="rtl" align="right">

### نکات مهم برای پلاک‌های ایرانی:

1. **فرمت استاندارد**: XXبXXXایرانXX
   - دو رقم اول: کد منطقه (11-99)
   - حرف: ب، ج، د، س، ص، ط، ق، ل، م، ن، و، ه، ی
   - سه رقم: شماره (111-999)
   - کلمه "ایران"
   - دو رقم آخر: سریال (11-99)

2. **اعتبارسنجی**: همیشه کد منطقه و سریال را بررسی کنید

3. **RTL**: برای نمایش صحیح از `direction: "rtl"` استفاده کنید

</div>

### Important Tips:

1. **Standard Format**: XXبXXXایرانXX
   - First 2 digits: Region code (11-99)
   - Letter: ب، ج، د، س، ص، ط، ق، ل، م، ن، و، ه، ی
   - 3 digits: Number (111-999)
   - Word "ایران"
   - Last 2 digits: Serial (11-99)

2. **Validation**: Always validate region code and serial

3. **RTL**: Use `direction: "rtl"` for proper display

---

<div align="center">

**Made with ❤️ for Iranian developers**

ساخته شده با ❤️ برای توسعه‌دهندگان ایرانی

</div>