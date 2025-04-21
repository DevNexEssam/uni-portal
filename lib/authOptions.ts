import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "./mongodb";
import { User } from "../models/user";
import { Admin } from "../models/admin";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "student-credentials", // Student Provider ID
      name: "Student Credentials",
      credentials: {
        academicId: { label: "Academic ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ academicId: credentials?.academicId });
        if (!user) {
          throw new Error("No student found with this Academic ID");
        }

        const isCorrect = await bcrypt.compare(credentials!.password, user.password);
        if (!isCorrect) {
          throw new Error("Password is incorrect");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          academicId: user.academicId,
          role: "student",
        };
      },
    }),

    CredentialsProvider({
      id: "admin-credentials", // Admin Provider ID
      name: "Admin Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const admin = await Admin.findOne({ email: credentials?.email });
        if (!admin) {
          throw new Error("No admin found with this email");
        }

        const isCorrect = await bcrypt.compare(credentials!.password, admin.password);
        if (!isCorrect) {
          throw new Error("Password is incorrect");
        }

        return {
          id: admin._id.toString(),
          name: admin.name,
          email: admin.email,
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};
