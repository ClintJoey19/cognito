"use client";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user, isLoading, handleSignOut } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="">
      <p>{user ? user?.name : "User unauthenticated"}</p>{" "}
      <button onClick={handleSignOut}>Sign out</button>
    </main>
  );
}
