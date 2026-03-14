// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaSpa,
//   FaHandSparkles,
//   FaLeaf,
//   FaBriefcase,
//   FaPlus,
//   FaMinus,
// } from "react-icons/fa";

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
// import aboutimage3 from "../assets/Orka-images/imageorkanew2.png";

// const products = [
//   {
//     icon: <FaSpa />,
//     title: "Legs & Body Wax",
//     desc: "Premium body wax for smooth results. Gentle on skin, tough on hair.",
//   },
//   {
//     icon: <FaHandSparkles />,
//     title: "Arms & Underarm Wax",
//     desc: "Gentle formula for sensitive skin areas. Minimal irritation.",
//   },
//   {
//     icon: <FaLeaf />,
//     title: "Face & Sensitive Wax",
//     desc: "Specially formulated for delicate facial skin. Smooth finish.",
//   },
//   {
//     icon: <FaBriefcase />,
//     title: "Professional Salon Wax",
//     desc: "Bulk packaging for beauty professionals. High-performance.",
//   },
// ];

// const waxDetails = [
//   {
//     title: " Dark Chocolate Liposoluble Wax",
//     desc: "Indulge in a luxurious waxing experience with our Chocolate Wax designed for smooth and comfortable hair removal. The rich formula glides effortlessly while caring for the skin during the process. It helps maintain softness and leaves skin feeling nourished and refreshed. Enjoy long-lasting smoothness with a naturally healthy glow.",
//     image: image2,
//     howTo:
//       "Apply Orka Professional pre-wax cleanser on the desired area. Remove the lid and place the wax container in a wax heater at  heating until melted and then lowering to a working temperature. Apply a coat of wax in the direction of hair growth on the desired area using a spatula. Place your finger over the applied wax and press. Keeping the skin taut, pull away the strip in the opposite direction with a quick flick. Gently massage the waxed area using Orka Professional post-wax lotion for best results.",
//     ingredients:
//       "Cocoa Powder, Glyceryl Rosinate, Rosin, Cera Alba, Cocoa Seed Butter,  Paraffin Wax, Paraffin Oil, CI 77891, CI 77019",
//     price: "₹1350/-",
//   },
//   {
//     title: "Charcoal  Liposoluble Wax",
//     desc: "Experience deep cleansing care with our Charcoal Liposoluble Wax for effective hair removal. Its purifying formula helps leave skin feeling fresh and clear after waxing. Perfect for maintaining a clean, smooth, and refined skin surface. Reveals soft, refreshed skin with every use.",
//     image: image3,
//     howTo:
//       "Apply Orka Professional pre-wax cleanser on the desired area. Remove the lid and place the wax container in a wax heater at maximum temperature until the wax reaches a liquid consistency. Apply a coat of wax in the direction of hair growth on the desired area using a spatula. Place your finger over the applied wax and press. Keeping the skin taut, pull away the strip in the opposite direction at an angle for a smooth and silky finish. Gently massage the waxed area using Orka Professional post-wax lotion for best results.",
//     ingredients:
//       "INGREDIENTS:Glyceryl Rosinate, Select Vegetable Oil, Cera Alba, Cocoa Seed Butter, Titanium Dioxide (CI 77891), Fragrance, CI 77019",
//     price: "₹1350/-",
//   },
//   {
//     title: "White Chocolate Liposoluble Wax",
//     desc: "Treat your skin to a gentle and indulgent waxing experience with White Chocolate Liposoluble Wax. Designed to remove hair smoothly while maintaining skin comfort. Helps keep the skin feeling soft and refreshed after every session. Leaves behind a naturally smooth and radiant finish.",
//     image: image4,
//     howTo:
//       "Apply Orka Professional pre-wax cleanser on the desired area. Remove the lid and place the wax container in a wax heater at  heating until melted and then lowering to a working temperature. Apply a coat of wax in the direction of hair growth on the desired area using a spatula. Place your finger over the applied wax and press. Keeping the skin taut, pull away the strip in the opposite direction with a quick flick. Gently massage the waxed area using Orka Professional post-wax lotion for best results.",
//     ingredients:
//       "Glycerly Rosinatee\
//     Select Vegetable Oil Cera Alba Cocoa Seed Butter, Titanium Dioxide CI 77891 Fragrance CI 77019",
//     price: "₹1350/-",
//   },
//   {
//     title: "Aloe Vera Liposoluble Wax",
//     desc: "A soothing waxing solution crafted for a calm and comfortable hair removal experience. The gentle formula helps maintain skin softness during the waxing process. Ideal for keeping the skin feeling relaxed and refreshed. Leaves the skin smooth, hydrated, and well cared for.",
//     image: image5,
//     howTo:
//       "Apply Orka Professional pre-wax cleanser on the desired area. Remove the lid and place the wax container in a wax heater at  heating until melted and then lowering to a working temperature. Apply a coat of wax in the direction of hair growth on the desired area using a spatula. Place your finger over the applied wax and press. Keeping the skin taut, pull away the strip in the opposite direction with a quick flick. Gently massage the waxed area using Orka Professional post-wax lotion for best results.",
//     ingredients:
//       "Aloe Extracts, Glyceryl rosinate, Castor (Ricinus Communis) Seed Oil, Perfume, Titanium dioxide, Zinc oxide, Aloe Barbadensis (ALOE) Extract, Pentaerythrityl tetra-di-t-butyl hydroxyhydrocinnamate, CI 470 00, CI 61565",
//     price: "₹1350/-",
//   },
//   {
//     title: "Strawberry Liposoluble Wax",
//     desc: "Enjoy a refreshing waxing experience with our Strawberry Liposoluble Wax. Designed to remove hair effectively while leaving skin feeling clean and smooth. Helps maintain a bright and fresh look after every session. Reveals soft skin with a naturally vibrant feel.",
//     image: image6,
//     howTo:
//       "Apply Orka Professional pre-wax cleanser on the desired area. Remove the lid and place the wax container in a wax heater at maximum temperature until the wax reaches a liquid consistency. Apply a coat of wax in the direction of hair growth on the desired area using a spatula. Place your finger over the applied wax and press. Keeping the skin taut, pull away the strip in the opposite direction at an angle for a smooth and silky finish. Gently massage the waxed area using Orka Professional post-wax lotion for best results.",
//     ingredients:
//       "Rosin, Coco Butter, Edible Oil, Titanium Zinc Dioxide, Fragrance, Strawberry Extract.",
//     price: "₹1350/-",
//   },
//   {
//     title: "Green Apple Liposoluble Wax",
//     desc: "Refresh your waxing routine with the crisp care of Green Apple Liposoluble Wax. Its light formula helps remove hair while maintaining a clean skin feel. Designed to leave skin feeling fresh and revitalized. Enjoy smooth skin with a naturally refreshed finish.",
//     image: image7,
//     howTo:
//       "Apply Orka Professional pre-wax cleanser on the desired area. Remove the lid and place the wax container in a wax heater at heating until melted and then lowering to a working temperature. Apply a coat of wax in the direction of hair growth on the desired area using a spatula. Place your finger over the applied wax and press. Keeping the skin taut, pull away the strip in the opposite direction with a quick flick. Gently massage the waxed area using Orka Professional post-wax lotion for best results.",
//     ingredients:
//       "Green apple essence, Glycerly Rosinate, Rosin, Cera Alba, Cocoa Seed Butter, Paraffin Wax, Paraffin Oil, CI 77891, CI 77019",
//     price: "₹1350/-",
//   },
//   {
//     title: "Kesar (Saffron) Liposoluble Wax",
//     desc: "Experience a touch of luxury with our Kesar Liposoluble Wax for smooth hair removal. Crafted to maintain skin softness and comfort during waxing. Helps enhance the skin’s natural radiance after every use. Leaves the skin feeling silky, smooth, and refreshed.",
//     image: image8,
//     howTo:
//       "Apply Orka Professional pre-wax cleanser on the desired area. Remove the lid and place the wax container in a wax heater at heating until melted and then lowering to a working temperature. Apply a coat of wax in the direction of hair growth on the desired area using a spatula. Place your finger over the applied wax and press. Keeping the skin taut, pull away the strip in the opposite direction with a quick flick. Gently massage the waxed area using Orka Professional post-wax lotion for best results.",
//     ingredients:
//       "Kesar Powder, Glycerly Rosinate, Rosin, Cera Alba, Cocoa Seed Butter, Paraffin Wax, Paraffin Oil, CI 77891, CI 77019",
//     price: "₹1350/-",
//   },
//   {
//     title: "Korean Liposoluble Wax",
//     desc: "Inspired by modern skincare rituals for a refined waxing experience. Designed to remove hair smoothly while maintaining skin comfort. Helps keep skin looking clear, fresh, and well cared for. Reveals smooth skin with a healthy, luminous finish.",
//     image: image9,
//     howTo:
//       "Apply Orka Professional pre-wax cleanser on the desired area. Remove the lid and place the wax container in a wax heater at heating until melted and then lowering to a working temperature. Apply a coat of wax in the direction of hair growth on the desired area using a spatula. Place your finger over the applied wax and press. Keeping the skin taut, pull away the strip in the opposite direction with a quick flick. Gently massage the waxed area using Orka Professional post-wax lotion for best results.",
//     ingredients:
//       "Bees Wax, Titanium Di Oxide, Korean Ginseng, Lanolin Perfume, Olive Oil, Glycerin, Shea Butter, Gylcerin Rosinate, Argan Oil.",
//     price: "₹1350/-",
//   },
//   {
//     title: "Rose Extract Post Cleanser",
//     desc: "Complete your waxing routine with the calming touch of Rose Extract. This post cleanser gently removes residue while refreshing the skin. Helps leave the skin feeling soothed and balanced. A perfect finish for a clean, soft, and refreshed feel.",
//     image: aboutimage3,
//     howTo:
//       "Apply to a cotton pad and gently cleanse the area to remove oils, sweat, and impurities. Allow skin to dry completely before waxing. No rinsing required.",
//     ingredients:
//       "Parafinnum liquidum IP citrus orange (orange), melaleuca alternifolia (tea tree oil), pogostemon cabling (patchouli), pelargonium graveolen (geranium), citrus sinensis (orange)",
//     price: "₹900/-",
//   },
//   {
//     title: "Orange Extract Post Cleanser",
//     desc: "Refresh your skin after waxing with the energizing touch of Orange Extract. The cleanser helps remove wax residue while revitalizing the skin. Leaves the skin feeling clean, fresh, and smooth. A bright finish for a comfortable post-wax experience.",
//     image: image10,
//     howTo:
//       "Apply to the treated area with a cotton pad after waxing to remove residue and cleanse the skin. Gently wipe—do not rub. No rinsing required unless directed.",
//     ingredients:
//       "Parafinnum liquidum IP citrus orange (orange), melaleuca alternifolia (tea tree oil), pogostemon cabling (patchouli), pelargonium graveolen (geranium), citrus sinensis (orange)",
//     price: "₹900/-",
//   },
// ];

