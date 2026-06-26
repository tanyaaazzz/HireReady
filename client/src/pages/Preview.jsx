import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { dummyResumeData } from "../assets/assets";
import ResumePreview from "../components/ResumePreview";
import Loader from "../components/Loader";

const Preview = () => {
  const { resumeId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState(null);

  const loadResume = async () => {
    setResumeData(
      dummyResumeData.find((resume) => resume._id === resumeId) || null
    );
    setIsLoading(false);
  };

  useEffect(() => {
    loadResume();
  }, []);

  return resumeData ? (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accent_color}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  ) : (
    <div>
      {isLoading ? 
        <Loader />
      : (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-lg font-medium text-gray-700">
            Resume not found
          </p>

          <Link
            to="/"
            className="flex items-center mt-4 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeftIcon className="mr-2 size-4" />
            Go to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Preview;