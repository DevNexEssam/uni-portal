// app/api/admin/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { adminAuthOptions } from "@/lib/adminAuthOptions";

const handler = NextAuth(adminAuthOptions);

export { handler as GET, handler as POST };
