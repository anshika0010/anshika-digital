import React from "react";

const testimonials = [
  {
    name: "Aadesh Nishad",
    image: "https://via.placeholder.com/80", // replace with actual image
    text: "Great institute for digital marketing and graphic design. Practical training and solid knowledge!",
  },
  {
    name: "Kundan Kumar",
    image: "https://via.placeholder.com/80",
    text: "Very good teaching and hands-on training. Highly recommend this institute!",
  },
  {
    name: "Ramesh Sahu",
    image: "https://via.placeholder.com/80",
    text: "Completed digital marketing course here. Learned SEO, social media, email marketing. Trainer support was excellent!",
  },
  {
    name: "Anshika Digital Marketing Institute",
    image: "https://via.placeholder.com/80",
    text: "Top-notch institute with practical training and personal growth. Great for career building!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-12 px-6 md:px-16 bg-black">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        What Our <span className="text-blue-600 font-bold">Students Say</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            {/* Profile Image */}
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-blue-200 overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-blue-600 font-semibold text-lg mb-1">
              {item.name}
            </h3>

            {/* Stars */}
            <div className="flex justify-center mb-2 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 20.02 4.665 24 6 15.595 0 9.748l8.332-1.73z" />
                  </svg>
                ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
