import { connectDB } from "@/lib/mongodb"
import File from "../../../../../models/file"
import { NextResponse } from "next/server"
import Course from "../../../../../models/course"

export async function POST(req: Request) {
    const { fileCode, courseCode, fileName, fileDescreption, department, faculty } = await req.json()

    try {
        await connectDB()
        const fileExist = await File.findOne({ fileCode })

        if (fileExist) {
            return NextResponse.json({ message: "File already exists" }, { status: 400 });
        }

        const file = await File.create({
            fileCode, courseCode, fileName, fileDescreption, department, faculty
        })

        const courses = await Course.find({
            courseCode,
            department,
            faculty,
        })

        const updatePromises = courses.map(async (course) => {
            try {
                if (!course.files.some(c => c.equals(file._id))) {
                    course.files.push(file._id)
                    await course.save()
                    console.log(`Course added to student ${course.courseCode}`);
                }
            } catch (error) {
                console.error(`Error updating student ${course.courseCode}:`, error);
            }
            
        })

        await Promise.all(updatePromises);
        return NextResponse.json(
            {
                message: "Files created and added to courses successfully",
                addedTo: courses.length
            },
            { status: 201 }
        );

    } catch (error) {
        console.error("Error in File creation:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }

}