import React, { useState } from "react";

const companies = [
  { name: "AANS Infosys", logo: "https://picsum.photos/seed/aans/100" },
  { name: "TechAlpha", logo: "https://picsum.photos/seed/techalpha/100" },
  { name: "Scorp", logo: "https://picsum.photos/seed/scorp/100" },
  {
    name: "International Education Overseas",
    logo: "https://picsum.photos/seed/overseas/100",
  },
  {
    name: "Branding Pioneers",
    logo: "https://picsum.photos/seed/branding/100",
  },
  { name: "Another Company", logo: "https://picsum.photos/seed/another/100" },
  { name: "Global Tech", logo: "https://picsum.photos/seed/globaltech/100" },
  { name: "NextGen", logo: "https://picsum.photos/seed/nextgen/100" },
];

const ITEMS_PER_ROW = 2; // 2 per row
const ROWS_VISIBLE = 2; // 2 rows visible
const ITEMS_PER_PAGE = ITEMS_PER_ROW * ROWS_VISIBLE; // 4 cards per view

const PlacementSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleUp = () => {
    setStartIndex((prev) => Math.max(prev - ITEMS_PER_ROW, 0));
  };

  const handleDown = () => {
    setStartIndex((prev) =>
      Math.min(prev + ITEMS_PER_ROW, companies.length - ITEMS_PER_PAGE)
    );
  };

  const visibleCompanies = companies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="py-12 px-6 md:px-16 bg-black text-center relative">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl text-white font-semibold mb-10">
        Some of Our <span className="text-purple-600 font-bold">Students</span>{" "}
        Got the <span className="text-blue-600 font-bold">Placement</span> in
        these <span className="text-green-600 font-bold">Companies</span>
      </h2>

      {/* Cards + Arrows container */}
      <div className="relative max-w-3xl mx-auto bg-gray-900 rounded-xl p-6 flex items-center justify-center">
        {/* Cards */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          {visibleCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg hover:bg-gray-300 transition"
            >
              <div className="w-24 h-24 rounded-full border-2 border-purple-400 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full object-contain"
                />
              </div>
              <h3 className="text-gray-700 font-medium">{company.name}</h3>
            </div>
          ))}
        </div>

        {/* Slider Arrows */}
        <div className="flex flex-col gap-4 ml-6">
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
            disabled={startIndex >= companies.length - ITEMS_PER_PAGE}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow text-white transition ${
              startIndex >= companies.length - ITEMS_PER_PAGE
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            ↓
          </button>
        </div>
      </div>

      {/* CTA Section */}
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
