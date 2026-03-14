// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { FaSpa, FaHandSparkles, FaLeaf, FaBriefcase } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import sideImage from "../assets/Orka-images/image12.jpg";
// import aboutimage2 from "../assets/Orka-images/imageorkanew1.png";
// import aboutimage3 from "../assets/Orka-images/imageorkanew2.png";

// import image1 from "../assets/Orka-images/image12.jpg";
// import image2 from "../assets/Orka-images/darkchocolates2.jpg";
// import image3 from "../assets/Orka-images/charcoal.jpg.jpeg";
// import image4 from "../assets/Orka-images/WHITECHOCOLATES1.jpg";
// import image5 from "../assets/Orka-images/aloveras7.jpg";
// import image6 from "../assets/Orka-images/straberrys6.jpg";
// import image7 from "../assets/Orka-images/greenapples3.jpg";
// import image8 from "../assets/Orka-images/kesers4.jpg";
// import image9 from "../assets/Orka-images/koreans5.jpg";
// import image10 from "../assets/Orka-images/orka/orange_extract_img.jpg";

// const products = [
//   {
//     icon: <FaSpa />,
//     title: "Legs & Body Liposoluble Wax",
//     desc: "Premium body wax for smooth and long-lasting results. Gentle on skin, tough on hair.",
//   },
//   {
//     icon: <FaHandSparkles />,
//     title: "Arms & Underarm Liposoluble Wax",
//     desc: "Gentle formula for sensitive skin areas. Effective hair removal with minimal irritation.",
//   },
//   {
//     icon: <FaLeaf />,
//     title: "Face & Sensitive Liposoluble Wax",
//     desc: "Specially formulated for delicate facial skin. Low irritation, smooth finish. Ideal for upper lip, eyebrows, and bikini line.",
//   },
//   {
//     icon: <FaBriefcase />,
//     title: "Professional Salon Liposoluble Wax",
//     desc: "Bulk packaging for salons & beauty professionals. High-performance wax for efficient hair removal and satisfied clients.",
//   },
// ];

// const waxDetails = [
//   {
//     title: " Dark Chocolate Liposoluble Wax",
//     desc: "Indulge in a luxurious waxing experience with our Chocolate Liposoluble Wax designed for smooth and comfortable hair removal. The rich formula glides effortlessly while caring for the skin during the process. It helps maintain softness and leaves skin feeling nourished and refreshed. Enjoy long-lasting smoothness with a naturally healthy glow.",
//     image: image2,
//     price: "₹1350/-",
//   },
//   {
//     title: "Charcoal Liposoluble Wax",
//     desc: "Experience deep cleansing care with our Charcoal Liposoluble Wax for effective hair removal. Its purifying formula helps leave skin feeling fresh and clear after waxing. Perfect for maintaining a clean, smooth, and refined skin surface. Reveals soft, refreshed skin with every use.",
//     image: image3,
//     price: "₹1350/-",
//   },
//   {
//     title: "White Chocolate Liposoluble Wax",
//     desc: "Treat your skin to a gentle and indulgent waxing experience with White Chocolate Liposoluble Wax. Designed to remove hair smoothly while maintaining skin comfort. Helps keep the skin feeling soft and refreshed after every session. Leaves behind a naturally smooth and radiant finish.",
//     image: image4,
//     price: "₹1350/-",
//   },
//   {
//     title: "Aloe Vera Liposoluble Wax",
//     desc: "A soothing waxing solution crafted for a calm and comfortable hair removal experience. The gentle formula helps maintain skin softness during the waxing process. Ideal for keeping the skin feeling relaxed and refreshed. Leaves the skin smooth, hydrated, and well cared for.",
//     image: image5,
//     price: "₹1350/-",
//   },
//   {
//     title: "Strawberry Liposoluble Wax",
//     desc: "Enjoy a refreshing waxing experience with our Strawberry Liposoluble Wax. Designed to remove hair effectively while leaving skin feeling clean and smooth. Helps maintain a bright and fresh look after every session. Reveals soft skin with a naturally vibrant feel.",
//     image: image6,
//     price: "₹1350/-",
//   },
//   {
//     title: "Green Apple Liposoluble Wax",
//     desc: "Refresh your waxing routine with the crisp care of Green Apple Liposoluble Wax. Its light formula helps remove hair while maintaining a clean skin feel. Designed to leave skin feeling fresh and revitalized. Enjoy smooth skin with a naturally refreshed finish.",
//     image: image7,
//     price: "₹1350/-",
//   },
//   {
//     title: "Kesar Liposoluble Wax",
//     desc: "Experience a touch of luxury with our Kesar Liposoluble Wax for smooth hair removal. Crafted to maintain skin softness and comfort during waxing. Helps enhance the skin’s natural radiance after every use. Leaves the skin feeling silky, smooth, and refreshed.",
//     image: image8,
//     price: "₹1350/-",
//   },
//   {
//     title: "Korean Liposoluble Wax",
//     desc: "Inspired by modern skincare rituals for a refined waxing experience. Designed to remove hair smoothly while maintaining skin comfort. Helps keep skin looking clear, fresh, and well cared for. Reveals smooth skin with a healthy, luminous finish.",
//     image: image9,
//     price: "₹1350/-",
//   },
//   {
//     title: "Orange Extract Post Cleanser",
//     desc: "Refresh your skin after waxing with the energizing touch of Orange Extract. The cleanser helps remove wax residue while revitalizing the skin. Leaves the skin feeling clean, fresh, and smooth. A bright finish for a comfortable post-wax experience.",
//     image: image10,
//     price: "₹900/-",
//   },
//   {
//     title: "Rose Extract Post Cleanser",
//     desc: "Refresh your skin after waxing with the energizing touch of Orange Extract. The cleanser helps remove wax residue while revitalizing the skin. Leaves the skin feeling clean, fresh, and smooth. A bright finish for a comfortable post-wax experience.",
//     image: aboutimage3,
//     price: "₹900/-",
//   },
// ];

