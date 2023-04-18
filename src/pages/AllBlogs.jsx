import React from "react";
import pic from "../components/blogs/1111.avif";
import blogImage from "../assets/images/BlogHero.png";
import Card from "../components/blogs/Card";
import Pagination from "../components/blogs/Pagination";

const AllBlogs = () => {
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
  const backgroundImage = {
    backgroundImage: `url("${blogImage}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [blogs, setBlogs] = React.useState(blogsArray);
  const [page, setPage] = React.useState(0);
  return (
    <div>
      <div
        className="text-white relative bg-slate-700 mb-10 w-auto h-[498px]"
        style={backgroundImage}
      >
        <div className="bg-black opacity-30 w-full h-full absolute"></div>
        <h1 className="text-5xl font-bold flex justify-center w-full h-full items-center absolute">
          OUR BLOG
        </h1>
      </div>
      <div className="  grid sm:grid-cols-1 cardBreak2:grid-cols-2 cardBreak3:grid-cols-3  justify-around px-28 pt-12">
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
      <div className="p-16">
        <Pagination length={blogs?.length} setPage={setPage} page={page} />
      </div>
    </div>
  );
};

export default AllBlogs;
