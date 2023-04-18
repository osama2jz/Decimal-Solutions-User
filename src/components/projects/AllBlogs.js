import React from "react";

import porfolio from "./porfolio.png";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import Card from "./Card";

const AllBlogs = () => {
  const blogsArray = [
    {
      id: 1,
      title: "Lorem Talha 1",

      image: one,
    },
    {
      id: 2,
      title: "Lorem ipsum",

      image: two,
    },
    {
      id: 2,
      title: "Lorem ipsum",

      image: three,
    },

    {
      id: 2,
      title: "Lorem ipsum",

      image: one,
    },
    {
      id: 2,
      title: "Lorem ipsum",

      image: two,
    },
    {
      id: 2,
      title: "Lorem ipsum",

      image: three,
    },
    {
      id: 2,
      title: "Lorem ipsum",

      image: one,
    },
    {
      id: 2,
      title: "Lorem ipsum",

      image: two,
    },
    {
      id: 2,
      title: "Lorem ipsum",

      image: three,
    },
    {
      id: 2,
      title: "Lorem ipsum",

      image: one,
    },
    {
      id: 2,
      title: "Lorem ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: two,
    },
    {
      id: 2,
      title: "Lorem ipsum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: three,
    },
  ];
  const backgroundImage = {
    backgroundImage: `url("${porfolio}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [blogs, setBlogs] = React.useState(blogsArray);
  const [page, setPage] = React.useState(0);
  return (
    <div>
      <div className=""></div>
      <div
        className="relative h-[498px] w-auto bg-slate-700 text-white"
        style={backgroundImage}
      >
        <div className="absolute h-full w-full bg-black opacity-50"></div>
        <h1 className=" xs:text-1xl absolute flex h-full w-full items-center justify-center font-bold  sm:text-2xl md:text-3xl lg:text-5xl">
          OUR PROJECTS
        </h1>
      </div>
      <div className="flex  auto-rows-min flex-col place-items-center  items-center justify-center text-[25px] md:h-[446px] ">
        <div className="  flex flex-col flex-wrap items-center justify-center md:flex-row">
          <p className="whitespace-nowrap p-5 text-accentColor hover:text-accentColor ">
            <b>All</b>
          </p>
          <p className="whitespace-nowrap p-5 hover:text-accentColor ">
            Mobile App Development
          </p>
          <p className="whitespace-nowrap p-5 hover:text-accentColor  ">
            Website Development
          </p>
          <p className="whitespace-nowrap p-5 hover:text-accentColor  ">
            Graphic Designing
          </p>
          <p className="whitespace-nowrap p-5 hover:text-accentColor  ">
            AR/VR Games
          </p>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row">
          <p className="whitespace-nowrap p-5 hover:text-accentColor  ">
            Digital Marketing
          </p>
          <p className="whitespace-nowrap p-5 hover:text-accentColor  ">
            ERP & Business Solutions
          </p>
        </div>
      </div>
      <div className="  grid grid-cols-1 place-items-center justify-around gap-5 px-5  pt-12 md:grid-cols-2  md:px-10 lg:px-28 cardBreak2:grid-cols-2 cardBreak3:grid-cols-3">
        {blogs.map((blog, index) => {
          if (index >= page * 6 && index < page * 6 + 6) {
            return (
              <Card
                key={index}
                image={blog.image}
                title={blog.title}
                date={blog.date}
                description={blog.description}
              />
            );
          }
        })}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
      <div className=" flex h-[295px] items-center justify-center ">
        <button className="h-[77px] w-[318px] rounded-[10px] bg-accentColor text-[22px] text-white duration-300 hover:brightness-90">
          View All
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
// <div className="flex  auto-rows-min flex-col place-items-center  items-center justify-center gap-y-24 text-[22px] md:h-[446px] ">
//   <div className="  flex flex-col flex-wrap items-center justify-center md:flex-row">
//     <p className=" whitespace-nowrap p-5 text-accentColor ">
//       <b>All</b>
//     </p>
//     <p className=" whitespace-nowrap p-5 ">Mobile App Development</p>
//     <p className=" whitespace-nowrap p-5  ">Website Development</p>
//     <p className=" whitespace-nowrap p-5  ">Graphic Designing</p>
//     <p className=" whitespace-nowrap p-5  ">AR/VR Games</p>
//     <p className=" whitespace-nowrap p-5  ">Digital Marketing</p>
//     <p className=" whitespace-nowrap p-5  ">ERP & Business Solutions</p>
//   </div>
// </div>;
