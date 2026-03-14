// import React, { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const Contact = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 70,
//     damping: 25,
//   });

//   const heroY = useSpring(
//     useTransform(smooth, [0, 0.4], [0, -120])
//   );

//   const heroOpacity = useSpring(
//     useTransform(smooth, [0, 0.4], [1, 0.6])
//   );

//   return (
//     <div
//       ref={ref}
//       className="relative bg-[#f4efe9] text-[#2e2018] overflow-hidden"
//     >
//       {/* Progress Bar */}
//       <motion.div
//         style={{ scaleX: smooth }}
//         className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7c6247] to-[#b89b7a] origin-left z-50"
//       />

//       {/* Floating Background Orbs */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
//         className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7c6247]/10 rounded-full blur-3xl"
//       />
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
//         className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#b89b7a]/10 rounded-full blur-3xl"
//       />

//       {/* ================= HERO ================= */}
//       <motion.section
//         style={{ y: heroY, opacity: heroOpacity }}
//         className="h-screen flex flex-col justify-center items-center text-center px-6 sticky top-0"
//       >
//         <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
//           Contact Us
//         </h1>
//         <p className="text-xl md:text-2xl max-w-3xl opacity-80">
//           Let’s connect and bring smooth, premium care to your beauty routine.
//         </p>
//       </motion.section>

//       {/* ================= CONTENT ================= */}
//       <section className="min-h-screen py-32 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

//    {/* LEFT SIDE INFO */}
// <motion.div
//   initial={{ opacity: 0, y: 80 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1 }}
//   viewport={{ once: false }}
//   className="space-y-16"
// >
//   {[
//     {
//       icon: <FaPhoneAlt />,
//       title: "Phone",
//       value: "+91-9109511021",
//     },
//     {
//       icon: <FaEnvelope />,
//       title: "Email",
//       value: "www.orkaprofessional.com",
//     },
//     {
//       icon: <FaMapMarkerAlt />,
//       title: "Location",

//       marketedTitle: "MARKETED BY:",
//       marketedValue:
//         "Ram Sales, 75 S.S Park Ground Floor Bypass, Kanadiya Road, Indore M.P. 452016",

//       manufacturedTitle: "MANUFACTURED BY:",
//       manufacturedValue:
//         "Rich Passion Care, Ware House No: 01, Jambhivali Village ADDL MIDC Anand Nagar, BSNL Backsite, Ambernath East-421506",
//       license: "Lic No.: MH/103548",

//       ingredientTitle: "MANUFACTURED BY:",
//       ingredientValue: "Glyceryl Rosinate, Select Vegtable Oil, Cera Alba, Seed Butter, Titanium Dioxide, CL 77891, Fragrance, CL 77019"

//     },
//   ].map((item, i) => (
//     <motion.div
//       key={i}
//       whileHover={{ x: 10 }}
//       className="flex items-start gap-6 group cursor-pointer"
//     >
//       <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/40 backdrop-blur-md text-[#7c6247] text-xl shadow-lg group-hover:scale-110 transition">
//         {item.icon}
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold">{item.title}</h3>

//         {/* Normal Value */}
//         {item.value && (
//           <p className="opacity-70 mt-2">{item.value}</p>
//         )}

//         {/* Location Details */}
//         {item.marketedTitle && (
//           <div className="mt-2 text-sm opacity-80">
//             <p className="font-semibold">{item.marketedTitle}</p>
//             <p>{item.marketedValue}</p>

//             <p className="font-semibold mt-2">
//               {item.manufacturedTitle}
//             </p>
//             <p>{item.manufacturedValue}</p>

//             <p className="mt-2">{item.license}</p>
//             <p className="font-semibold mt-4">{item.ingredientTitle}</p>
//             <p>{item.ingredientValue}</p>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   ))}
// </motion.div>

