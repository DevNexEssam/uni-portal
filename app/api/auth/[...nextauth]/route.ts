import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../../lib/mongodb";
import { User } from "../../../../models/user";
import bctypt from "bcryptjs";


const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name : "Credentials",
            credentials : {
                email : {label : "Email", type : "text"},
                password : {label : "Password", type : "password"}
            },
            async authorize(credentials) {
                await connectDB()
                const user = await User.findOne({email : credentials?.email})
                if(!user) {
                    throw new Error("No user found with the email")
                }
                const isCorrect = await bctypt.compare(credentials!.password, user.password)
                if(!isCorrect) {
                    throw new Error("Password is incorrect")
                }
                return {id : user._id, email : user.email, name : user.name}
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
}) 

export { handler as GET, handler as POST };