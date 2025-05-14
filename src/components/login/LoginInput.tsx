import React from "react";

interface LoginInputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  errorMessage?: string;
}

const LoginInput = ({
  type,
  value,
  placeholder,
  onChange,
  minLength,
  errorMessage,
}: LoginInputProps) => {
  return (
    <div className="flex w-full flex-col">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        minLength={minLength}
        className="peer custom-input"
      />
      {errorMessage && (
        <p className="invisible mb-1 text-[12px] text-pink-600 peer-invalid:visible">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default LoginInput;
