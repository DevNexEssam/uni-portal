import { NextResponse } from "next/server"
import { connectDB } from "../../../lib/mongodb"
import { User } from "../../../models/user"
import bcrypt from "bcryptjs"

export async function POST (req : Request) {
    const {name, email, password} = await req.json()
    await connectDB()

    const userExist = await User.findOne({email})
    if(userExist) return NextResponse.json(({message: "User already exists"}), {status: 400})

    const hashedPassword = await bcrypt.hash(password , 10)

    const newUser = new User({name, email, password: hashedPassword})
    await newUser.save()

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
}