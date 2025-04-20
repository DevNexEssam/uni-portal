import NextAuth from "next-auth";
import { studentAuthOptions } from "@/lib/studentAuthOptions";


const handler = NextAuth(studentAuthOptions) 

export { handler as GET, handler as POST };