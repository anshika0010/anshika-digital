"use client";

import React from "react";
import Image from "next/image";
import Image1 from "../../Image/Gemini.png";

const Video: React.FC = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center border-2 border-[#652f8e] rounded-3xl shadow-xl p-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl text-blue-500 font-extrabold mb-2 uppercase tracking-wide">
          ADVANCE
        </h2>
        <h3 className="text-xl sm:text-2xl text-blue-500 font-bold mb-4">
          VIDEO EDITING INSTITUTE IN SAKET, DELHI
        </h3>

        {/* Subheading */}
        <p className="text-lg sm:text-xl font-semibold mb-4">
          Be a Professional Video Editor in 3–4 Months
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
          Advanced Diploma in Video Editing (ADVE) is the best Professional
          Course for a student who wants to build their career in the Video
          Editing field. This is a 2–3 Months Diploma Course in the Advertising
          and Marketing Fields for any stream student—especially an Art stream
          student who has completed 12th can join the Video Editing Course.
        </p>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
          <Image
            src={Image1}
            alt="Video Editing Institute Promo"
            className="w-full h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[40rem] xl:h-[52rem] 2xl:h-[64rem] object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* Call-to-Action Button */}
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
          Enroll Now →
        </button>
      </div>
    </section>
  );
};

export default Video;
