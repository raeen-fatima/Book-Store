import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import banner from "../../public/Banner2.png";

export default function Banner() {
  const [text] = useTypewriter({
    words: [
      "Web Development 💻",
      "Cybersecurity 🔐",
      "Cloud Computing ☁️",
      "AI & ML 🤖",
      "DevOps 🛠️",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative mt-16 bg-white dark:bg-slate-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hello, welcome here to learn{" "}
            <span className="text-pink-500 underline decoration-pink-400 underline-offset-4">
              something new
            </span>{" "}
            everyday!
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Whether you're starting your journey or advancing your skills,
            you're in the right place. Dive into powerful tools and modern
            technologies that are shaping the future of the digital world.
            Let’s build, break, and learn together.
          </motion.p>

          <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300">
            Explore:{" "}
            <span className="text-pink-600 font-semibold">
              {text}
              <Cursor cursorColor="#ec4899" />
            </span>
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden  p-4 ">
            <img
              src={banner}
              alt="Banner"
              className="w-full max-w-md object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
