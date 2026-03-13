import { FiUser, FiMail, FiPhone, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Register = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fff8ec] px-4">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg bg-[#fffdf7] border border-yellow-300
                   rounded-[22px] p-8 md:p-10 shadow-xl"
      >
        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-[#7a2e00]">
            Create Account
          </h2>
          <p className="text-sm text-[#a16207] mt-2">
            Join us to book puja services
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-5">
          {/* FULL NAME */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Full Name *
            </label>
            <div className="flex items-center mt-2 border rounded-lg px-3
                            focus-within:border-[#a1123b] transition">
              <FiUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Email *
            </label>
            <div className="flex items-center mt-2 border rounded-lg px-3
                            focus-within:border-[#a1123b] transition">
              <FiMail className="text-gray-400" />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Phone Number *
            </label>
            <div className="flex items-center mt-2 border rounded-lg px-3
                            focus-within:border-[#a1123b] transition">
              <FiPhone className="text-gray-400" />
              <input
                type="text"
                placeholder="+91 98765 43210"
                className="w-full p-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Password *
            </label>
            <div className="flex items-center mt-2 border rounded-lg px-3
                            focus-within:border-[#a1123b] transition">
              <FiLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-3 outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="w-full mt-8 bg-[#a1123b]
                     hover:bg-[#8c0f33]
                     text-white py-3.5 rounded-full
                     font-semibold shadow-lg transition"
        >
          Create Account
        </motion.button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-[#a1123b] mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;
