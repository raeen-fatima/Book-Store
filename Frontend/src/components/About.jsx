
const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-white text-black  dark:bg-slate-900 dark:text-white flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Our Book Store 📚
        </h2>

        <p className="text-gray-600 leading-relaxed text-center">
          Welcome to <span className="font-semibold text-blue-600">Book Haven</span>, your one-stop destination for all kinds of books. Whether you love fiction, non-fiction, or academic books, we have something for everyone.
        </p>

        {/* Mission Statement */}
        <div className="mt-6 p-6 bg-blue-50 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-blue-800">📖 Our Mission</h3>
          <p className="text-gray-700 mt-2">
            Our goal is to make reading accessible and enjoyable for everyone. We provide an extensive collection, easy navigation, and exciting offers to enhance your book-buying experience.
          </p>
        </div>

        {/* Why Choose Us? */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">🌟 Why Choose Us?</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Over <span className="font-bold text-blue-600">50,000+</span> books available.</li>
            <li>Curated recommendations from top reviewers.</li>
            <li>Fast and secure delivery.</li>
            <li>Exclusive discounts and seasonal offers.</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div className="mt-8 p-6 bg-yellow-50 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-yellow-800">💬 What Our Customers Say</h3>
          <p className="text-gray-700 italic mt-3">
            &quot;Book Haven is my favorite place to buy books! Their collection is unmatched, and the service is fantastic!&quot; - <span className="font-semibold">Aditi Sharma</span>
          </p>
          <p className="text-gray-700 italic mt-2">
            &quot;The best bookstore with fast delivery and great offers!&quot; - <span className="font-semibold">Rahul Verma</span>
          </p>
        </div>

        {/* Contact Us */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-semibold text-gray-800">📞 Get in Touch</h3>
          <p className="text-gray-700 mt-2">Have any questions? Reach out to us at:</p>
          <p className="font-semibold text-blue-600 mt-1">support@bookhaven.com</p>
        </div>

        <p className="mt-6 text-center text-gray-700">
          Thank you for choosing <span className="font-semibold text-blue-600">Book Haven</span>. Happy Reading! 📚
        </p>
      </div>
    </div>
  );
};

export default About;
