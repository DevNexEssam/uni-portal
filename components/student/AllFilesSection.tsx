"use client";
import { FaBookOpen, FaFilePdf, FaArrowLeft, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../ui/loading"; // Make sure to import your Loading component

interface File {
  _id: string;
  fileCode: string;
  courseCode: string;
  courseName: string;
  fileName: string;
  fileDescription: string;
  fileUrl: string;
  createdAt: string;
}

export default function AllFiles() {
  const [allFiles, setAllFiles] = useState<File[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("/api/student/files");
        // Transform the data to match our frontend structure
        const files = response.data.files.map((file: any) => ({
          id: file._id,
          fileCode: file.fileCode,
          courseCode: file.courseCode,
          courseName: file.courseName,
          fileName: file.fileName,
          fileDescription: file.fileDescription,
          fileUrl: file.fileUrl,
          uploadedAt: new Date(file.createdAt).toLocaleDateString()
        }));
        setAllFiles(files);
      } catch (err) {
        setError("Failed to load files. Please try again later.");
        console.error("Error fetching files:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  // Filter files based on search term
  const filteredFiles = allFiles.filter(file =>
    file.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    file.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    file.fileDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Link
            href="/student/dashboard"
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaArrowLeft className="mr-2" />
            Back to Dashboard
          </Link>
        </div>

        {/* Page header */}
        <div className="bg-white rounded-lg shadow border border-gray-200 mb-8">
          <div className="bg-blue-600 px-6 py-5 rounded-t-lg">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-white">All Course Files</h1>
                <p className="text-white/90 mt-1">
                  Browse all your course materials in one place
                </p>
              </div>
              <div className="p-2 rounded-lg bg-white">
                <FaBookOpen className="text-xl text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search files by name, course code or description..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Files section */}
        <div className="bg-white rounded-lg shadow border border-gray-200">
          <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Available Files ({filteredFiles.length})
              </h2>
              <p className="text-gray-500 text-sm">
                {searchTerm ? `Showing results for "${searchTerm}"` : "Sorted by course and upload date"}
              </p>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {filteredFiles.length > 0 ? (
              filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start">
                    <FaFilePdf className="text-red-500 text-xl mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {file.fileName}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {file.fileDescription}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                          {file.courseCode}
                        </span>
                        <span className="text-xs text-gray-500">
                          {file.courseName} • Uploaded: {file.uploadedAt}
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={file.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm transition-colors"
                  >
                    View
                  </a>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                {allFiles.length === 0 ? "No files available" : "No files found matching your search"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}