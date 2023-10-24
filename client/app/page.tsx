
import Admin from "@/components/Dashboard/Admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HRMS - Solutions",
  description: "Dashboard Page",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Admin />
    </>
  );
}