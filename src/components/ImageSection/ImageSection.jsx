import React from "react";

export const ImageSection = ({ 
  imageUrl = "/project-image.png",
  altText = "Project image",
  className = ""
}) => {
  return (
    <div className="w-full px-6 mt-6 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[80vh] overflow-visible rounded-lg">
          {/* Image */}
          <img
            src={imageUrl}
            alt={altText}
            className={`w-full h-full object-cover ${className}`}
          />

          {/* Button */}
          <button
            className="absolute bottom-0 right-20 translate-x-1/2 translate-y-1/2 bg-black text-white rounded-full w-36 h-36 flex items-center justify-center shadow-[0_0_20px_rgba(255,77,0,0.5)] hover:shadow-[0_0_30px_rgba(255,77,0,0.7)] transition-all duration-300 z-10"
          >
            <span className="text-sm">Get in Touch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

