// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import image1 from "../assets/Orka-images/iamge1.avif";

// const Hero = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const scaleRaw = useTransform(scrollYProgress, [0, 0.6], [0.6, 1]);
//   const widthRaw = useTransform(scrollYProgress, [0, 0.6], ["40%", "100%"]);

//   const scale = useSpring(scaleRaw, { stiffness: 100, damping: 20 });
//   const width = useSpring(widthRaw, { stiffness: 100, damping: 20 });

//   const cardYRaw = useTransform(scrollYProgress, [0.4, 0.75], [300, 0]);
//   const cardOpacityRaw = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);
//   const cardScaleRaw = useTransform(scrollYProgress, [0, 0.6], [0.6, 1]);

//   const cardY = useSpring(cardYRaw, { stiffness: 120, damping: 25 });
//   const cardOpacity = useSpring(cardOpacityRaw, { stiffness: 120, damping: 25 });
//   const cardScale = useSpring(cardScaleRaw, { stiffness: 110, damping: 22 });

//   return (
//     <section ref={ref} className="relative h-[350vh] bg-[#e9e1d8]">
//       <div className="sticky top-0 h-screen flex items-center justify-center">
        
//         <motion.div
//           style={{ scale, width }}
//           className="relative h-screen overflow-hidden"
//         >
//           <motion.img
//             src={image1}
//             alt="Hero"
//             className="w-full h-full object-cover"
//           />

//           <motion.div
//             style={{ y: cardY, opacity: cardOpacity, scale: cardScale }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <div className="relative w-[420px] bg-[#8f8b86] text-white text-center px-8 pb-12 pt-7 shadow-xl">
              
//               <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full h-[160px] border-[15px] border-[#8f8b86] pointer-events-none"></div>

//               <p className="tracking-[4px] text-xs mb-4">EVERHOUSE</p>

//               <h2 className="text-2xl font-light leading-snug mb-5">
//                 YOUR MOMENT OF GLOW <br />
//                 BEGINS HERE
//               </h2>

//               <p className="text-xs opacity-90 mb-6 leading-relaxed">
//                 Let’s make this about you. A quiet moment for thoughtful treatments
//                 designed to restore balance and highlight your natural charm.
//                 Because feeling good starts here.
//               </p>

//               <button className="bg-white text-[#3E1103] px-6 py-2 text-xs tracking-wider hover:bg-[#3E1103] hover:text-white transition duration-500">
//                 FIND US
//               </button>
//             </div>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react'

const Hero = () => {
  return (
    <div>
      
    </div>
  )
}

export default Hero

