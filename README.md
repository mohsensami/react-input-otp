# @mohsensami/react-pin-code

A lightweight, flexible, and customizable React hook for handling PIN code inputs with TypeScript support. Perfect for OTP (One-Time Password), verification codes, and any multi-input numeric sequences.

## ✨ Features

- 🎯 TypeScript support out of the box
- 🔄 Automatic focus management
- ⌨️ Keyboard navigation support
- 🎨 Fully customizable styling
- 📱 Mobile-friendly
- ⚡ Zero dependencies
- 🛡️ Input validation

## 📦 Installation

```bash
npm install @mohsensami/react-pin-code
# or
yarn add @mohsensami/react-pin-code
# or
pnpm add @mohsensami/react-pin-code
```

## 🚀 Quick Start

```tsx
import { usePinCode } from "@mohsensami/react-pin-code";

const MyComponent = () => {
  const { otpValues, getInputProps } = usePinCode({
    inputs: [
      { name: "otp1", length: 4 },
      { name: "otp2", length: 6 },
    ],
  });

  return (
    <div>
      {/* First OTP input group */}
      <div>
        {[...Array(4)].map((_, index) => (
          <input key={index} type="text" {...getInputProps(index)} />
        ))}
      </div>

      {/* Second OTP input group */}
      <div>
        {[...Array(6)].map((_, index) => (
          <input key={index} type="text" {...getInputProps(index + 4)} />
        ))}
      </div>

      {/* Access values */}
      <pre>{JSON.stringify(otpValues, null, 2)}</pre>
    </div>
  );
};
```

## 📖 API Reference

### usePinCode

A hook that manages multiple PIN code inputs.

#### Parameters

```typescript
interface InputConfig {
  name: string; // Unique identifier for the input group
  length: number; // Number of digits in the PIN code
}

interface UsePinCodeProps {
  inputs: InputConfig[]; // Array of input configurations
}
```

#### Returns

```typescript
{
  otpValues: Record<string, string>; // Current values of all input groups
  getInputProps: (index: number) => PinInputProps; // Function to get input props
}
```

### PinInputProps

Properties that should be spread onto your input elements.

```typescript
interface PinInputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref: (el: HTMLInputElement | null) => void;
  maxLength: number;
}
```

## 🎨 Styling Example

```tsx
const StyledPinInput = () => {
  const { getInputProps } = usePinCode({
    inputs: [{ name: "otp", length: 6 }],
  });

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          type="text"
          {...getInputProps(index)}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "20px",
            borderRadius: "8px",
            border: "2px solid #ccc",
            outline: "none",
          }}
        />
      ))}
    </div>
  );
};
```

## 🔑 Features in Detail

- **Automatic Focus Management**: When a digit is entered, focus automatically moves to the next input
- **Backspace Support**: Pressing backspace on an empty input focuses the previous input
- **Input Validation**: Only numeric values are accepted
- **Multiple Input Groups**: Support for multiple independent PIN code groups
- **TypeScript Support**: Full type safety and autocompletion

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mohsensami/react-pin-code/issues).

## 📝 License

MIT © [Mohsen Sami](https://github.com/mohsensami)
