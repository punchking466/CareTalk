"use client";

import { useState } from "react";
import { submitLogin } from "../server/submitLogin";
import Button from "@/components/common/Button";
import LoginInput from "@/components/login/LoginInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const result = await submitLogin(email, password);
    console.log(result);
  };

  return (
    <form
      className="mt-4 flex flex-col items-center gap-1"
      onSubmit={handleSubmit}
    >
      <LoginInput
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage="올바른 형식의 이메일을 입력해주세요."
      />

      <LoginInput
        type="password"
        placeholder="비밀번호"
        value={password}
        minLength={5}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage="비밀번호는 최소 10자 이상이어야 합니다."
      />

      <Button label="로그인" size="full" />
    </form>
  );
}