// const ProductAccordion = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="border-b border-[#5d4037]/20">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full py-4 flex justify-between items-center text-[#5d4037] font-semibold text-lg focus:outline-none"
//       >
//         <span>{title}</span>
//         {isOpen ? (
//           <FaMinus className="text-sm" />
//         ) : (
//           <FaPlus className="text-sm" />
//         )}
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="overflow-hidden"
//           >
//             <p className="pb-5 text-[#7b5e57] leading-relaxed text-base">
//               {content}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const Product = () => {
//   const ref = useRef(null);

//   return (
//     <div className="bg-[#e9e1d8] overflow-hidden">
//       {/* --- HERO SECTION --- */}
//       <section
//         ref={ref}
//         className="relative py-12 md:py-20 px-4 sm:px-6 md:px-10 pt-20 md:pt-28"
//       >
//         <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16 pt-16 md:pt-24">
//           <h2 className="text-3xl md:text-5xl font-semibold text-[#5d4037] mb-4">
//             🌿 Our Liposoluble Wax Products
//           </h2>
//           <p className="text-[#7b5e57] max-w-2xl mx-auto text-sm md:text-lg">
//             Premium Quality Liposoluble Wax for Professional & Personal Use.
//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center">
//           {/* Mobile par image pehle dikhane ke liye order classes use ki hain */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="flex justify-center lg:order-2"
//           >
//             <img
//               src={image1}
//               className="
//     w-[280px] h-[300px]
//     mx-auto
//     sm:w-[300px] sm:h-[350px]
//     md:w-[320px] md:h-[400px]
//     object-cover
//     rounded-[18px]
//     shadow-lg
//   "
//               alt="Main Hero"
//             />
//           </motion.div>

