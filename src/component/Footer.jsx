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
            🌿 Premium Liposoluble Wax
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
