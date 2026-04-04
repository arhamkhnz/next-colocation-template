import Link from "next/link";

import GHSignin from "../_components/gh-signin";
import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-xs flex-col justify-center space-y-8">
      <div className="space-y-2">
        <h1 className="font-bold text-2xl">Login to your account</h1>
        <p className="text-balance text-muted-foreground text-sm">Enter your email below to login to your account</p>
      </div>
      <LoginForm />
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
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
