
import Admin from "@/components/Dashboard/Admin";
import { Metadata } from "next";
import { useSession} from "next-auth/react"
import { use } from "react";

export const metadata: Metadata = {
  title: "HRMS - Solutions",
  description: "Dashboard Page",
  // other metadata
};

export default function Home() {
  const { data: session } = useSession();

  if (session && session.user ) {
    
  }
  return (
    <>
      <Admin />
    </>
  );
}