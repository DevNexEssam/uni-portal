"use client";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaUniversity,
  FaFilePdf,
} from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../ui/loading";

interface ICourseFile {
  fileCode: string;
  courseCode: string;
  fileName: string;
  fileDescription: string;
  fileUrl: string;
  createdAt: string;
}

interface ICourse {
  courseCode: string;
  courseName: string;
  instructor: string;
  department: string;
  description: string;
  files?: ICourseFile[];
}

export default function CourseMaterials() {
  const params = useParams();
  const courseId = params.id as string;

  const [course, setCourse] = useState<ICourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await axios.get(`/api/student/courses/${courseId}`);
        console.log(data);
        setCourse(data);
      } catch (error) {
        setError("Failed to load course data");
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!course) return <div className="p-4">Course not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-4">
          <Link
            href="/student/dashboard/courses"
            className="text-primary hover:underline"
          >
            ← Back to Courses
          </Link>
        </div>

        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-primary px-6 py-5">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  {course.courseCode}
                </span>
                <h1 className="text-3xl font-bold mt-2 text-white">
                  {course.courseName}
                </h1>
              </div>
              <div className="p-3 rounded-lg bg-white">
                <FaBookOpen className="text-2xl text-primary" />
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaChalkboardTeacher className="text-primary-light text-xl mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="text-lg font-medium">{course.instructor}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaUniversity className="text-primary-light text-xl mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="text-lg font-medium">{course.department}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-3">
                  Course Description
                </h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Files Section */}
        {course.files && course.files.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Course Files
              </h2>
              <p className="text-gray-600 mt-1">
                <span className="text-primary">{course.files.length}</span>{" "}
                available resource
              </p>
            </div>

            <div className="p-6 space-y-4">
              {course.files.map((file) => (
                <div
                  key={file.fileCode}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <FaFilePdf className="text-red-500 text-2xl mr-4" />
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {file.fileName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {file.fileDescription}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Uploaded:{" "}
                        {new Date(file.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <a
                    href={file.fileUrl}
                    download
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Download File
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
