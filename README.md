# React Input OTP

A lightweight and customizable React hook for handling OTP (One-Time Password) input forms with automatic focus management and validation.

## Features

- 🔄 **Automatic Focus Management** - Automatically moves focus to the next input field
- ⌨️ **Keyboard Navigation** - Support for backspace navigation between fields
- 🎯 **Flexible Configuration** - Support for multiple input fields with different lengths
- 🔤 **Auto Uppercase** - Automatically converts input to uppercase
- ✅ **Built-in Validation** - Automatic form completion detection
- 🎨 **Framework Agnostic** - Works with any React UI library
- 📱 **Mobile Friendly** - Optimized for mobile input experience

## Installation

```bash
npm install @mohsensami/input-otp
```

## Quick Start

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
    <div>
      <input {...register("otp1")} />
      <input {...register("otp2")} />
      <input {...register("otp3")} />
    </div>
  );
}
```

## API Reference

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
| `setValue` | `(name: string, value: string) => void`       | Function to set field value       |
| `reset`    | `(newValues: Record<string, string>) => void` | Function to reset form values     |

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

## Examples

### Basic OTP Input

```tsx
import { useOTPForm } from "@mohsensami/input-otp";

function BasicOTP() {
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
    },
  });

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {["digit1", "digit2", "digit3", "digit4", "digit5", "digit6"].map(
        (name) => (
          <input
            key={name}
            {...register(name)}
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "18px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        )
      )}
    </div>
  );
}
```

### Multiple OTP Sections

```tsx
import { useOTPForm } from "@mohsensami/input-otp";

function MultiSectionOTP() {
  const { register, watch, setValue } = useOTPForm({
    inputs: [
      { name: "section1", length: 4, defaultValue: "1234" },
      { name: "section2", length: 4 },
      { name: "section3", length: 4 },
    ],
    handleSubmit: (fullOTP) => {
      console.log("Complete OTP:", fullOTP);
    },
  });

  const currentValues = watch();

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input {...register("section1")} placeholder="1234" />
        <span>-</span>
        <input {...register("section2")} placeholder="5678" />
        <span>-</span>
        <input {...register("section3")} placeholder="9012" />
      </div>

      <div>
        <p>Current values: {JSON.stringify(currentValues)}</p>
        <button onClick={() => setValue("section2", "9999")}>
          Set Section 2 to 9999
        </button>
      </div>
    </div>
  );
}
```

### With Form Reset

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
    <div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input {...register("otp1")} />
        <input {...register("otp2")} />
        <input {...register("otp3")} />
      </div>
      <button onClick={handleReset}>Reset Form</button>
    </div>
  );
}
```

## Styling Examples

### Modern Card Style

```tsx
function ModernOTP() {
  const { register } = useOTPForm({
    inputs: [
      { name: "d1", length: 1 },
      { name: "d2", length: 1 },
      { name: "d3", length: 1 },
      { name: "d4", length: 1 },
    ],
  });

  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      <h3>Enter Verification Code</h3>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        {["d1", "d2", "d3", "d4"].map((name) => (
          <input
            key={name}
            {...register(name)}
            style={{
              width: "50px",
              height: "50px",
              textAlign: "center",
              fontSize: "20px",
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
        ))}
      </div>
    </div>
  );
}
```

## Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 60+     |
| Firefox | 55+     |
| Safari  | 12+     |
| Edge    | 79+     |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### v1.0.0

- Initial release
- Basic OTP input functionality
- Automatic focus management
- Keyboard navigation support
