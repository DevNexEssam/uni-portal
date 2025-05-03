import { connectDB } from "@/lib/mongodb";
import Student from "@/models/student";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB()
        const student = await Student.findById(params.id)
        if (!student) {
            return NextResponse.json({ message: "Student not found" }, { status: 404 })
        }
        return NextResponse.json(student, { status: 200 })
    } catch (error) {
        console.error("Error fetching student:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}