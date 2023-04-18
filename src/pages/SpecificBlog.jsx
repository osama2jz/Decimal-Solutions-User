import React from "react";
import pic from "../components/blogs/1111.avif";
import Card from "../components/blogs/Card";
import Pagination from "../components/blogs/Pagination";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import blogImage from "../assets/images/BlogHero.png";

import {
  ChevronLeft,
  ChevronRight,
  BrandFacebook,
  BrandTwitter,
  BrandInstagram,
} from "tabler-icons-react";

const SpecificBlog = () => {
  const blogsArray = [
    {
      id: 1,
      title: "Lorem 1",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 2",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 3",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },

    {
      id: 2,
      title: "Lorem 4",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 5",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 6",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 7",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 8",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 9",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 10",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },

    {
      id: 2,
      title: "Lorem 14",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 135",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 16",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 16",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 17",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
    {
      id: 2,
      title: "Lorem 18",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
      date: "23 December 2021",
      image: blogImage,
    },
  ];
  const [blogs, setBlogs] = React.useState(blogsArray);
  const backgroundImage = {
    backgroundImage: `url("${pic}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div
        className="text-white bg-slate-700 my-10 w-auto h-[498px]"
        style={backgroundImage}
      >
        <h1 className="text-5xl font-bold flex justify-center w-full h-full items-center">
          BLOG DETAIL
        </h1>
      </div>
      <div className=" lg:px-32 sm:px-24 xs:px-5">
        <div className="lg:flex justify-between  border-b-4">
          <div className="lg:flex items-center mb-4">
            <h1 className="pr-4 text-[40px] font-semibold">Lorem ipsum</h1>
            <h1 className="text-[25px] text-[#C7C7C7] ">( 05 January 2021 )</h1>
          </div>
          <div className="flex items-center">
            <div className="px-2">
              <AiFillTwitterCircle size={38} color="#C7C7C7" />
            </div>
            <div className="px-2">
              <AiOutlineInstagram size={38} color="#C7C7C7" />
            </div>

            <div className="px-2">
              <BsFacebook size={32} color="#C7C7C7" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-6 text-[25px] text-justify leading-loose ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </h1>
          <div className="xl:flex justify-center ">
            <h1 className="mt-6 text-[25px] text-justify leading-loose pr-5 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </h1>
            <img src={pic} alt="" className="mt-6  w-[637px] xl:float-right" />
          </div>
          <h1 className="mt-6 text-[25px] text-justify lg:leading-loose ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-4 mb-10 p-10 items-center rounded-xl bg-[#F4F3F3] mt-16 ">
          <div className="rounded-full xs:col-span-6 2xl:col-span-1 ">
            <img src={pic} alt="" className="rounded-full w-56 h-56" />
          </div>
          <div className="xs:col-span-6 2xl:col-span-5  ">
            <h1 className="text-[33px]">Michkel John</h1>
            <h1 className="text-[25px] cardBreak3:leading-loose text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </h1>
          </div>
        </div>
      </div>
      <div className="  grid sm:grid-cols-1 cardBreak2:grid-cols-2 cardBreak3:grid-cols-3  justify-around px-28 pt-12">
        {blogs.map((blog, index) => {
          if (index < 3) {
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
      <div className=" px-32 flex items-center">
        {/* <Pagination /> */}

        <ChevronLeft size={36} color="#A4238C" />

        <h1 className="text-[#A4238C] text-[32px] p-10">GO BACK</h1>
      </div>
    </div>
  );
};

export default SpecificBlog;
