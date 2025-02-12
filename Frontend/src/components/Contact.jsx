import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 bg-white text-black  dark:bg-slate-900 dark:text-whitemin-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white p-10 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8">
        
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">📞 Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block bg-white text-gray-700 font-semibold">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block  text-gray-700 font-semibold">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full bg-white p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" rows="4" placeholder="Type your message..."></textarea>
            </div>
            <button type="submit" className="w-full bg-pink-500 text-white font-semibold p-3 rounded-lg hover:bg-pink-700 transition duration-300">Send Message</button>
            {submitted && <p className="text-green-700 font-semibold mt-2 text-center">✅ Message Sent Successfully!</p>}
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">📍 Address</h3>
            <p className="text-gray-700">123, Book Street, New Delhi, India</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">E-mail</h3>
            <p className="text-pink-600 font-semibold">support@bookhaven.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">📞 Phone</h3>
            <p className="text-gray-700">+91 9876543210</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">🌐 Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-500 text-2xl hover:text-blue-700">📘</a>
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-700">📸</a>
              <a href="#" className="text-blue-400 text-2xl hover:text-blue-600">🐦</a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-6xl w-full  p-10 rounded-2xl shadow-xl mt-8">
        <h3 className="text-2xl font-semibold dark:text-white text-gray-800 mb-4">❓ Frequently Asked Questions</h3>
        <details className="border-b py-2">
          <summary className="cursor-pointer text-blue-600 font-semibold">How can I track my order?</summary>
          <p className="text-gray-600 mt-2">You can track your order from the &apos;My Orders&apos; section in your account.</p>
        </details>
        <details className="border-b py-2">
          <summary className="cursor-pointer text-blue-600 font-semibold">Do you offer returns?</summary>
          <p className="text-gray-600 mt-2">Yes, you can return a book within 7 days of delivery.</p>
        </details>
        <details className="border-b py-2">
          <summary className="cursor-pointer text-blue-600 font-semibold">How do I contact customer support?</summary>
          <p className="text-gray-600 mt-2">You can email us at support@bookhaven.com or call +91 9876543210.</p>
        </details>
      </div>
    </div>
  );
};

export default Contact;