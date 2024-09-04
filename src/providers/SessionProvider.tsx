"use client";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

const SessionProvider = () => {
  return null;
};

export default SessionProvider;