// const HomeProduct = () => {
//   const ref = useRef(null);

//   return (
//     <div className="bg-[#e9e1d8] overflow-hidden">
//       {/* --- MAIN HERO SECTION --- */}
//       <section
//         ref={ref}
//         className="relative py-12 md:py-20 px-4 sm:px-6 md:px-10 pt-20 md:pt-28"
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10 md:mb-16">
//             <h2 className="text-3xl md:text-5xl font-semibold text-[#5d4037] mb-4 px-2">
//               🌿 Our Liposoluble Wax Products
//             </h2>
//             <p className="text-[#7b5e57] max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-4">
//               Premium Quality Liposoluble Wax for Professional & Personal Use.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center">
//             <div className="grid sm:grid-cols-2 gap-4 md:gap-8 order-2 lg:order-1">
//               {products.map((product, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   className="border border-[#7b5e57]/40 p-5 md:p-6 bg-white/50 backdrop-blur-md rounded-xl text-center sm:text-left"
//                 >
//                   <div className="text-[#7b5e57] text-3xl md:text-4xl mb-3 flex justify-center sm:justify-start">
//                     {product.icon}
//                   </div>
//                   <h3 className="text-lg md:text-xl font-semibold text-[#5d4037] mb-2">
//                     {product.title}
//                   </h3>
//                   <p className="text-[#7b5e57] text-sm md:text-base leading-relaxed">
//                     {product.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//             <motion.div
//               className="order-1 lg:order-2 flex justify-center"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={image1}
//                 className="
//     w-[280px] h-[300px]
//     sm:w-[320px] sm:h-[350px]
//     md:w-auto md:h-[450px]
//     object-cover
//     rounded-2xl
//     shadow-lg
//   "
//                 alt="Main product"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* --- DETAILED PRODUCTS --- */}
//       <section className="py-10 md:py-20 space-y-20 md:space-y-40">
//         {waxDetails.map((wax, index) => (
//           <div key={index} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
//             <div
//               className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
//             >
//               {/* Image Side */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//                 className={`w-full flex justify-center ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
//               >
//                 <img
//                   src={wax.image}
//                   alt={wax.title}
//                   className="w-full max-w-[500px] h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
//                 />
//               </motion.div>

//               {/* Content Side */}
//               <motion.div
//                 initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//                 className={`w-full text-center md:text-left pt-4 md:pt-0 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
//               >
//                 <h2
//                   className="
//     text-2xl
//     sm:text-3xl
//     md:text-4xl
//     lg:text-5xl
//     font-bold
//     text-[#5d4037]
//     mb-4
//     md:mb-6
//     text-center
//     lg:text-left
//     px-3
//     md:px-0
//   "
//                 >
//                   {wax.title}
//                 </h2>

//                 <p
//                   className="
//     text-[#7b5e57]
//     text-sm
//     sm:text-base
//     md:text-lg
//     lg:text-xl
//     leading-relaxed
//     mb-6
//     md:mb-10
//     px-4
//     md:px-0
//     text-justify
//   "
//                 >
//                   {wax.desc}
//                 </p>

