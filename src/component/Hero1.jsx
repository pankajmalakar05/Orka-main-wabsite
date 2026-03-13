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


import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import video from "../assets/Orka-images/Frame 5.jpg";
 import image5 from "../assets/Orka-images/Frame 5.jpg";

const Hero1 = () => {

  return (
    <section className="w-full bg-black flex justify-center overflow-hidden pt-18 md:pt-0">
      <motion.img
        src={image5}
        alt="Frame 5"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="w-full object-cover"
      />
    </section>
  );
};

export default Hero1;