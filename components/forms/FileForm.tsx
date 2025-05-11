"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FaFileAlt, FaHashtag, FaBook, FaUpload, FaSave } from "react-icons/fa";

const FileForm = () => {
  const [fileData, setFileData] = useState({
    fileCode: "",
    courseCode: "",
    fileName: "",
    fileDescription: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      if (!fileData.fileName) {
        setFileData(prev => ({
          ...prev,
          fileName: e.target.files![0].name.split('.')[0]
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setErrorMessage("");
    setSuccess("");

    if (
      !fileData.fileCode ||
      !fileData.courseCode ||
      !fileData.fileName ||
      !fileData.fileDescription ||
      !selectedFile
    ) {
      setError("Please fill in all required fields and select a file.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("fileCode", fileData.fileCode);
      formData.append("courseCode", fileData.courseCode);
      formData.append("fileName", fileData.fileName);
      formData.append("fileDescription", fileData.fileDescription);

      const response = await axios.post("/api/admin/files/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          }
        },
      });

      // استخدام response هنا
      if (response.data.success) {
        setSuccess(response.data.message || "File uploaded successfully!");
        
        // Reset form after successful upload
        setTimeout(() => {
          setFileData({
            fileCode: "",
            courseCode: "",
            fileName: "",
            fileDescription: "",
          });
          setSelectedFile(null);
          setUploadProgress(0);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          setSuccess("");
        }, 3000);
      } else {
        setErrorMessage(response.data.message || "Upload failed, please try again.");
      }
    } catch (error: any) {
      // معالجة الأخطاء من response
      const errorMsg = error.response?.data?.message || 
                      error.response?.data?.error || 
                      "Failed to upload file. Please try again.";
      setErrorMessage(errorMsg);
      
      // يمكنك أيضاً معالجة أخطاء محددة بناء على status code
      if (error.response?.status === 413) {
        setErrorMessage("File is too large. Please choose a smaller file.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {success && (
        <div className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
          {success}
        </div>
      )}
      {errorMessage && (
        <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {errorMessage}
        </div>
      )}
      
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
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="FILE001"
              value={fileData.fileCode}
              onChange={(e) =>
                setFileData({ ...fileData, fileCode: e.target.value })
              }
            />
            {error && !fileData.fileCode && (
              <p className="text-red-500 text-sm mt-1">File code is required</p>
            )}
          </div>

          {/* Course Code */}
          <div>
            <label className="text-sm font-medium text-text mb-1 flex items-center">
              <FaBook className="mr-2 text-primary" />
              Course Code (Required)
            </label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="CS201"
              value={fileData.courseCode}
              onChange={(e) =>
                setFileData({ ...fileData, courseCode: e.target.value })
              }
            />
            {error && !fileData.courseCode && (
              <p className="text-red-500 text-sm mt-1">Course code is required</p>
            )}
          </div>
        </div>

        {/* File Name */}
        <div>
          <label className="text-sm font-medium text-text mb-1 flex items-center">
            <FaFileAlt className="mr-2 text-primary" />
            File Name (Required)
          </label>
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            placeholder="Lecture Notes Week 1"
            value={fileData.fileName}
            onChange={(e) =>
              setFileData({ ...fileData, fileName: e.target.value })
            }
          />
          {error && !fileData.fileName && (
            <p className="text-red-500 text-sm mt-1">File name is required</p>
          )}
        </div>

        {/* File Description */}
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            File Description (Required)
          </label>
          <textarea
            rows={4}
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            placeholder="Enter file description..."
            value={fileData.fileDescription}
            onChange={(e) =>
              setFileData({ ...fileData, fileDescription: e.target.value })
            }
          ></textarea>
          {error && !fileData.fileDescription && (
            <p className="text-red-500 text-sm mt-1">File description is required</p>
          )}
        </div>

        {/* File Upload */}
        <div>
          <label className="text-sm font-medium text-text mb-1 flex items-center">
            <FaUpload className="mr-2 text-primary" />
            File Upload (Required)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary-dark"
            />
            {selectedFile && (
              <span className="text-sm text-gray-600">
                {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
              </span>
            )}
          </div>
          {error && !selectedFile && (
            <p className="text-red-500 text-sm mt-1">Please select a file</p>
          )}
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <Link
            href="/admin/files"
            className="px-4 py-2 border border-gray-300 rounded-lg text-text hover:bg-background-secondary"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center disabled:opacity-50"
            disabled={loading}
          >
            <FaSave className="mr-2" />
            {loading ? (
              <>
                Uploading... {uploadProgress > 0 && `(${uploadProgress}%)`}
              </>
            ) : (
              "Upload File"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileForm;