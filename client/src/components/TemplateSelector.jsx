import { Check, Layout } from "lucide-react";
import React, { useState } from "react";

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "A clean, traditional resume format with clear sections and professional typography.",
    },
    {
      id: "modern",
      name: "Modern",
      preview:
        "Sleek design with strategic use of color and modern font choices.",
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview:
        "Minimal design with a single image and clean typography.",
    },
    {
      id: "minimal",
      name: "Minimal",
      preview:
        "Ultra-clean design that puts your content front and center.",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-300 transition-all duration-200 hover:ring-2 hover:shadow-sm"
      >
        <Layout size={16} />
        <span className="max-sm:hidden">Template</span>
      </button>

      {isOpen && (
        <>
          {/* backdrop to close the dropdown when clicking outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute left-0 top-full z-50 mt-2 max-h-[80vh] w-[28rem] space-y-4 overflow-y-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl">
            {templates.map((template) => (
              <div
                key={template.id}
                onClick={() => {
                  onChange(template.id);
                  setIsOpen(false);
                }}
                className={`relative cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                  selectedTemplate === template.id
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:shadow-md"
                }`}
              >
                {selectedTemplate === template.id && (
                  <div className="absolute right-4 top-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {template.name}
                  </h4>

                  <p className="mt-3 rounded-md bg-blue-50 p-3 text-sm italic leading-relaxed text-gray-600">
                    {template.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TemplateSelector;