//         {/* RIGHT SIDE FORM */}
//         <motion.form
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           viewport={{ once: false }}
//           className="relative bg-white/40 backdrop-blur-xl p-12 rounded-3xl shadow-2xl space-y-8 border border-white/30"
//         >
//           <h2 className="text-3xl font-semibold mb-4">
//             Send a Message
//           </h2>

//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-[#7c6247] transition-all"
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-[#7c6247] transition-all"
//             />
//           </div>

//           <div className="relative">
//             <textarea
//               rows="4"
//               placeholder="Your Message"
//               className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-[#7c6247] transition-all"
//             />
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7c6247] to-[#b89b7a] text-white font-semibold shadow-lg"
//           >
//             Send Message
//           </motion.button>
//         </motion.form>

//       </section>
//     </div>
//   );
// };

// export default Contact;






import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
const [loading,setLoading] = useState(false)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

const sendWhatsApp = (e) => {
  e.preventDefault();

  setLoading(true)

  const phone = "919109511021";

  const text = `New Website Message
Name: ${name}
Email: ${email}
Message: ${message}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  setTimeout(() => {

    window.open(url,"_blank")

    setLoading(false)

    Swal.fire({
      icon: "success",
      title: "Message Sent Successfully",
      text: "Thank you for contacting ORKA Professional. We will get back to you soon.",
      confirmButtonColor: "#7c6247",
      timer: 120000,
      timerProgressBar: true
    });

    setName("")
    setEmail("")
    setMessage("")

  },1200)

};

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#f4efe9] to-[#e6dfd6] text-[#2e2018]">

      <section className="text-center pt-35 pb-12 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Contact Us
        </motion.h1>

        <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg opacity-70 leading-relaxed text-justify sm:text-center">
          We'd love to hear from you. Connect with us for any questions,
          support, or collaboration.
        </p>
      </section>

      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mb-16">

<motion.a
  href="tel:+919109511021"
  whileHover={{ y: -8 }}
  className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg block"
>
  <div className="text-3xl text-[#7c6247] flex justify-center mb-3">
    <FaPhoneAlt />
  </div>

  <h3 className="text-lg font-semibold">Phone</h3>

  <p className="opacity-70 text-sm mt-1">
    +91 9109511021
  </p>
</motion.a>

<motion.a
  href="mailto:info@orkaprofessional.com"
  whileHover={{ y: -8 }}
  className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg block"
>
  <div className="text-3xl text-[#7c6247] flex justify-center mb-3">
    <FaEnvelope />
  </div>

  <h3 className="text-lg font-semibold">Email</h3>

  <p className="opacity-70 text-sm break-all mt-1">
    info@orkaprofessional.com
  </p>
</motion.a>

<motion.a
  href="https://www.google.com/maps?q=Indore,Madhya+Pradesh"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -8 }}
  className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg block cursor-pointer"
>
  <div className="text-3xl text-[#7c6247] flex justify-center mb-3">
    <FaMapMarkerAlt />
  </div>

  <h3 className="text-lg font-semibold">Location</h3>

  <p className="opacity-70 text-sm mt-1">
    Indore, Madhya Pradesh
  </p>
</motion.a>

      </section>

      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-20">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
            Company Information
          </h2>

          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow">

            <p className="mb-4 text-sm leading-relaxed text-justify">
              <b>MARKETED BY:</b><br/>
              Ram Sales, 75 S.S Park Ground Floor Bypass,
              Kanadiya Road, Indore M.P 452016
            </p>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg"
        >

          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
            Send a Message
          </h2>

          <form onSubmit={sendWhatsApp} className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7c6247]"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7c6247]"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7c6247]"
            />

<motion.button
  whileTap={{ scale: 0.95 }}
  type="submit"
  disabled={loading}
  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#7c6247] to-[#b89b7a] text-white font-semibold flex justify-center items-center gap-2"
>
  {loading ? "Sending..." : "Send Message"}
</motion.button>

          </form>

        </motion.div>

      </section>

    </div>
  );
};

export default Contact;