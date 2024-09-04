import { runWithAmplifyServerContext } from "@/utils/amplify-utils";
import { fetchUserAttributes } from "aws-amplify/auth/server";
import { cookies } from "next/headers";

export const getUser = async () => {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => fetchUserAttributes(contextSpec),
    });

    if (!currentUser) return;

    return currentUser;
  } catch (error) {
    console.error(error);
  }
};