//           <div className="grid sm:grid-cols-2 gap-4 md:gap-8 lg:order-1">
//             {products.map((p, i) => (
//               <motion.div
//                 key={i}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 className="border border-[#7b5e57]/40 p-5 md:p-6 bg-white/50 backdrop-blur-md rounded-[18px] text-center sm:text-left"
//               >
//                 <div className="text-[#7b5e57] text-3xl md:text-4xl mb-3 flex justify-center sm:justify-start">
//                   {p.icon}
//                 </div>
//                 <h3 className="text-lg md:text-xl font-semibold text-[#5d4037] mb-2">
//                   {p.title}
//                 </h3>
//                 <p className="text-[#7b5e57] text-sm md:text-base leading-relaxed">
//                   {p.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- DETAILED PRODUCTS --- */}
//       <section className="py-10 md:py-20 space-y-20 md:space-y-32">
//         {waxDetails.map((wax, index) => {
//           const isEven = index % 2 !== 0;

//           return (
//             <div
//               key={index}
//               className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12"
//             >
//               <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-start">
//                 {/* Image Side */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9, x: isEven ? 30 : -30 }}
//                   whileInView={{ opacity: 1, scale: 1, x: 0 }}
//                   transition={{ duration: 0.7 }}
//                   className={`w-full flex justify-center ${isEven ? "md:order-2" : "md:order-1"}`}
//                 >
//                   <img
//                     src={wax.image}
//                     alt={wax.title}
//                     className="w-full max-w-[500px] h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
//                   />
//                 </motion.div>

