"use client";
import axios from "axios";
import React, { useState } from "react";
import { FaFileUpload, FaFilePdf, FaSave, FaTimes } from "react-icons/fa";

const FileForm = () => {
  const departments = ["Data Science", "Software Engineering", "Cybersecurity"];
  const faculty = ["Faculty of Engineering", "Faculty of Computer Science"];
  const fileTypes = ["Lecture Notes", "Assignment", "Exam", "Other"];

  const [fileData, setFileData] = useState({
    fileCode: "",
    courseCode: "",
    fileName: "",
    fileDescription: "",
    department: "",
    faculty: "",
    fileType: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setError("File size should be less than 10MB");
        return;
      }
      if (!file.type.includes("pdf")) {
        setError("Only PDF files are allowed");
        return;
      }
      setSelectedFile(file);
      setError("");
      if (!fileData.fileName) {
        setFileData({ ...fileData, fileName: file.name.replace(/\.[^/.]+$/, "") });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!selectedFile) {
      setError("Please select a file to upload");
      setLoading(false);
      return;
    }

    if (!fileData.fileCode || !fileData.courseCode || !fileData.fileName) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("metadata", JSON.stringify(fileData));

      const token = localStorage.getItem("token"); // لو التوكن موجود في localStorage

      await axios.post("/api/admin/files/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      setSuccess("File uploaded successfully!");
      resetForm();
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Failed to upload file. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFileData({
      fileCode: "",
      courseCode: "",
      fileName: "",
      fileDescription: "",
      department: "",
      faculty: "",
      fileType: "",
    });
    setSelectedFile(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <FaFileUpload className="mr-2 text-primary" />
        Upload New File
      </h2>

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          {success}
        </div>
      )}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          {selectedFile ? (
            <div className="flex flex-col items-center">
              <FaFilePdf className="text-4xl text-red-500 mb-2" />
              <p className="font-medium">{selectedFile.name}</p>
              <p className="text-sm text-gray-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <button
                type="button"
                onClick={() => setSelectedFile(null)}
                className="mt-2 text-sm text-red-500 flex items-center"
              >
                <FaTimes className="mr-1" /> Remove File
              </button>
            </div>
          ) : (
            <label className="cursor-pointer">
              <div className="flex flex-col items-center">
                <FaFileUpload className="text-4xl text-gray-400 mb-2" />
                <p className="font-medium">Select PDF File</p>
                <p className="text-sm text-gray-500">Maximum file size: 10MB</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </label>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              File Code (Required)
            </label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-lg"
              value={fileData.fileCode}
              onChange={(e) =>
                setFileData({ ...fileData, fileCode: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Code (Required)
            </label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-lg"
              value={fileData.courseCode}
              onChange={(e) =>
                setFileData({ ...fileData, courseCode: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            File Name (Required)
          </label>
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-lg"
            value={fileData.fileName}
            onChange={(e) =>
              setFileData({ ...fileData, fileName: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              className="block w-full p-2 border border-gray-300 rounded-lg"
              value={fileData.department}
              onChange={(e) =>
                setFileData({ ...fileData, department: e.target.value })
              }
            >
              <option value="">Select Department</option>
              {departments.map((dept, i) => (
                <option key={i} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Faculty
            </label>
            <select
              className="block w-full p-2 border border-gray-300 rounded-lg"
              value={fileData.faculty}
              onChange={(e) =>
                setFileData({ ...fileData, faculty: e.target.value })
              }
            >
              <option value="">Select Faculty</option>
              {faculty.map((fac, i) => (
                <option key={i} value={fac}>
                  {fac}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            File Type
          </label>
          <select
            className="block w-full p-2 border border-gray-300 rounded-lg"
            value={fileData.fileType}
            onChange={(e) =>
              setFileData({ ...fileData, fileType: e.target.value })
            }
          >
            <option value="">Select File Type</option>
            {fileTypes.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows={3}
            className="block w-full p-2 border border-gray-300 rounded-lg"
            value={fileData.fileDescription}
            onChange={(e) =>
              setFileData({ ...fileData, fileDescription: e.target.value })
            }
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center disabled:opacity-50"
          >
            <FaSave className="mr-2" />
            {loading ? "Uploading..." : "Upload File"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileForm;