//                 <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
//                   {/* <button
//                     className="px-6 md:px-8 py-3 md:py-4
// text-[#53403d] text-2xl md:text-3xl font-bold
// tracking-wide"
//                   >
//                     {wax.price}
//                   </button> */}
//                   <Link to="/product">
//                     <button className="px-8 md:px-10 py-3 md:py-4 border-2 border-[#5d4037] text-[#5d4037] rounded-full font-semibold hover:bg-[#5d4037] hover:text-white transition-all duration-300">
//                       See Details
//                     </button>
//                   </Link>

//                   {/* Price Button */}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default HomeProduct;

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaSpa, FaHandSparkles, FaLeaf, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import sideImage from "../assets/Orka-images/image12.jpg";
import aboutimage2 from "../assets/Orka-images/imageorkanew1.png";
import aboutimage3 from "../assets/Orka-images/imageorkanew2.png";

import image1 from "../assets/Orka-images/image12.jpg";
import image2 from "../assets/Orka-images/darkchocolates2.jpg";
import image3 from "../assets/Orka-images/charcoal.jpg.jpeg";
import image4 from "../assets/Orka-images/WHITECHOCOLATES1.jpg";
import image5 from "../assets/Orka-images/aloveras7.jpg";
import image6 from "../assets/Orka-images/straberrys6.jpg";
import image7 from "../assets/Orka-images/greenapples3.jpg";
import image8 from "../assets/Orka-images/kesers4.jpg";
import image9 from "../assets/Orka-images/koreans5.jpg";
import image10 from "../assets/Orka-images/orka/orange_extract_img.jpg";

const products = [
  {
    icon: <FaSpa />,
    title: "Legs & Body Liposoluble Wax",
    desc: "Premium body wax for smooth and long-lasting results. Gentle on skin, tough on hair.",
  },
  {
    icon: <FaHandSparkles />,
    title: "Arms & Underarm Liposoluble Wax",
    desc: "Gentle formula for sensitive skin areas. Effective hair removal with minimal irritation.",
  },
  {
    icon: <FaLeaf />,
    title: "Face & Sensitive Liposoluble Wax",
    desc: "Specially formulated for delicate facial skin. Low irritation, smooth finish. Ideal for upper lip, eyebrows, and bikini line.",
  },
  {
    icon: <FaBriefcase />,
    title: "Professional Salon Liposoluble Wax",
    desc: "Bulk packaging for salons & beauty professionals. High-performance wax for efficient hair removal and satisfied clients.",
  },
];

const waxDetails = [
  {
    id: "dark-chocolate",
    title: " Dark Chocolate Liposoluble Wax",
    desc: "Indulge in a luxurious waxing experience with our Chocolate Liposoluble Wax designed for smooth and comfortable hair removal. The rich formula glides effortlessly while caring for the skin during the process. It helps maintain softness and leaves skin feeling nourished and refreshed. Enjoy long-lasting smoothness with a naturally healthy glow.",
    image: image2,
    price: "₹1350/-",
  },
  {
    id: "charcoal",
    title: "Charcoal Liposoluble Wax",
    desc: "Experience deep cleansing care with our Charcoal Liposoluble Wax for effective hair removal. Its purifying formula helps leave skin feeling fresh and clear after waxing. Perfect for maintaining a clean, smooth, and refined skin surface. Reveals soft, refreshed skin with every use.",
    image: image3,
    price: "₹1350/-",
  },
  {
    id: "white-chocolate",
    title: "White Chocolate Liposoluble Wax",
    desc: "Treat your skin to a gentle and indulgent waxing experience with White Chocolate Liposoluble Wax. Designed to remove hair smoothly while maintaining skin comfort. Helps keep the skin feeling soft and refreshed after every session. Leaves behind a naturally smooth and radiant finish.",
    image: image4,
    price: "₹1350/-",
  },
  {
    id: "aloe-vera",
    title: "Aloe Vera Liposoluble Wax",
    desc: "A soothing waxing solution crafted for a calm and comfortable hair removal experience. The gentle formula helps maintain skin softness during the waxing process. Ideal for keeping the skin feeling relaxed and refreshed. Leaves the skin smooth, hydrated, and well cared for.",
    image: image5,
    price: "₹1350/-",
  },
  {
    id: "strawberry",
    title: "Strawberry Liposoluble Wax",
    desc: "Enjoy a refreshing waxing experience with our Strawberry Liposoluble Wax. Designed to remove hair effectively while leaving skin feeling clean and smooth. Helps maintain a bright and fresh look after every session. Reveals soft skin with a naturally vibrant feel.",
    image: image6,
    price: "₹1350/-",
  },
  {
    id: "green-apple",
    title: "Green Apple Liposoluble Wax",
    desc: "Refresh your waxing routine with the crisp care of Green Apple Liposoluble Wax. Its light formula helps remove hair while maintaining a clean skin feel. Designed to leave skin feeling fresh and revitalized. Enjoy smooth skin with a naturally refreshed finish.",
    image: image7,
    price: "₹1350/-",
  },
  {
    id: "kesar",
    title: "Kesar Liposoluble Wax",
    desc: "Experience a touch of luxury with our Kesar Liposoluble Wax for smooth hair removal. Crafted to maintain skin softness and comfort during waxing. Helps enhance the skin’s natural radiance after every use. Leaves the skin feeling silky, smooth, and refreshed.",
    image: image8,
    price: "₹1350/-",
  },
  {
    id: "korean",
    title: "Korean Liposoluble Wax",
    desc: "Inspired by modern skincare rituals for a refined waxing experience. Designed to remove hair smoothly while maintaining skin comfort. Helps keep skin looking clear, fresh, and well cared for. Reveals smooth skin with a healthy, luminous finish.",
    image: image9,
    price: "₹1350/-",
  },
  {
    id: "orange-extract",
    title: "Orange Extract Post Cleanser",
    desc: "Refresh your skin before waxing with the energizing touch of Orange Extract. The cleanser helps remove oils, sweat, and impurities while preparing the skin for a smooth waxing experience. Leaves the skin feeling clean, fresh, and ready for treatment.",
    image: image10,
    price: "₹900/-",
  },
  {
    id: "rose-extract",
    title: "Rose Extract Pre Cleanser",
    desc: "Refresh your skin after waxing with the energizing touch of Orange Extract. The cleanser helps remove wax residue while revitalizing the skin. Leaves the skin feeling clean, fresh, and smooth. A bright finish for a comfortable post-wax experience.",
    image: aboutimage3,
    price: "₹900/-",
  },
];

