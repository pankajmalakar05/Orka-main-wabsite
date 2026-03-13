import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";

import aboutimage1 from "../assets/Orka-images/aboutimage1.png";
import aboutimage2 from "../assets/Orka-images/aboutimage2.jpg";
import aboutimage3 from "../assets/Orka-images/aboutimage3.jpg";
import aboutimage4 from "../assets/Orka-images/aboutimage4.jpg";


const About = ({ refProp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
 const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <section ref={refProp}       className={`
        bg-[#e9e1d8] 
        overflow-hidden 
        ${isAboutPage ? "pt-24" : "pt-10"} 
        pb-10
      `}
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        <div className="relative h-[520px] hidden md:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutimage1})` }}
          />

          <motion.img
            src={aboutimage2}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute -right-1 bottom-2w-140 h-140 object-cover shadow-2xl z-10 rounded-bl-[290px]"
          />
        </div>

        <div>
          <div className="text-center md:text-center lg:text-left pt-0">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#5d4037] mb-6">
              About us
            </h2>

            <p
              className="
    text-[#7b5e57]
    leading-relaxed
    mb-6
    max-w-full
    md:max-w-lg
    lg:max-w-md
    mx-auto
    lg:mx-0
    px-4
    lg:px-0
    text-justify
  "
            >
              We specialize in manufacturing and supplying premium quality
              Liposoluble Wax products that deliver smooth, long-lasting
              results. Our products are developed using skin-friendly
              ingredients and tested formulas to ensure safety, performance, and
              consistency.
            </p>
          </div>

          <div className="flex justify-center md:justify-start mb-6">
            <button
              className="border border-[#5d4037] px-6 py-3 text-[#5d4037] hover:bg-[#5d4037] hover:text-white transition"
              onClick={() => (window.location.href = "/about")}
            >
              Read More
            </button>
          </div>
          <div className="flex gap-16 mt-10 mb-10">
            <div>
              <motion.h3
                className="text-3xl font-semibold text-[#5d4037]"
                initial={{ scale: 1 }}
                animate={isInView ? { scale: [1, 1.6, 1.2, 1.4, 1] } : {}}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                789+
              </motion.h3>
              <p className="text-[#7b5e57]">Happy Customer</p>
            </div>

            <div>
              <motion.h3
                className="text-3xl font-semibold text-[#5d4037]"
                initial={{ scale: 1 }}
                animate={isInView ? { scale: [1, 1.6, 1.2, 1.4, 1] } : {}}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                10+
              </motion.h3>
              <p className="text-[#7b5e57]">Year Experience</p>
            </div>
          </div>

          <div className="flex gap-6 items-end">
            <motion.img
              src={aboutimage3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-44 h-32 object-cover shadow-xl"
            />

            <motion.img
              src={aboutimage4}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-36 h-44 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
