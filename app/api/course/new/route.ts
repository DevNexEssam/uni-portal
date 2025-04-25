import { connectDB } from "@/lib/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";
import { Student } from "@/models/student";

export async function POST(req: Request) {
  const { courseCode, courseName, department, instructor, faculty, academicLevel, description } = await req.json();

  await connectDB();

  const courseExist = await Course.findOne({ courseCode });
  if (courseExist) {
    return NextResponse.json({ message: "Course already exists" }, { status: 400 });
  }

  const course = await Course.create({
    courseCode,
    courseName,
    department,
    instructor,
    faculty,
    academicLevel,
    description,
  });

  const students = await Student.find({ faculty, department, academicLevel });

  await Promise.all(
    students.map(async (student) => {
      if (!student.courses) {
        student.courses = [];
      }
      student.courses.push(course._id);
      await student.save();
    })
  );

  return NextResponse.json({ message: "Course created successfully" }, { status: 201 });
}
