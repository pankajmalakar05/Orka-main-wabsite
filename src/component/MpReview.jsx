import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";
import bgimage2 from "../assets/Orka-images/orkaprofessionalbannerreview.jpeg";

const reviews = [
  {
    text: "The Liposoluble Wax quality is outstanding. Smooth application and no irritation. Our clients love the results every time.",
    name: "Salon Professional",
    rating: 5,
  },
  {
    text: "Consistency is what impressed us most. Same performance in every batch. Very reliable product.",
    name: "Beauty Studio Owner",
    rating: 4,
  },
  {
    text: "Faster treatments, better finish, and happier customers. It improved our workflow significantly.",
    name: "Senior Therapist",
    rating: 5,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MpReview = () => {
  return (
    <div className="w-full">
      
      <section
className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover px-4 sm:px-6 py-16 sm:py-20 md:py-24"
        style={{ backgroundImage: `url(${bgimage2})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full"
        >
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              variants={cardAnimation}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-white/40 relative"
            >
              <RiDoubleQuotesL className="text-3xl sm:text-4xl text-[#5d4037] absolute -top-5 left-5" />

              <div className="flex items-center mb-3 sm:mb-4 mt-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 mr-1 text-sm sm:text-base" />
                ))}
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                {item.text}
              </p>

              <span className="font-semibold text-gray-900 block mt-2 text-sm sm:text-base">
                — {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative bg-[#e9e1d8] py-20 sm:py-24 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#5d4037] mb-5 sm:mb-6">
            Why Professionals Trust Us
          </h3>

          <p className="text-[#7b5e57] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our formulations are engineered for performance, comfort, and
            reliability. Designed for professionals who expect excellence in
            every treatment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MpReview;