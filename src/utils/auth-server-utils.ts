import { runWithAmplifyServerContext } from "./amplify-utils";
import { fetchUserAttributes } from "aws-amplify/auth/server";
import { NextServer } from "@aws-amplify/adapter-nextjs";

export const authenticated = async (context: NextServer.Context) => {
  return await runWithAmplifyServerContext({
    nextServerContext: context,
    operation: async (contextSpec) => await fetchUserAttributes(contextSpec),
  });
};
