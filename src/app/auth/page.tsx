import SignInForm from "@/components/Forms/SignIn";
import { Suspense } from "react";

const AuthPage = () => {
  return (
    <div>
      <Suspense>
        <SignInForm />
      </Suspense>
    </div>
  );
};

export default AuthPage;
