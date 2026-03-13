import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/Orka-images/logo3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PRODUCT", path: "/product" },
    { name: "CONTACT", path: "/contact" },
  ];

  const handleClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f4efe9] backdrop-blur-md border-b border-gray-200">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-18 md:h-24 flex items-center justify-between">
        {/* LEFT MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10 text-[#3E1103] font-semibold tracking-wide">
          {menuItems.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleClick}
              className={`relative hover:text-[#5c504b] transition duration-300
              ${location.pathname === item.path ? "text-[#5c504b]" : ""}`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#3E1103]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* LOGO & TITLE */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-0">
          <Link
            to="/"
            onClick={handleClick}
            className="flex items-center gap-2 sm:gap-3 md:gap-0"
          >
            <img
              src={logo}
              alt="Orka Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
            />
{/* <span
  className="
    text-[#6b3b20]
    text-[12px] 
    sm:text-[16px] 
    md:text-[22px] 
    lg:text-[28px]
    whitespace-nowrap
    tracking-[1px] sm:tracking-[2px] md:tracking-[3px]
  "
  style={{
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700"
  }}
>
  ORKA PROFESSIONAL
</span> */}

<span
  className="
    text-[#6b3b20]
    text-[14px]
    sm:text-[16px]
    md:text-[18px]
    lg:text-[29px]
    xl:text-[28px]
    tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]
    whitespace-nowrap
    block
    text-left
  "
  style={{
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700"
  }}
>
  ORKA PROFESSIONAL
</span>
          </Link>
        </div>

        {/* RIGHT MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10 text-[#3E1103] font-semibold tracking-wide">
          {menuItems.slice(2).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleClick}
              className={`relative hover:text-[#5c504b] transition duration-300
              ${location.pathname === item.path ? "text-[#5c504b]" : ""}`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#3E1103]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* HAMBURGER MOBILE */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#3E1103] text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute top-18 left-0 w-full min-h-[calc(100vh-6rem)] bg-[#f4efe9] shadow-lg flex flex-col items-start py-6 md:hidden text-[#3E1103] font-semibold z-50 space-y-4"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="w-full"
                >
                  <Link
                    to={item.path}
                    onClick={handleClick}
                    className="relative text-xl sm:text-lg py-3 px-6 hover:text-[#5c504b] transition duration-300 block"
                  >
                    {item.name}

                    {location.pathname === item.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#3E1103] rounded-sm"></span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;




// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiMenu, HiX } from "react-icons/hi";
// import logo from "../assets/Orka-images/logo3.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   const menuItems = [
//     { name: "HOME", path: "/" },
//     { name: "ABOUT", path: "/about" },
//     { name: "PRODUCT", path: "/product" },
//     { name: "CONTACT", path: "/contact" },
//   ];

//   const handleClick = () => {
//     setMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Navbar shadow on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lock body scroll when mobile menu open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [menuOpen]);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-[#f4efe9]/95 backdrop-blur-md shadow-md"
//           : "bg-[#f4efe9]"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-18 md:h-24 flex items-center justify-between">

//         {/* LEFT MENU DESKTOP */}
//         <div className="hidden md:flex items-center gap-10 text-[#3E1103] font-semibold tracking-wide">
//           {menuItems.slice(0, 2).map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={handleClick}
//               className={`relative hover:text-[#5c504b] transition duration-300
//               ${location.pathname === item.path ? "text-[#5c504b]" : ""}`}
//             >
//               {item.name}

//               {location.pathname === item.path && (
//                 <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#3E1103]"></span>
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* LOGO */}
//         <div className="flex items-center gap-2 sm:gap-3 md:gap-0">
//           <Link
//             to="/"
//             onClick={handleClick}
//             className="flex items-center gap-2 sm:gap-3 md:gap-0"
//           >
//             <img
//               src={logo}
//               alt="Orka Logo"
//               className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
//             />

//             <span
//               className="
//               text-[#6b3b20]
//               text-[14px]
//               sm:text-[16px]
//               md:text-[18px]
//               lg:text-[28px]
//               tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]
//               whitespace-nowrap
//             "
//               style={{
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: "700",
//               }}
//             >
//               ORKA PROFESSIONAL
//             </span>
//           </Link>
//         </div>

//         {/* RIGHT MENU DESKTOP */}
//         <div className="hidden md:flex items-center gap-10 text-[#3E1103] font-semibold tracking-wide">
//           {menuItems.slice(2).map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={handleClick}
//               className={`relative hover:text-[#5c504b] transition duration-300
//               ${location.pathname === item.path ? "text-[#5c504b]" : ""}`}
//             >
//               {item.name}

//               {location.pathname === item.path && (
//                 <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#3E1103]"></span>
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-[#3E1103] text-3xl focus:outline-none"
//           >
//             {menuOpen ? <HiX /> : <HiMenu />}
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.35 }}
//               className="absolute top-18 left-0 w-full min-h-[calc(100vh-6rem)] bg-[#f4efe9] shadow-lg flex flex-col py-8 md:hidden text-[#3E1103] font-semibold z-50"
//             >
//               {menuItems.map((item, index) => (
//                 <motion.div
//                   key={item.name}
//                   initial={{ x: -40, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -40, opacity: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                 >
//                   <Link
//                     to={item.path}
//                     onClick={handleClick}
//                     className="block text-lg py-4 px-6 hover:text-[#5c504b] transition duration-300"
//                   >
//                     {item.name}

//                     {location.pathname === item.path && (
//                       <span className="block mt-1 w-10 h-[2px] bg-[#3E1103]"></span>
//                     )}
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </nav>
//     </header>
//   );
// };

// export default Navbar;