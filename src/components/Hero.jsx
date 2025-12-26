import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

import javaImg from "../assets/backend.jpg";
import frontendImg from "../assets/DataBase.jpg";
import backendImg from "../assets/front.jpg";
import skillsImg from "../assets/Untitled.jpg";

const slides = [
  {
    type: "custom", // first slide
  },
  {
    type: "normal",
    title: "Web Foundations – ",
    highlight: "Front-End Skills",
    desc: "Master modern front-end development skills required to build responsive, interactive, and production-ready web applications.",
    image: backendImg,
    features: [
      "HTML5 – Web Structure & Semantics",
      "CSS3 – Styling, Layouts & Responsiveness",
      "UI/UX & Styling Tools",
      "JavaScript (ES6+) Fundamentals",
      "Front-End Frameworks & Libraries",
      "Version Control & Collaboration (Git & GitHub)",
      "Front-End Build Tools & Tooling",
      "Deployment & Hosting Basics",
    ],
  },
  {
    type: "normal",
    title: "Database ",
    highlight: "Foundation",
    desc: "Learn how to design, manage, and integrate databases in real-world full stack applications using both SQL and NoSQL technologies.",
    image: frontendImg,
    features: [
      "MySQL – Relational Database Concepts",
      "MongoDB – NoSQL & Document-Based Database",
      "CRUD Operations & Queries",
      "Database Design & Normalization",
      "Data Handling in Java Applications",
      "Other Databases – Basics Overview",
    ],
  },

  {
    type: "normal",
    title: "What You Will Learn in ",
    highlight: " This Workshop",
    desc: "This workshop is designed to build strong programming foundations and industry-ready backend development skills using Java.",
    image: skillsImg,
    features: [
      "Core Java & Programming Foundations",
      "Java Enterprise & Frameworks",
      "API Development & Microservices",
      "Testing & Quality Assurance",
      "DevOps & Build Tools Basics",
      "Frontend Integration",
      "Soft Skills & Professional Practices",
    ],
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative  h-screen overflow-hidden bg-white pt-28 md:pt-50 pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        {/* Slider Arrows */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-20">
          <button
            onClick={prevSlide}
            className="pointer-events-auto bg-white/80 backdrop-blur shadow-md hover:bg-white p-2 sm:p-3 rounded-full transition-transform hover:scale-110 -ml-4 md:ml-0"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto bg-white/80 backdrop-blur shadow-md hover:bg-white p-2 sm:p-3 rounded-full transition-transform hover:scale-110 -mr-4 md:mr-0"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-gray-800" />
          </button>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 md:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            {slides[current].type === "custom" ? (
              <motion.div
                key="custom-slide"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 lg:col-span-2 grid lg:grid-cols-2 gap-8 w-full"
              >
                {/* LEFT: Custom Slide */}
                <div className="text-center lg:text-left">
                  <span className="inline-block mb-4 px-4 py-1 text-sm sm:text-base font-semibold text-blue-600 bg-blue-100 rounded-2xl">
                    🔴 Live Instructor-Led Workshop
                  </span>

                  <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6">
                    Java Full Stack Development <br />
                    <span className="text-primary">
                      Workshop SPARK Batch 3.0
                    </span>
                  </h1>

                  <p className="text-gray-600 text-base sm:text-md mb-6 leading-relaxed">
                    Learn Frontend, Backend & Database development with
                    real-time projects, expert mentors, and a clear roadmap to
                    become a job-ready Java Full Stack Developer.
                  </p>

                  <ul className="space-y-2 mb-8 text-gray-700 text-sm lg:text-base text-start lg:text-start">
                    <li>✔ Live Masterclasses</li>
                    <li>✔ Real-Time Projects</li>
                    <li>✔ Certificate of Completion</li>
                    <li>✔ Interview & Career Guidance</li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="#"
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                    >
                      Join Workshop Now
                    </a>
                    <a
                      href="#"
                      className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                    >
                      Download Syllabus
                    </a>
                  </div>
                </div>

                {/* RIGHT: Price Card */}
                <div className="flex justify-center lg:justify-end items-center mt-8 md:mt-0">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-6 w-full max-w-md">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                      Workshop + Full Course Access
                    </h3>
                    <ul className="space-y-2 text-gray-700 mb-6 text-sm sm:text-base">
                      <li>✔ Live Classes</li>
                      <li>✔ Access to Recordings</li>
                      <li>✔ Project Based Learning</li>
                      <li>✔ Bonus Sessions</li>
                    </ul>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-6">
                      <span className="text-2xl sm:text-3xl font-bold text-primary">
                        ₹4,590
                      </span>
                      <span className="text-gray-400 line-through text-sm sm:text-base">
                        ₹14,999
                      </span>
                      <span className="bg-yellow-400 text-yellow-900 text-xs sm:text-sm font-bold px-2 py-1 rounded">
                        67% OFF
                      </span>
                    </div>
                    <a
                      href="#"
                      className="block w-full text-center bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition"
                    >
                      Book Your Seat Now
                    </a>
                    <p className="text-sm sm:text-base text-red-600 font-semibold mt-4 text-center">
                      ⚡ Limited Seats Available
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`slide-${current}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 lg:col-span-2 grid lg:grid-cols-2 gap-8 w-full"
              >
                {/* LEFT: Normal Slide */}
                <div className="text-center lg:text-left mt-8 md:mt-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 leading-snug mb-4">
                    {slides[current].title}
                    <span className="text-primary">
                      {slides[current].highlight}
                    </span>
                  </h2>
                  <p className="text-gray-600  text-base sm:text-lg mb-6 leading-relaxed">
                    {slides[current].desc}
                  </p>
                  <ul className="space-y-2 mb-8 text-gray-700 text-sm sm:text-base text-start lg:text-start">
                    {slides[current].features.map((feature, i) => (
                      <li key={i}>✔ {feature}</li>
                    ))}
                  </ul>

                  <div className="flex justify-center lg:justify-start">
                    <a
                      href="#"
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                    >
                      Join Workshop Now
                    </a>
                  </div>
                </div>

                {/* RIGHT: Image */}
                <div className="flex  justify-center lg:justify-end items-center border-blue-500">
                  <img
                    src={slides[current].image}
                    alt={slides[current].title}
                    className="
    w-full max-w-lg lg:max-w-xl
    rounded-lg
    shadow-md
    border-2 border-blue-500
    transition-all duration-300 ease-in-out
    hover:scale-105
    hover:shadow-xl
    hover:border-blue-600
  "
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
