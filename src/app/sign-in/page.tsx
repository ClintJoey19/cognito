"use client";
import { signInWithRedirect } from "aws-amplify/auth";

const page = () => {
  const handleSignIn = async () => {
    try {
      await signInWithRedirect({ provider: "Google" });

      // todo
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      Sign in{" "}
      <button onClick={() => signInWithRedirect({ provider: "Google" })}>
        Sign In With Google
      </button>
    </div>
  );
};

export default page;
