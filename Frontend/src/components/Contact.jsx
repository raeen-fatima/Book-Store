import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 py-20 flex flex-col items-center justify-center gap-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl p-8 bg-white/90 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700"
      >
        <h3 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-6 flex justify-center items-center gap-2">
          <FaEnvelope className="text-rose-600" /> Contact Us
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border rounded-lg outline-none bg-white dark:bg-slate-700 dark:text-white"
              placeholder="Your name"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">Name is required</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border rounded-lg outline-none bg-white dark:bg-slate-700 dark:text-white"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">Email is required</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg outline-none bg-white dark:bg-slate-700 dark:text-white"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <p className="text-sm text-red-500 mt-1">Message is required</p>}
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Book Haven Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448158.01987509876!2d76.76357027361095!3d28.644800481200314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4094f4aa3f%3A0x5b9a482b9566775!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1719371885406!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
