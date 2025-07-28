import { useEffect, useState } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]); // ✅ Corrected

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/book`);
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
        console.log("Fetched Free Books:", data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white text-black  dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
      <div className="mb-6">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Learn from free resources and upgrade your knowledge without spending a penny.
        </p>
      </div>

      {book.length > 0 ? (
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      ) : (
        <p className="text-center mt-10">Loading Free Books...</p>
      )}
    </div>
  );
}

export default Freebook;
