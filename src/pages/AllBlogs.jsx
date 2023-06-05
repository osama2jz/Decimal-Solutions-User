import React, { useEffect, useState } from "react";
import pic from "../components/blogs/1111.avif";
import blogImage from "../assets/images/BlogHero.png";
import Card from "../components/blogs/Card";
import Pagination from "../components/blogs/Pagination";
import axios from "axios";
import { backendUrl } from "../constants";
import { Loader, Title } from "@mantine/core";
import moment from "moment";

const AllBlogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/blogs").then((res) => {
      setBlogs(res.data.data);
      setIsLoading(false);
    });
  }, []);
  const backgroundImage = {
    backgroundImage: `url("${blogImage}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
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
      {isLoading ? (
        <Loader
          size={"xl"}
          color="purple"
          style={{ margin: "auto", marginBlock: "100px" }}
        />
      ) : (
        <div className="grid sm:grid-cols-1 cardBreak2:grid-cols-3 cardBreak3:grid-cols-3  justify-around px-28 pt-12">
          {blogs.length ? (
            blogs?.map((blog, index) => {
              if (index >= page * 6 && index < page * 6 + 6) {
                return (
                  <Card
                    key={index}
                    image={blog.blogImage}
                    title={blog.blogTitle}
                    date={moment(blog.createdAt).format("DD MMMM YYYY")}
                    description={blog.blogDescription}
                    data={blog}
                  />
                );
              }
            })
          ) : (
            <Title>No Blog Found.</Title>
          )}
        </div>
      )}
      <div className="p-16">
        <Pagination length={blogs?.length} setPage={setPage} page={page} />
      </div>
    </div>
  );
};

export default AllBlogs;
