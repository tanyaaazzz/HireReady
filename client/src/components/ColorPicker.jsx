import { Check, Palette } from 'lucide-react';
import React, { useState } from 'react';

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "Ocean Blue", value: "#4F86F7" },
    { name: "Royal Indigo", value: "#6366F1" },
    { name: "Lavender", value: "#8B7CF6" },
    { name: "Emerald", value: "#22C55E" },
    { name: "Coral", value: "#F87171" },
    { name: "Amber", value: "#F59E0B" },
    { name: "Teal", value: "#14B8A6" },
    { name: "Rose", value: "#EC4899" },
    { name: "Slate Gray", value: "#64748B" },
    { name: "Charcoal", value: "#374151" }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-linear-to-br from-blue-50 to-blue-100 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-300 transition-all duration-200 hover:ring-2 hover:shadow-sm"
      >
        <Palette size={16} />
        <span className="max-sm:hidden">Accent</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          <div className="absolute left-0 top-full z-50 mt-2 grid w-64 grid-cols-4 gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
            {colors.map((color) => (
              <div
                key={color.value}
                className="flex cursor-pointer flex-col items-center group"
                onClick={() => {
                  onChange(color.value);
                  setIsOpen(false);
                }}
              >
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-transparent transition-colors group-hover:border-black/25"
                  style={{ backgroundColor: color.value }}
                >
                  {selectedColor === color.value && (
                    <Check className="size-5 text-white" />
                  )}
                </div>
                <p className="mt-1 text-center text-xs text-gray-600">
                  {color.name}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ColorPicker;