//                 {/* Content Side */}
//                 {/* Content Side */}
//                 <motion.div
//                   initial={{ opacity: 0, x: isEven ? -30 : 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.7 }}
//                   className={`w-full pt-2 px-4 md:px-0 text-center md:text-left ${
//                     isEven ? "md:order-1 md:text-right" : "md:order-2"
//                   }`}
//                 >
//                   <h2 className="text-2xl md:text-5xl font-bold text-[#5d4037] mb-3 md:mb-4 text-center md:text-left">
//                     {wax.title}
//                   </h2>

//                   <p className="text-[#7b5e57] text-sm sm:text-base md:text-xl leading-relaxed mb-6 text-justify md:text-left">
//                     {wax.desc}
//                   </p>

//                   <div className="mt-6 border-t border-[#5d4037]/20 pt-6 text-left">
//                     {/* Accordion */}
//                     <ProductAccordion
//                       title="INGREDIENTS"
//                       content={wax.ingredients}
//                     />

//                     <ProductAccordion title="HOW TO USE" content={wax.howTo} />

//                     {/* Price */}
//                     <div className="mt-4 md:mt-6 pt-0">
//                       <button
//                         className="
//           px-3 py-1
//           md:px-2 md:py-2
//           text-[#3e2723]
//           text-xl
//           md:text-4xl
//           font-bold
//           tracking-wide
//           hover:text-[#5d4037]
//           transition-all duration-300
//         "
//                       >
//                         {wax.price}
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// };

