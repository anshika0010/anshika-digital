import React from "react";

const DemoSession: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-600 p-6">
      {/* Heading */}
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-8">
        Online and Offline Classes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Left Card - Form */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-xl font-bold text-purple-600 mb-6 text-center">
            Book Free Demo Session
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Mobile No."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Select Course</option>
              <option>Web Development</option>
              <option>Graphic Designing</option>
              <option>Data Science</option>
            </select>
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:opacity-90 transition"
            >
              Send OTP
            </button>
          </form>
        </div>

        {/* Right Card - Info */}
        <div className="bg-blue-50 rounded-lg p-8 shadow-md">
          <h2 className="text-xl font-semibold text-center mb-4">
            Become a{" "}
            <span className="text-yellow-500">Professional</span> and Certified
          </h2>
          <ul className="mb-6 space-y-1 text-gray-700 text-sm">
            <li>✅ Verified with Multi-Factor</li>
            <li>✅ Approved with 100% Authenticated</li>
          </ul>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center bg-purple-100 text-purple-600 font-bold rounded-full">
                1
              </div>
              <p className="text-sm">11 Years of excellency in computer education</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center bg-purple-100 text-purple-600 font-bold rounded-full">
                2
              </div>
              <p className="text-sm">
                Institute registered Ministry of MSME Govt.of India
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center bg-purple-100 text-purple-600 font-bold rounded-full">
                3
              </div>
              <p className="text-sm">11 Years of excellency in computer education</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center bg-purple-100 text-purple-600 font-bold rounded-full">
                4
              </div>
              <p className="text-sm">ISO Certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSession;
