import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import logo1 from "../../Image/Edu.webp";
import logo2 from "../../Image/N.webp";
import logo3 from "../../Image/Taca.webp";
import logo4 from "../../Image/brand.webp";
import logo5 from "../../Image/scorp.webp";
import logo6 from "../../Image/top.webp";

const companies = [
  { name: "AANS Infosys", logo: logo1 },
  { name: "TechAlpha", logo: logo2 },
  { name: "Scorp", logo: logo3 },
  { name: "International Education Overseas", logo: logo4 },
  { name: "Branding Pioneers", logo: logo5 },
  { name: "Another Company", logo: logo6 },
];

const ITEMS_PER_ROW = 2;
const ROWS_VISIBLE = 2;
const VISIBLE_ITEMS = ITEMS_PER_ROW * ROWS_VISIBLE; // 4
const STEP = ITEMS_PER_ROW; // Slide by 2 each time

const PlacementSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for down, -1 for up

  const handleUp = () => {
    setDirection(-1);
    setStartIndex((prev) => Math.max(prev - STEP, 0));
  };

  const handleDown = () => {
    setDirection(1);
    setStartIndex((prev) =>
      Math.min(prev + STEP, companies.length - VISIBLE_ITEMS)
    );
  };

  const visibleCompanies = companies.slice(
    startIndex,
    startIndex + VISIBLE_ITEMS
  );

  return (
    <div className="py-12 px-6 md:px-16 bg-black text-center relative">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl text-white font-semibold mb-10">
        Some of Our <span className="text-purple-600 font-bold">Students</span>{" "}
        Got the <span className="text-blue-600 font-bold">Placement</span> in
        these <span className="text-green-600 font-bold">Companies</span>
      </h2>

      {/* Cards + Arrows */}
      <div className="relative max-w-3xl mx-auto bg-gray-900 rounded-xl p-6 flex items-center justify-center overflow-hidden">
        {/* Visible Window */}
        <motion.div
          key={startIndex} // re-animate whenever startIndex changes
          initial={{ y: direction * 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-2 gap-6 flex-1"
        >
          {visibleCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg hover:bg-gray-300 transition"
            >
              <div className="w-24 h-24 rounded-full border-2 border-purple-400 flex items-center justify-center overflow-hidden mb-4 relative">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-gray-700 font-medium">{company.name}</h3>
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        <div className="flex flex-col gap-8 ml-8">
          <button
            onClick={handleUp}
            disabled={startIndex === 0}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow text-white transition ${
              startIndex === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            ↑
          </button>
          <button
            onClick={handleDown}
            disabled={startIndex >= companies.length - VISIBLE_ITEMS}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow text-white transition ${
              startIndex >= companies.length - VISIBLE_ITEMS
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            ↓
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-col items-center gap-2">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700 transition">
          Enroll Now
        </button>
        <p className="text-sm text-white">
          Email:{" "}
          <a href="mailto:info@example.com" className="text-blue-600">
            info@example.com
          </a>
        </p>
        <p className="text-sm text-gray-100">
          Phone:{" "}
          <a href="tel:+919017654260" className="text-blue-600">
            +91 9017654260
          </a>
        </p>
      </div>
    </div>
  );
};

export default PlacementSection;
