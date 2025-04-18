import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bctypt from "bcryptjs";
import { connectDB } from "./mongodb";
import { User } from "../models/user";

export const authOptions: NextAuthOptions = {
        providers : [
            CredentialsProvider({
                name : "Credentials",
                credentials : {
                    academicId : {label : "Academic Id", type : "text"},
                    password : {label : "Password", type : "password"}
                },
                async authorize(credentials) {
                    await connectDB()
                    const user = await User.findOne({academicId : credentials?.academicId})
                    if(!user) {
                        throw new Error("No user found with the Academic Id")
                    }
                    const isCorrect = await bctypt.compare(credentials!.password, user.password)
                    if(!isCorrect) {
                        throw new Error("Password is incorrect")
                    }
                    return {id : user._id, academicId : user.academicId, name : user.name}
                }
            })
        ]
        , pages : {
            signIn : "/login"
        },
        session : {
            strategy : "jwt"
        },
        secret : process.env.NEXTAUTH_SECRET,
}