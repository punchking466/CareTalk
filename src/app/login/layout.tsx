// app/login/layout.tsx
import MswProvider from "@/components/MswProvider";
import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <MswProvider />
        {children}
      </div>
    </div>
  );
}
