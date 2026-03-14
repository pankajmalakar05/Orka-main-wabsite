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
import heroBg from "../assets/Orka-images/herobgimage1.jpg";
import waxImg from "../assets/Orka-images/aloveras7.jpg";

const wax = {
  id: 1,
  name: "Aloe Vera Liposoluble Wax",
  price: "₹1350/-",
  mrp: "₹20%",
  image: waxImg,
};

const Hero1 = () => {
  return (
    <section className="w-full relative">
      {/* Background Hero Image */}
      <motion.img
        src={heroBg}
        alt="Hero Background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="w-full h-[120vh] object-cover"
      />

      {/* Left Side Card */}
      <div className="absolute top-[75%] left-4 md:left-45 transform -translate-y-1/2">
        <Link to={`/product/${wax.id}`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }} // slide in from left
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-lg rounded-xl p-4 md:p-2 w-52 md:w-55 cursor-pointer hover:scale-105 transition-transform"
          >
            {/* Product Image */}
            <img
              src={wax.image}
              alt={wax.name}
              className="w-full h-40 md:h-43 object-cover rounded-lg mb-0"
            />

            {/* Product Name */}
            <h3 className="text-[#3e2723] font-semibold text-base md:text-sm mb-2">
              {wax.name}
            </h3>

            {/* Price & MRP */}
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-xl font-bold text-[#3e2723]">
                {wax.price}
              </span>
              <span className="text-sm md:text-base text-gray-400 line-through">
                {wax.mrp}
              </span>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero1;