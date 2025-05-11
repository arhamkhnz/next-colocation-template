import Link from "next/link";
import GHSignin from "../components/gh-signin";
import { RegisterForm } from "./components/register-form";

export default function RegisterPage() {
  return (
    <div className="mx-auto flex w-xs flex-col justify-center space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-muted-foreground text-sm text-balance">Enter your email below to create your account</p>
      </div>
      <RegisterForm />
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">Or continue with</span>
      </div>
      <GHSignin />

      <div className="text-center text-sm">
        Already have an account?&nbsp;
        <Link href="login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </div>
  );
}
