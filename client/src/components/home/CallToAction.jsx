import React from 'react';

const CallToAction = () => {
  return (
    <div
      id="cta"
      className="w-full max-w-5xl mx-auto mt-28 px-16 border-y border-dashed border-slate-200"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left px-3 md:px-10 py-20 -mt-10 -mb-10 w-full border-x border-dashed border-slate-200">
        <p className="text-xl font-medium max-w-sm">
          Build a job-winning resume in minutes and impress recruiters effortlessly.
        </p>

        <button className="rounded-md bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CallToAction;