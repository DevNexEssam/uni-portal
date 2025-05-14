import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import File from '@/models/file';
import cloudinary from '@/lib/cloudinary';
import Course from '@/models/course';

export async function POST(request: Request) {
  await connectDB();

  try {
    const formData = await request.formData();

    const file = formData.get('file') as globalThis.File;
    const fileCode = formData.get('fileCode') as string;
    const courseCode = formData.get('courseCode') as string;
    const fileName = formData.get('fileName') as string;
    const fileDescription = formData.get('fileDescription') as string;

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file uploaded' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: 'uni-portal',
          public_id: `${fileCode}_${Date.now()}`,
          access_mode: "public"
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      ).end(buffer);
    });

    const { secure_url } = uploadResult as { secure_url: string };

    const newFile = await File.create({
      fileCode,
      courseCode,
      fileName,
      fileDescription,
      fileUrl: secure_url,
    });

    const courses = await Course.find({ courseCode });

    const updatePromises = courses.map(async (course) => {
      try {
        if (!course.files.some((c: any) => c.equals(newFile._id))) {
          course.files.push(newFile._id);
          await course.save();
          console.log(`File added to course ${course.courseCode}`);
        }
      } catch (error) {
        console.log(`Error updating course ${course.courseCode}`);
      }
    });

    await Promise.all(updatePromises);

    return NextResponse.json(
      {
        message: 'File created and added to course successfully',
        addedTo: courses.length
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Upload failed'
      },
      { status: 500 }
    );
  }
}
