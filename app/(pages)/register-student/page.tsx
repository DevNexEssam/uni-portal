import React from "react";
import RegisterStudentForm from "@/components/ui/RegisterStudentForm";

const RegisterStudentPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* College Logo and Name */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-text">Create Account </h2>
        </div>
        {/* Login Form */}
        <RegisterStudentForm />
      </div>
    </div>
  );
};

export default RegisterStudentPage;
