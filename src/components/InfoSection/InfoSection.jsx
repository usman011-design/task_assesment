import React from "react";
import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({ year, categories, title, link }) => {
  return (
    <div className="w-[100%] bg-black text-white p-6 flex flex-col md:flex-row justify-between mt-20 items-start md:items-center gap-4">
      {/* Title Section */}
      <div className="text-[#F1DFD6] text-4xl font-mono font-extrabold md:flex-1">{title}</div>

      {/* Year, Categories, and Button Grouped and Aligned Right */}
      <div className="flex flex-col md:flex-row items-start justify-start md:items-start gap-4 md:gap-6 text-gray-200">
        <div className="text-gray-200">{year}</div>

        <div className="flex flex-col gap-1">
          {categories.map((category, index) => (
            <span key={index} className="text-gray-200 lg:mx-20">
              {category}
            </span>
          ))}
        </div>

        {/* Visit Website Button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#FF4D00] text-[#FF4D00] mr-20 px-4 py-2 rounded-br-3xl hover:bg-[#FF4D00] hover:text-white transition-colors duration-300"
          >
            <span className="text-sm">VISIT WEBSITE</span>
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

// Add propTypes below the component
ProjectCard.propTypes = {
  year: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};
