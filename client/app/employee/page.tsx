import EmployeeDashboard from "@/components/Dashboard/Employee";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HRMS - Solutions",
  description: "Dashboard Page",
  // other metadata
};

export default function Employee() {
  return (
    <>
      <EmployeeDashboard />
    </>
  );
}