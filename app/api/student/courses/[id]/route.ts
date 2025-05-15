import { NextResponse } from "next/server";
import Course from "@/models/course";
import { connectDB } from "@/lib/mongodb";

import "@/models/file"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const course = await Course.findById(params.id).populate("files");
    
    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}