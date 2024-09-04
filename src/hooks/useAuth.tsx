import {
  fetchUserAttributes,
  FetchUserAttributesOutput,
  signInWithRedirect,
  signOut,
} from "aws-amplify/auth";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<FetchUserAttributesOutput>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const auth = await fetchUserAttributes();

        if (!auth) return;

        setUser(auth);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithRedirect({ provider: "Google" });

      console.log(user);

      // save to db
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return { user, isLoading, handleSignIn, handleSignOut };
};
