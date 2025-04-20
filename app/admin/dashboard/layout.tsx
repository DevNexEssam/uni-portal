import { ReactNode } from "react";
import { adminAuthOptions } from "@/lib/adminAuthOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LayoutDashboard = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(adminAuthOptions);

  if (session?.user?.role !== "admin") {
    redirect("/admin/login");
  }
  return <div>{children}</div>;
};

export default LayoutDashboard;
