// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import video from "../assets/Orka-images/orkaprofessional.video.mp4";

// const Hero1 = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const videoElement = videoRef.current;
//       if (!videoElement) return;

//       const rect = videoElement.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if video viewport me hai
//       const isVisible = rect.top < windowHeight && rect.bottom > 0;

//       if (isVisible) {
//         if (videoElement.paused) {
//           videoElement.play().catch(() => {});
//         }
//       } else {
//         if (!videoElement.paused) {
//           videoElement.pause();
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Initial check
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section className="w-full bg-black flex justify-center overflow-hidden">
//       <motion.video
//         ref={videoRef}
//         src={video}
//         muted
//         playsInline
//         initial={{ scale: 1.1, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.4 }}
//         className="w-full object-cover"
//       />
//     </section>
//   );
// };

// export default Hero1;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../assets/Orka-images/heropageorkabanner2.jpg";
import waxImg from "../assets/Orka-images/aloveras7.jpg";

// const wax = {
//   id: "aloe-vera",
//   name: "Aloe Vera Liposoluble Wax",
//   price: "₹1350/-",
//   mrp: "₹20%",
//   image: waxImg,
// };

// const handleScrollTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

const Hero1 = () => {
  return (
    <section className="w-full relative overflow-hidden pt-18 md:pt-14">
      {/* Background Hero Image */}
      <motion.img
        src={heroBg}
        alt="Hero Background"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="w-full h-auto md:h-[120vh] object-contain md:object-cover"
      />

      {/* Left Side Card */}
      {/* <div className="absolute top-[78%] left-3 md:left-10 lg:left-39 transform -translate-y-1/2 pb-10"> */}
{/* <Link to={`/product/${wax.id}`} onClick={handleScrollTop}>
  <motion.div
    initial={{ x: -60, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.6, ease: "easeOut" }}
    className="bg-white shadow-lg rounded-xl p-2 md:p-2 md:pb-2 w-28 md:w-55 cursor-pointer hover:scale-105 transition-transform duration-300"
  > */}
            {/* Product Image */}
            {/* <img
              src={wax.image}
              alt={wax.name}
              className="w-full h-16 md:h-43 object-cover rounded-lg mb-1"
            /> */}

            {/* Product Name */}
            {/* <h3 className="text-[#3e2723] font-semibold text-[9px] md:text-sm mb-1">
              {wax.name}
            </h3> */}

            {/* Price & MRP */}
            {/* <div className="flex items-center gap-1">
              <span className="text-[9px] md:text-xl font-bold text-[#3e2723]">
                {wax.price}
              </span>
              <span className="text-[9px] md:text-base text-gray-400 line-through">
                {wax.mrp}
              </span>
            </div> */}
          {/* </motion.div>
        </Link> */}
      {/* </div> */}
    </section>
  );
};

export default Hero1;
