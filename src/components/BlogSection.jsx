import React, { useState } from "react";
import Container from "./Container";
import BlogCard from "./BlogCard";
import blogImg1 from "../assets/blogImages/grilled-tomatoes-1.png";
import blogImg2 from "../assets/blogImages/meal-prep-ideas-2.png";
import blogImg3 from "../assets/blogImages/meal-prep-ideas-3.png";
import blogImg4 from "../assets/blogImages/grilled-tomatoes-4.png";
import blogImg5 from "../assets/blogImages/meal-prep-ideas-5.png";
import blogImg6 from "../assets/blogImages/meal-prep-ideas-6.png";

const blogData = [
  {
    title: "Grilled  Tomatoes at Home",
    img: blogImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa, necessitatibus dolore commodi corrupti fugit ea sed ducimus facilis repellat amet explicabo dolor, vero, ratione a expedita delectus excepturi doloremque?",
  },
  {
    title: "Snacks for Travel",
    img: blogImg2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa, necessitatibus dolore commodi corrupti fugit ea sed ducimus facilis repellat amet explicabo dolor, vero, ratione a expedita delectus excepturi doloremque?",
  },
  {
    title: "Post-workout Recipes",
    img: blogImg3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa, necessitatibus dolore commodi corrupti fugit ea sed ducimus facilis repellat amet explicabo dolor, vero, ratione a expedita delectus excepturi doloremque?",
  },
  {
    title: "How To Grill Corn",
    img: blogImg4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa, necessitatibus dolore commodi corrupti fugit ea sed ducimus facilis repellat amet explicabo dolor, vero, ratione a expedita delectus excepturi doloremque?",
  },
  {
    title: "Crunchwrap Supreme",
    img: blogImg5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa, necessitatibus dolore commodi corrupti fugit ea sed ducimus facilis repellat amet explicabo dolor, vero, ratione a expedita delectus excepturi doloremque?",
  },
  {
    title: "Broccoli Cheese Soup",
    img: blogImg6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa, necessitatibus dolore commodi corrupti fugit ea sed ducimus facilis repellat amet explicabo dolor, vero, ratione a expedita delectus excepturi doloremque?",
  },
];

const ArrowIcon = ({ ...props }) => {
  return (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
        fill="#424961"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
        fill="#424961"
      />
      <rect x="0.5" y="0.5" width="27" height="28" rx="4.5" stroke="#424961" />
    </svg>
  );
};

function BlogSection() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 3;
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const totalPages = Math.ceil(blogData.length / cardsPerPage);

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Container>
      <h2 className="text-[56px] leading=[42px] text-[#0E2368] font-bold max-md:text-[28px] max-md:leading-[54px] mb-16 max-md:mb-10">
        Latest Articles
      </h2>
      <div className="flex justify-between flex-wrap">
        {blogData.slice(startIndex, endIndex).map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            img={blog.img}
            description={blog.description}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-16 max-md:mt-8">
        <button onClick={handlePrevPage} className="rotate-180">
          <ArrowIcon />
        </button>
        <span className="mx-3">
          {page} / {totalPages}
        </span>
        <button onClick={handleNextPage}>
          <ArrowIcon />
        </button>
      </div>
    </Container>
  );
}

export default BlogSection;
