import { connectDB } from "@/lib/mongodb";
import File from "../../../../../models/file";
import Course from "../../../../../models/course";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { fileCode, courseCode, fileName, fileDescription } = await req.json();

  try {
    await connectDB();

    const fileExist = await File.findOne({ fileCode });

    if (fileExist) {
      return NextResponse.json({ message: "file already exists" }, { status: 400 });
    }

    const file = await File.create({
      fileCode,
      courseCode,
      fileName,
      fileDescription,
    });

    const courses = await Course.find({ courseCode });

    const updatePromises = courses.map(async (course) => {
      try {
        if (!course.files.some((f: any) => f.equals(file._id))) {
          course.files.push(file._id);
          await course.save();
        }
      } catch (error) {
        console.error(`Error updating course ${course.courseCode}:`, error);
      }
    });

    await Promise.all(updatePromises);

    return NextResponse.json(
      {
        message: "File created and added to Courses successfully",
        addedTo: courses.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in file creation:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
