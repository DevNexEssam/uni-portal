import mongoose, { Schema, Document } from "mongoose";

export interface IFile extends Document {
  fileCode: string;
  courseCode: string;
  fileName: string;
  fileDescription: string;
  department: string;
  faculty: string;
  fileUrl: string; // ✅ رابط ملف الـ PDF من Cloudinary أو غيره
}

export const filesSchema = new Schema<IFile>(
  {
    fileCode: {
      type: String,
      required: true,
      unique: true,
    },
    courseCode: {
      type: String,
      required: true,
      unique: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    fileDescription: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true, // ✅ لو هتخليه إلزامي بعد الرفع
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const File = mongoose.models.File || mongoose.model("File", filesSchema);

export default File;
