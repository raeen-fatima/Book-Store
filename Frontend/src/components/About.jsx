import { motion } from "framer-motion";
import { FaBookOpen, FaUserFriends, FaRocket, FaGlobeAsia, FaCreditCard, FaGift, FaQuestionCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen className="text-5xl text-pink-500 mb-4" />,
    title: "Curated Book Collection",
    description:
      "At Book Haven, we go beyond just stocking books — we hand-select every title in our library. Whether you're into gripping thrillers, enlightening non-fiction, or classic literature, our catalog has been thoughtfully curated to suit the tastes of diverse readers."
  },
  {
    icon: <FaUserFriends className="text-5xl text-pink-500 mb-4" />,
    title: "Community of Readers",
    description:
      "Our platform is more than just a bookstore — it's a vibrant community. Join discussions, write reviews, share book lists, and connect with fellow readers who are as passionate about books as you are."
  },
  {
    icon: <FaRocket className="text-5xl text-pink-500 mb-4" />,
    title: "Swift & Safe Delivery",
    description:
      "Your books, delivered swiftly and safely. Our logistics network ensures that every order reaches your doorstep on time, in perfect condition, and with full tracking so you’re never left wondering."
  }
];

const faqs = [
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we are operational across all regions of India. International shipping is a planned feature for the near future as we expand our logistics infrastructure."
  },
  {
    question: "What payment options do you support?",
    answer:
      "We support UPI, debit/credit cards, net banking, and digital wallets. All payments are securely processed using end-to-end encryption and PCI-compliant gateways."
  },
  {
    question: "Can I sell books on Book Haven?",
    answer:
      "Yes, we are soon launching a seller portal. You can register to become a vendor and list your books for sale to our wide audience."
  },
  {
    question: "Is gift wrapping available?",
    answer:
      "Absolutely. You can select the gift-wrap option during checkout and even include a personalized message."
  }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" dark:from-slate-900 dark:to-slate-800 min-h-screen pt-20 px-6 text-black dark:text-white m-9"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <motion.section
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">About <span className="text-pink-600">Book Haven</span></h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Book Haven is your gateway to an inspiring literary experience. We aim to bridge the gap between readers and great books through curated selections, a vibrant community, and seamless service. Our passion is rooted in storytelling, learning, and connection.
          </p>
        </motion.section>

        {/* Features */}
        <motion.section
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-pink-500/10 dark:bg-slate-800 p-8 rounded-xl shadow-md text-center"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Mission */}
        <motion.section
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-pink-600 dark:bg-slate-700 p-10  shadow-md"
        >
          <h2 className="text-3xl font-bold text-pink-200 dark:text-pink-300 mb-3">📖 Our Mission</h2>
          <p className="text-gray-400 dark:text-gray-300 text-lg">
            We believe that books change lives. At Book Haven, our mission is to bring the magic of reading to every corner of the country. We’re here to inspire curiosity, foster creativity, and support lifelong learning for people of all ages and backgrounds.
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-3xl font-bold text-pink-600 flex items-center gap-3 mb-6">
            <FaQuestionCircle className="text-2xl" /> Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b pb-4">
                <h4 className="font-semibold text-lg">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-5"
        >
          Thank you for choosing <span className="text-pink-600 font-semibold">Book Haven</span>. Discover stories. Discover yourself. 📚
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
