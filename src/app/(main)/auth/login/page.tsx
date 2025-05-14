import Link from "next/link";
import { LoginForm } from "./_components/login-form";
import GHSignin from "../_components/gh-signin";

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-xs flex-col justify-center space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">Enter your email below to login to your account</p>
      </div>
      <LoginForm />
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">Or continue with</span>
      </div>
      <GHSignin />

      <div className="text-center text-sm">
        Don&apos;t have an account?&nbsp;
        <Link href="register" className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
}
