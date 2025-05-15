"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHashtag, FaBook, FaAlignLeft, FaLink } from "react-icons/fa";

const FileForm = () => {
  const [file, setFile] = useState({
    fileCode: "",
    courseCode: "",
    fileName: "",
    fileDescription: "",
  });

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (
      !file.courseCode ||
      !file.fileCode ||
      !file.fileDescription ||
      !file.fileName
    ) {
      setError("Please fill in all required fields.");
      setLoading(false);
    }

    try {
      await axios.post("/api/admin/files/new" , file);
      setSuccess("File added successfully!");
      setTimeout(() => {
        setSuccess("");
        setFile({
          fileCode: "",
          courseCode: "",
          fileName: "",
          fileDescription: "",
        });
      }, 3000);
    } catch (error: any) {
      setError(
        error.response.data.message ||
          "Failed to add File check your data and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get("/api/admin/courses");
        setCourses(data);
      } catch (error) {
        console.log("error fetch courses")
      }
    };
    fetchCourses();
  }, []);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {success && <p className="text-green-500 text-sm mt-1">{success}</p>}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* File Code */}
          <div>
            <label className="text-sm font-medium text-text mb-1 flex items-center">
              <FaHashtag className="mr-2 text-primary" />
              File Code (Required)
            </label>
            <input
              type="text"
              placeholder="FILE101"
              value={file.fileCode}
              onChange={(e) => setFile({ ...file, fileCode: e.target.value })}
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Course Code */}
          <div>
            <label className="text-sm font-medium text-text mb-1 flex items-center">
              <FaHashtag className="mr-2 text-primary" />
              Course Code (Required)
            </label>

            <select
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              value={file.courseCode}
              onChange={(e) => setFile({ ...file, courseCode: e.target.value })}
            >
              <option value="">Select Department</option>
              {courses.map((course) => (
                <option key={course._id} value={course.courseCode}>
                  {course.courseCode}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* File Name */}
        <div>
          <label className="text-sm font-medium text-text mb-1 flex items-center">
            <FaBook className="mr-2 text-primary" />
            File Name (Required)
          </label>
          <input
            type="text"
            placeholder="Lecture 1 - Introduction"
            value={file.fileName}
            onChange={(e) => setFile({ ...file, fileName: e.target.value })}
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>

        {/* File Description */}
        <div>
          <label className="text-sm font-medium text-text mb-1 flex items-center">
            <FaAlignLeft className="mr-2 text-primary" />
            File Description (Required)
          </label>
          <textarea
            rows={4}
            placeholder="Brief description about the file..."
            value={file.fileDescription}
            onChange={(e) =>
              setFile({ ...file, fileDescription: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          ></textarea>
        </div>

        {/* File URL */}
        <div>
          <label className="text-sm font-medium text-text mb-1 flex items-center">
            <FaLink className="mr-2 text-primary" />
            File URL (Required)
          </label>
          <input
            type="text"
            placeholder="https://your-s3-bucket/file.pdf"
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Submit + Cancel Buttons */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-lg text-text hover:bg-background-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
          >
            {loading ? "create..." : "create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileForm;
