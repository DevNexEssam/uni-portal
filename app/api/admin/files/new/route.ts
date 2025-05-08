import { connectDB } from "@/lib/mongodb";
import File from "../../../../../models/file";
import { NextResponse } from "next/server";
import Course from "../../../../../models/course";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const metadata = formData.get("metadata") as string;
    const file = formData.get("file") as File;

    if (!file || !metadata) {
      return NextResponse.json({ message: "File and metadata are required" }, { status: 400 });
    }

    const {
      fileCode,
      courseCode,
      fileName,
      fileDescription,
      department,
      faculty,
      fileType,
    } = JSON.parse(metadata);

    // افتراض أن الرابط بيتولد بشكل أوتوماتيك بعد رفعه على S3 أو Cloudinary
    const fileUrl = `/uploads/${file.name}`; // أو حط رابط CDN لو بتستخدم تخزين خارجي

    await connectDB();

    const fileExist = await File.findOne({ fileCode });

    if (fileExist) {
      return NextResponse.json({ message: "File already exists" }, { status: 400 });
    }

    const newFile = await File.create({
      fileCode,
      courseCode,
      fileName,
      fileDescription,
      department,
      faculty,
      fileType,
      fileUrl,
    });

    const courses = await Course.find({
      courseCode,
      department,
      faculty,
    });

    const updatePromises = courses.map(async (course) => {
      try {
        if (!course.files.some((c) => c.equals(newFile._id))) {
          course.files.push(newFile._id);
          await course.save();
          console.log(`Course updated: ${course.courseCode}`);
        }
      } catch (error) {
        console.error(`Error updating course ${course.courseCode}:`, error);
      }
    });

    await Promise.all(updatePromises);

    return NextResponse.json(
      {
        message: "File created and added to courses successfully",
        addedTo: courses.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in File creation:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
