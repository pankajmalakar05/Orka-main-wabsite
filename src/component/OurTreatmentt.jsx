import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import treatment1 from "../assets/Orka-images/imageorka11.jpeg";
import treatment2 from "../assets/Orka-images/imageorka10.jpeg";
import treatment3 from "../assets/Orka-images/imageorka9.jpeg";

const treatments = [
  {
    title: "Our Promise",
    desc: "Crafted to deliver exceptionally smooth results, gentle skin care, and a truly premium waxing experience that combines performance with comfort.",
  },
  {
    title: "Superior Grip Technology",
    desc: "Our advanced, high-performance formula is designed to grip even the shortest and most stubborn hair from the root, ensuring cleaner removal, reduced breakage, and longer-lasting smoothness with every application.",
  },
  {
    title: "Skin Nourishing Care",
    desc: "Enriched with carefully selected skin-loving ingredients that help maintain natural softness, support healthy-looking skin, and leave a radiant glow after every use.",
  },
];

const OurTreatmentt = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-[#e9e1d8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3e2723]">
            Elevating Your Waxing Experience
          </h2>

        <p
  className="
    mt-4
    md:mt-6
    text-[#6d4c41]
    text-sm
    sm:text-base
    md:text-lg
    leading-relaxed
    px-4
    md:px-0
    text-justify
  "
>
  Experience the perfect blend of performance, precision, and skin-loving care crafted for modern beauty standards.
</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 md:gap-16 items-center mt-16 md:mt-20 lg:mt-24">
          
          <div className="relative h-[420px] sm:h-[480px] md:h-[520px] flex justify-center lg:block">
            
            <motion.img
              src={treatment1}
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="absolute w-[200px] sm:w-[230px] md:w-[250px] 
              h-[260px] sm:h-[300px] md:h-[320px] 
              object-cover rounded-2xl shadow-xl left-2 sm:left-6 md:left-10"
            />

            <motion.img
              src={treatment2}
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-32 sm:top-36 md:top-40 
              left-28 sm:left-40 md:left-44 
              w-[200px] sm:w-[230px] md:w-[250px] 
              h-[260px] sm:h-[300px] md:h-[320px] 
              object-cover rounded-2xl shadow-xl"
            />

            <motion.img
              src={treatment3}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-16 sm:top-20 md:top-20 
              left-14 sm:left-20 md:left-20 
              w-[230px] sm:w-[260px] md:w-[300px] 
              h-[280px] sm:h-[320px] md:h-[360px] 
              object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-8 md:space-y-10">
            {treatments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 10,
                  boxShadow: "0px 20px 45px rgba(0,0,0,0.08)",
                }}
                className="p-6 sm:p-8 bg-white rounded-2xl border border-[#e0d6cf] transition-all"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#4e342e]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-[#6d4c41] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 lg:mt-28 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#3e2723]">
            Feel the Difference From the First Application
          </h3>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 sm:px-10 py-3 sm:py-4 bg-[#4e342e] text-white rounded-full hover:bg-[#3e2723] transition"
            onClick={() => {
              window.location.href = "/product";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Explore Our Product
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default OurTreatmentt;