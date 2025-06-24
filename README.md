# React Input OTP

A flexible and customizable React hook for handling multiple OTP (One-Time Password) inputs with advanced features.

## Features

- 🔄 Multiple input fields support
- ⚡ Automatic focus management
- 🔢 Customizable input lengths
- 💾 Default values support
- ⌨️ Keyboard navigation (Backspace support)
- 🎯 TypeScript support

## Installation

```bash
npm install @mohsensami/pin-code
# or
yarn add @mohsensami/pin-code
```

## Usage

### Basic Example

```tsx
import React from "react";
import { usePinCode } from "@mohsensami/pin-code";

const OTPForm = () => {
  const { getInputProps, otpValues } = usePinCode({
    inputs: [
      { name: "part1", length: 4 },
      { name: "part2", length: 4 },
      { name: "part3", length: 4 },
    ],
  });

  return (
    <div className="otp-container">
      <input {...getInputProps(0)} />
      <span>-</span>
      <input {...getInputProps(1)} />
      <span>-</span>
      <input {...getInputProps(2)} />
    </div>
  );
};
```

### Advanced Example with Default Values

```tsx
import React from "react";
import { usePinCode } from "@mohsensami/pin-code";

const AdvancedOTPForm = () => {
  const { getInputProps, otpValues, setOtpValue } = usePinCode({
    inputs: [
      { name: "firstPart", length: 8, defaultValue: "First" },
      { name: "secondPart", length: 10, defaultValue: "Second" },
      { name: "thirdPart", length: 10, defaultValue: "Third" },
    ],
  });

  return (
    <div className="advanced-otp">
      <div>
        <input
          type="text"
          className="form-control text-center"
          dir="ltr"
          {...getInputProps(0)}
        />
      </div>

      <div>
        <span className="separator">-</span>
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
        <span className="separator">+</span>
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
  );
};
```

## API Reference

### usePinCode Hook

```typescript
const { getInputProps, otpValues, setOtpValue } = usePinCode({
  inputs: Array<{
    name: string;
    length: number;
    defaultValue?: string;
  }>;
});
```

#### Parameters

- `inputs`: An array of input configurations
  - `name`: Unique identifier for the input
  - `length`: Maximum length of the input
  - `defaultValue`: (Optional) Initial value for the input

#### Returns

- `getInputProps`: Function that returns input props for a specific index
- `otpValues`: Object containing current values of all inputs
- `setOtpValue`: Function to manually set value for a specific input

### Input Props

The `getInputProps` function returns an object with the following properties:

- `name`: Input name
- `value`: Current input value
- `maxLength`: Maximum allowed length
- `onChange`: Change event handler
- `onKeyDown`: Key down event handler
- `ref`: Input reference

## Styling

You can style the inputs and separators using CSS. Here's an example:

```css
.otp-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.otp-container input {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.otp-container .separator {
  font-size: 24px;
  color: #666;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
