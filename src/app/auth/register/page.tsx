import SingUpForm from "@/components/Forms/SignUp";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Suspense>
        <SingUpForm />
      </Suspense>
    </div>
  );
};

export default Page;
