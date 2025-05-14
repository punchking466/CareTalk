import LoginForm from "@/features/login/client/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">로그인 페이지</h1>
      <LoginForm />
    </div>
  );
}
