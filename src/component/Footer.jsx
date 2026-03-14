import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/orkaprofessional?igsh=MXhxNDdiYzk2a2pscA==",
  },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/share/1FLVvs6bYb/",
  },
  {
    icon: FaWhatsapp,
    link: "https://wa.me/",
  },
];

const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.footer
      ref={ref}
      style={{ y, opacity }}
      className="relative bg-gradient-to-br from-[#4a3628] to-[#2e2018] text-white overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#7c6247]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#a58a6a]/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-24 grid md:grid-cols-3 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        <h2 className="text-3xl font-bold mb-6">
  ORKA Professional Wax
</h2>
          <p className="opacity-80 leading-relaxed">
            Delivering high-quality waxing solutions designed for professionals
            and personal care. Smooth finish, skin-safe formulas, and
            salon-level performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

          <ul className="space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/product" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link, i) => (
              <li key={i} className="group w-fit">
                <Link
                  to={link.path}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="relative inline-block cursor-pointer"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#a58a6a] transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

          <div className="space-y-4 opacity-90">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-3xl " />
              <span>
                Ram Sales, 75 S.S Park Ground Floor Bypass, Kanadiya Road,
                Indore M.P 452016
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span> +91-9109511021 </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer backdrop-blur-md"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="border-t border-white/20 py-6 text-center text-sm opacity-70"
      >
        © {new Date().getFullYear()} All Orka Professional Rights Reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;






// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaWhatsapp,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// const socialLinks = [
//   {
//     icon: FaInstagram,
//     link: "https://www.instagram.com/orkaprofessional",
//   },
//   {
//     icon: FaFacebookF,
//     link: "https://www.facebook.com",
//   },
//   {
//     icon: FaWhatsapp,
//     link: "https://wa.me/",
//   },
// ];

// const Footer = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end end"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <motion.footer
//       ref={ref}
//       style={{ y, opacity }}
//       className="relative bg-gradient-to-br from-[#4a3628] to-[#2e2018] text-white overflow-hidden"
//     >
//       {/* Glow background */}
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#7c6247]/20 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#a58a6a]/20 rounded-full blur-3xl"></div>

//       {/* TOP CTA SECTION */}
//       <div className="max-w-7xl mx-auto px-6 md:px-16 pt-20 pb-10 text-center border-b border-white/20">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold mb-4"
//         >
//           Experience Smooth Professional Waxing
//         </motion.h2>

//         <p className="opacity-80 max-w-2xl mx-auto">
//           Trusted by salons and beauty professionals for delivering smooth,
//           long-lasting results with skin-friendly formulas.
//         </p>
//       </div>

//       {/* MAIN FOOTER */}
//       <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-4 gap-14">

//         {/* BRAND */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           <h2 className="text-2xl font-bold mb-5">
//             ORKA Professional
//           </h2>

//           <p className="opacity-80 text-sm leading-relaxed">
//             Premium liposoluble wax solutions crafted for beauty professionals.
//             Delivering salon-quality results with safe and effective formulas.
//           </p>

//           {/* Social */}
//           <div className="flex gap-4 mt-6">
//             {socialLinks.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <motion.a
//                   key={i}
//                   href={item.link}
//                   target="_blank"
//                   whileHover={{ scale: 1.2, rotate: 10 }}
//                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
//                 >
//                   <Icon />
//                 </motion.a>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

//           <ul className="space-y-3 text-sm opacity-90">
//             {[
//               { name: "Home", path: "/" },
//               { name: "About", path: "/about" },
//               { name: "Products", path: "/product" },
//               { name: "Contact", path: "/contact" },
//             ].map((link, i) => (
//               <li key={i}>
//                 <Link
//                   to={link.path}
//                   className="hover:text-[#a58a6a] transition"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* PRODUCTS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-5">Products</h3>

//           <ul className="space-y-3 text-sm opacity-90">
//             <li>Liposoluble Wax</li>
//             <li>Chocolate Wax</li>
//             <li>Honey Wax</li>
//             <li>Fruit Wax</li>
//           </ul>
//         </div>

//         {/* CONTACT */}
//         <div>
//           <h3 className="text-lg font-semibold mb-5">Contact</h3>

//           <div className="space-y-4 text-sm opacity-90">

//             <div className="flex gap-3">
//               <FaMapMarkerAlt className="mt-1" />
//               <span>
//                 Ram Sales, 75 S.S Park Ground Floor Bypass,
//                 Kanadiya Road, Indore M.P
//               </span>
//             </div>

//             <div className="flex gap-3 items-center">
//               <FaPhoneAlt />
//               <span>+91 9109511021</span>
//             </div>

//             <div className="flex gap-3 items-center">
//               <FaEnvelope />
//               <span>info@orkaprofessional.com</span>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* NEWSLETTER */}
//       <div className="max-w-4xl mx-auto px-6 pb-16 text-center">
//         <h3 className="text-xl font-semibold mb-4">
//           Subscribe for Updates
//         </h3>

//         <div className="flex flex-col md:flex-row gap-4 justify-center">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-3 rounded-md text-black w-full md:w-80"
//           />

//           <button className="bg-[#a58a6a] px-6 py-3 rounded-md hover:bg-[#b89b78] transition">
//             Subscribe
//           </button>
//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className="border-t border-white/20 py-6 text-center text-sm opacity-70">
//         © {new Date().getFullYear()} ORKA Professional. All Rights Reserved.
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;
