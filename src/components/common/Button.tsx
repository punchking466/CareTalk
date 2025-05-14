import React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg" | "full";
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

const sizeClasses = {
  sm: "px-2 py-2 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-2 text-lg",
  full: "px-2 py-2 w-full text-xl",
};

const variantClasses = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-200 text-black",
  danger: "bg-red-500 text-white",
};

const Button = ({
  label,
  type = "button",
  size = "md",
  variant = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {label}
    </button>
  );
};

export default Button;