const handleScrollCenter = () => {
  sectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

const HomeProduct = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);

  return (
    <div className="bg-[#e9e1d8] overflow-hidden">
      {/* ---  HERO SECTION --- */}
      <section
        ref={ref}
        className="relative py-12 md:py-20 px-4 sm:px-6 md:px-10 pt-20 md:pt-28"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#5d4037] mb-4 px-2">
              🌿 Our Products
            </h2>
            <p className="text-[#7b5e57] max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-4">
              Premium Quality Liposoluble Wax for Professional & Personal Use.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-8 order-2 lg:order-1">
              {products.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="border border-[#7b5e57]/40 p-5 md:p-6 bg-white/50 backdrop-blur-md rounded-xl text-center sm:text-left"
                >
                  <div className="text-[#7b5e57] text-3xl md:text-4xl mb-3 flex justify-center sm:justify-start">
                    {product.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#5d4037] mb-2">
                    {product.title}
                  </h3>
                  <p className="text-[#7b5e57] text-sm md:text-base leading-relaxed">
                    {product.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={image1}
                className="
    w-[280px] h-[300px]      
    sm:w-[320px] sm:h-[350px] 
    md:w-full md:max-w-[520px] md:h-[420px] 
    lg:w-auto lg:h-[450px] 
    object-cover 
    rounded-2xl 
    shadow-lg
  "
                alt="Main product"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- DETAILED PRODUCTS --- */}
      <section
        ref={sectionRef}
        className="py-10 md:py-20 space-y-20 md:space-y-32"
      >
        {" "}
        {waxDetails.map((wax, index) => (
          <div key={index} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div
              className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`w-full flex justify-center ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
              >
                <img
                  src={wax.image}
                  alt={wax.title}
                  className="w-full max-w-[500px] h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
                />
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`w-full text-center md:text-left pt-4 md:pt-0 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
              >
                <h2
                  className="
    text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    font-bold
    text-[#5d4037]
    mb-4
    md:mb-6
    text-center
    lg:text-left
    px-3
    md:px-0
  "
                >
                  {wax.title}
                </h2>

                <p
                  className="
    text-[#7b5e57]
    text-sm
    sm:text-base
    md:text-lg
    lg:text-xl
    leading-relaxed
    mb-6
    md:mb-10
    px-4
    md:px-0
    text-justify
  "
                >
                  {wax.desc}
                </p>

                <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                  {/* <button
                    className="px-6 md:px-8 py-3 md:py-4 
text-[#53403d] text-2xl md:text-3xl font-bold 
tracking-wide"
                  >
                    {wax.price}
                  </button> */}
                  <Link to={`/product/${wax.id}`} onClick={handleScrollCenter}>
                    <button className="px-8 md:px-10 py-3 md:py-4 border-2 border-[#5d4037] text-[#5d4037] rounded-full font-semibold hover:bg-[#5d4037] hover:text-white transition-all duration-300">
                      See Details
                    </button>
                  </Link>

                  {/* Price Button */}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeProduct;
