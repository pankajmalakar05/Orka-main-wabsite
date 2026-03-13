import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fffaf2] px-4">
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-[#fffdf8] border border-[#f1dfc8]
                   rounded-3xl shadow-2xl p-10"
      >
        {/* HEADING */}
        <h2 className="text-4xl font-serif font-bold text-[#4b1e05] text-center">
          Welcome Back
        </h2>
        <p className="text-center text-[#c15a1b] mt-2 mb-10">
          Login to manage your bookings
        </p>

        {/* EMAIL */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-[#4b1e05]">
            Email *
          </label>
          <div
            className="flex items-center gap-3 border border-[#f1dfc8]
                       rounded-xl px-4 mt-2 focus-within:border-[#b21f2d]
                       transition"
          >
            <FiMail className="text-gray-400" />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full py-3 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="mb-8">
          <label className="text-sm font-semibold text-[#4b1e05]">
            Password *
          </label>
          <div
            className="flex items-center gap-3 border border-[#f1dfc8]
                       rounded-xl px-4 mt-2 focus-within:border-[#b21f2d]
                       transition"
          >
            <FiLock className="text-gray-400" />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full py-3 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* LOGIN BUTTON */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="w-full py-4 rounded-full bg-[#9c1236]
                     text-white font-semibold text-lg
                     hover:bg-[#7f0f2b] transition shadow-lg"
        >
          Login
        </motion.button>

        {/* REGISTER LINK */}
        <p className="text-center text-sm text-[#c15a1b] mt-8">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-[#9c1236] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
