import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([
    {
      id: 1,
      title: "React for Beginners",
      author: "Fatima Khan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dVQn5YCf_PvfkOQS1OHGoDcYBjMYLrAttA&s",
      price: 499,
      category: "Paid",
      description: "Start learning React.js from scratch with hands-on examples."
    },
    {
      id: 2,
      title: "Fullstack MERN Bootcamp",
      author: "Ali Shaikh",
      image: "https://m.media-amazon.com/images/I/51fJDInYIFL._UF1000,1000_QL80_.jpg",
      price: 999,
      category: "Paid",
      description: "Learn MongoDB, Express, React and Node in one powerful course."
    },
    {
      id: 3,
      title: "Data Structures in Java",
      author: "Priya Yadav",
      image: "https://m.media-amazon.com/images/I/714+tgyHDRL._UF1000,1000_QL80_.jpg",
      price: 799,
      category: "Paid",
      description: "Master core DSA concepts using Java in a structured way."
    },
    {
      id: 4,
      title: "Cybersecurity Basics",
      author: "Raeen Fatima",
      image: "https://m.media-amazon.com/images/I/7109NPQA5cL._UF1000,1000_QL80_.jpg",
      price: 599,
      category: "Paid",
      description: "Understand the fundamentals of cybersecurity with practical scenarios."
    },
  ]);

  useEffect(() => {
    // When API is ready, use this code instead of dummy
    /*
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
    */
  }, []);

  return (
    <div className="pt-20 bg-white text-black dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="items-center justify-center text-center">
        <h1 className="text-4xl pt-8 md:text-4xl">
          We&apos;re delighted to have you{" "}
          <span className="text-pink-500"> Here! :)</span>
        </h1>
        <p className="mt-10">
          Explore premium and structured courses designed to help you grow technically.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
