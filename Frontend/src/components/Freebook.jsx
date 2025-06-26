import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([
    {
      id: 1,
      title: "Introduction to JavaScript",
      author: "John Doe",
      image: "https://via.placeholder.com/150",
      price: 0,
      category: "Free",
      description: "Learn the basics of JavaScript from scratch."
    },
    {
      id: 2,
      title: "Python for Beginners",
      author: "Jane Smith",
      image: "https://via.placeholder.com/150",
      price: 0,
      category: "Free",
      description: "A beginner-friendly course on Python programming."
    },
    {
      id: 3,
      title: "HTML & CSS Crash Course",
      author: "Alex Johnson",
      image: "https://via.placeholder.com/150",
      price: 0,
      category: "Free",
      description: "Master the web basics: HTML and CSS."
    },
    {
      id: 4,
      title: "Git & GitHub Essentials",
      author: "Nina Patel",
      image: "https://via.placeholder.com/150",
      price: 0,
      category: "Free",
      description: "Learn version control using Git and GitHub."
    },
  ]);

  useEffect(() => {
    // When API is ready, you can use this block
    /*
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/book`);
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
    */
  }, []);

  var settings = {
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="bg-white text-black  dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Learn from free resources and upgrade your knowledge without spending a penny.
        </p>
      </div>

      <div className="mt-4">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