// export default Product;

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";

import {
  FaSpa,
  FaHandSparkles,
  FaLeaf,
  FaBriefcase,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import image1 from "../assets/Orka-images/image12.jpg";
import image2 from "../assets/Orka-images/darkchocolates2.jpg";
import image3 from "../assets/Orka-images/charcoal.jpg.jpeg";
import image4 from "../assets/Orka-images/WHITECHOCOLATES1.jpg";
import image5 from "../assets/Orka-images/aloveras7.jpg";
import image6 from "../assets/Orka-images/straberrys6.jpg";
import image7 from "../assets/Orka-images/greenapples3.jpg";
import image8 from "../assets/Orka-images/kesers4.jpg";
import image9 from "../assets/Orka-images/koreans5.jpg";
import image10 from "../assets/Orka-images/orange1.jpg";
import image11 from "../assets/Orka-images/rose1.jpg";

const products = [
  {
    icon: <FaSpa />,
    title: "Legs & Body Wax",
    desc: "Premium body wax for smooth results. Gentle on skin, tough on hair.",
  },
  {
    icon: <FaHandSparkles />,
    title: "Arms & Underarm Wax",
    desc: "Gentle formula for sensitive skin areas. Minimal irritation.",
  },
  {
    icon: <FaLeaf />,
    title: "Face & Sensitive Wax",
    desc: "Specially formulated for delicate facial skin. Smooth finish.",
  },
  {
    icon: <FaBriefcase />,
    title: "Professional Salon Wax",
    desc: "Bulk packaging for beauty professionals. High-performance.",
  },
];

const waxDetails = [
  {
    id: "dark-chocolate",
    title: " Dark Chocolate Liposoluble Wax",
    desc: "Indulge in a luxurious waxing experience with our Chocolate Wax designed for smooth and comfortable hair removal. The rich formula glides effortlessly while caring for the skin during the process. It helps maintain softness and leaves skin feeling nourished and refreshed. Enjoy long-lasting smoothness with a naturally healthy glow.",
    image: image2,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "Cocoa Powder, Glyceryl Rosinate, Rosin, Cera Alba, Cocoa Seed Butter,  Paraffin Wax, Paraffin Oil, CI 77891, CI 77019",
    price: "₹1350/-",
    mrp:"MRP",
  },
  {
    id: "charcoal",
    title: "Charcoal  Liposoluble Wax",
    desc: "Experience deep cleansing care with our Charcoal Liposoluble Wax for effective hair removal. Its purifying formula helps leave skin feeling fresh and clear after waxing. Perfect for maintaining a clean, smooth, and refined skin surface. Reveals soft, refreshed skin with every use.",
    image: image3,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "INGREDIENTS:Glyceryl Rosinate, Select Vegetable Oil, Cera Alba, Cocoa Seed Butter, Titanium Dioxide (CI 77891), Fragrance, CI 77019",
    price: "₹1350/-",
    mrp:"MRP",
  },
  {
    id: "white-chocolate",
    title: "White Chocolate Liposoluble Wax",
    desc: "Treat your skin to a gentle and indulgent waxing experience with White Chocolate Liposoluble Wax. Designed to remove hair smoothly while maintaining skin comfort. Helps keep the skin feeling soft and refreshed after every session. Leaves behind a naturally smooth and radiant finish.",
    image: image4,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "Glycerly Rosinatee\
    Select Vegetable Oil Cera Alba Cocoa Seed Butter, Titanium Dioxide CI 77891 Fragrance CI 77019",
    price: "₹1350/-",
    mrp:"MRP",
  },
  {
    id: "aloe-vera",
    title: "Aloe Vera Liposoluble Wax",
    desc: "A soothing waxing solution crafted for a calm and comfortable hair removal experience. The gentle formula helps maintain skin softness during the waxing process. Ideal for keeping the skin feeling relaxed and refreshed. Leaves the skin smooth, hydrated, and well cared for.",
    image: image5,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "Aloe Extracts, Glyceryl rosinate, Castor (Ricinus Communis) Seed Oil, Perfume, Titanium dioxide, Zinc oxide, Aloe Barbadensis (ALOE) Extract, Pentaerythrityl tetra-di-t-butyl hydroxyhydrocinnamate, CI 470 00, CI 61565",
    price: "₹1350/-",
    mrp:"MRP",
  },
  {
    id: "strawberry",
    title: "Strawberry Liposoluble Wax",
    desc: "Enjoy a refreshing waxing experience with our Strawberry Liposoluble Wax. Designed to remove hair effectively while leaving skin feeling clean and smooth. Helps maintain a bright and fresh look after every session. Reveals soft skin with a naturally vibrant feel.",
    image: image6,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "Rosin, Coco Butter, Edible Oil, Titanium Zinc Dioxide, Fragrance, Strawberry Extract.",
    price: "₹1350/-",
    mrp:"MRP",
  },
  {
    id: "green-apple",
    title: "Green Apple Liposoluble Wax",
    desc: "Refresh your waxing routine with the crisp care of Green Apple Liposoluble Wax. Its light formula helps remove hair while maintaining a clean skin feel. Designed to leave skin feeling fresh and revitalized. Enjoy smooth skin with a naturally refreshed finish.",
    image: image7,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "Green apple essence, Glycerly Rosinate, Rosin, Cera Alba, Cocoa Seed Butter, Paraffin Wax, Paraffin Oil, CI 77891, CI 77019",
    price: "₹1350/-",
    mrp:"MRP",
  },
  {
    id: "kesar",
    title: "Kesar (Saffron) Liposoluble Wax",
    desc: "Experience a touch of luxury with our Kesar Liposoluble Wax for smooth hair removal. Crafted to maintain skin softness and comfort during waxing. Helps enhance the skin’s natural radiance after every use. Leaves the skin feeling silky, smooth, and refreshed.",
    image: image8,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "Kesar Powder, Glycerly Rosinate, Rosin, Cera Alba, Cocoa Seed Butter, Paraffin Wax, Paraffin Oil, CI 77891, CI 77019",
    price: "₹1350/-",
    mrp:"MRP",
  },
  {
    id: "korean",
    title: "Korean Liposoluble Wax",
    desc: "Inspired by modern skincare rituals for a refined waxing experience. Designed to remove hair smoothly while maintaining skin comfort. Helps keep skin looking clear, fresh, and well cared for. Reveals smooth skin with a healthy, luminous finish.",
    image: image9,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "Bees Wax, Titanium Di Oxide, Korean Ginseng, Lanolin Perfume, Olive Oil, Glycerin, Shea Butter, Gylcerin Rosinate, Argan Oil.",
    price: " ₹1350/-",
    mrp:"MRP",
  },
  {
    id: "rose-extract",
    title: "Rose Extract Pre-Cleanser",
    desc: "Complete your waxing routine with the calming touch of Rose Extract. This pre-cleanser gently removes oils, sweat, and impurities before waxing. Helps prepare the skin for a clean, smooth waxing experience. A perfect start for a comfortable waxing session.",
    image: image11,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "Parafinnum liquidum IP citrus orange (orange), melaleuca alternifolia (tea tree oil), pogostemon cabling (patchouli), pelargonium graveolen (geranium), citrus sinensis (orange)",
    price: "₹900/-",
    mrp:"MRP"
  },
  {
    id: "orange-extract",
    title: "Orange Extract Post Cleanser",
    desc: "Refresh your skin before waxing with the energizing touch of Orange Extract. The cleanser helps remove oils, sweat, and impurities while preparing the skin for a smooth waxing experience. Leaves the skin feeling clean, fresh, and ready for treatment.",
    image: image10,
    howTo:
      "Apply Orka Professional Pre-Wax Cleanser to the desired area. Remove the lid and place the wax container in a wax heater. Heat the wax until it melts, then lower the temperature to a suitable working level. Using a spatula, apply a coat of wax to the desired area in the direction of hair growth. Place a strip over the applied wax and press firmly. Keeping the skin taut, pull the strip away quickly in the opposite direction of hair growth. Gently massage the waxed area with Orka Professional Post-Wax Lotion for best results.",
    ingredients:
      "Parafinnum liquidum IP citrus orange (orange), melaleuca alternifolia (tea tree oil), pogostemon cabling (patchouli), pelargonium graveolen (geranium), citrus sinensis (orange)",
    price: "₹900/-",
    mrp:"MRP",
  },
];

const ProductAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#5d4037]/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-[#5d4037] font-semibold text-lg focus:outline-none"
      >
        <span>{title}</span>
        {isOpen ? (
          <FaMinus className="text-sm" />
        ) : (
          <FaPlus className="text-sm" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#7b5e57] leading-relaxed text-base">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Product = () => {
  const ref = useRef(null);
  const { id } = useParams();

  let filteredProducts;

  if (id) {
    filteredProducts = waxDetails.filter((item) => item.id === id);
  } else {
    filteredProducts = waxDetails;
  }

  return (
    <div className="bg-[#e9e1d8] overflow-hidden">
      {/* --- HERO SECTION --- */}
      {!id && (
        <section
          ref={ref}
          className="relative py-12 md:py-20 px-4 sm:px-6 md:px-10 pt-20 md:pt-28"
        >
          <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16 pt-16 md:pt-24">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#5d4037] mb-4">
              🌿 Our Products
            </h2>
            <p className="text-[#7b5e57] max-w-2xl mx-auto text-sm md:text-lg">
              Premium Quality Liposoluble Wax for Professional & Personal Use.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center">
            {/* Mobile par image pehle dikhane ke liye order classes use ki hain */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex justify-center lg:order-2"
            >
              <img
                src={image1}
                className="
          w-[280px] h-[300px]      
          mx-auto                    
          sm:w-[300px] sm:h-[350px]  
          md:w-[320px] md:h-[400px]  
          object-cover 
          rounded-[18px] 
          shadow-lg
        "
                alt="Main Hero"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-8 lg:order-1">
              {products.map((p, i) => (
                <motion.div
                  key={i}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  className="border border-[#7b5e57]/40 p-5 md:p-6 bg-white/50 backdrop-blur-md rounded-[18px] text-center sm:text-left"
                >
                  <div className="text-[#7b5e57] text-3xl md:text-4xl mb-3 flex justify-center sm:justify-start">
                    {p.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#5d4037] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[#7b5e57] text-sm md:text-base leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- DETAILED PRODUCTS --- */}
      <section
        className={`py-10 md:py-20 space-y-20 md:space-y-32 ${
          id ? "pt-24 md:pt-32" : ""
        }`}
      >
        {" "}
        {filteredProducts.map((wax, index) => (
          <div
            key={index}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12  "
          >
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-start">
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
                  className="w-full max-w-[500px] h-[350px] md:h-[520px] object-cover rounded-3xl shadow-xl"
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
                <h2 className="text-2xl md:text-5xl font-bold text-[#5d4037] mb-3 md:mb-4">
                  {wax.title}
                </h2>

                <p className="text-[#7b5e57] text-sm sm:text-base md:text-xl leading-relaxed mb-6 text-justify md:text-left">
                  {wax.desc}
                </p>

                <ProductAccordion
                  title="INGREDIENTS"
                  content={wax.ingredients}
                />

                <ProductAccordion title="HOW TO USE" content={wax.howTo} />

<div className="mt-4 md:mt-6">
  <button className="text-3xl md:text-4xl font-bold text-[#3e2723] flex items-center gap-2">
        <span className="text-lg ">{wax.mrp}</span>
    <span>{wax.price}</span>
  </button>
</div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
