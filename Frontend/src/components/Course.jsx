import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]); // ✅ Correctly using useState

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/book`);
        setBook(res.data); // ✅ Store all books (Paid + Free)
        console.log("Fetched courses:", res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBook();
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

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {book.length > 0 ? (
          book.map((item) => <Cards key={item.id} item={item} />)
        ) : (
          <p className="col-span-3 text-center">Loading courses...</p>
        )}
      </div>
    </div>
  );
}

export default Course;
