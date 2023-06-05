import React, { useEffect, useState } from "react";
import Banner from "../components/our-services/Banner";
import MainCover from "../assets/images/Product.svg";
import RowLayout from "../components/our-services/RowLayout";
import ServiceImage1 from "../assets/images/service-image-1.jpg";
import ServiceImage2 from "../assets/images/service-image-2.jpg";
import { backendUrl } from "../constants";
import axios from "axios";
import { Loader, Title } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import ExternalLink from "../assets/icons/external-link.png";

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { projectData } = useLocation()?.state;
  const { category } = useLocation()?.state;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [projectData]);

  return (
    <>
      <Banner backgroundImage={MainCover}>{projectData?.title}</Banner>
      {isLoading ? (
        <Loader
          size={"xl"}
          color="purple"
          style={{ margin: "auto", marginBlock: "100px" }}
        />
      ) : (
        <>
          <div className="offers my-[70px] flex flex-row gap-[40px] px-[30px] sm:my-[80px] sm:gap-[45px] sm:px-[50px] md:my-[100px] md:gap-[55x] md:px-[80px] lg:my-[115px] lg:gap-[70px] lg:px-[100px] xl:my-[130px] xl:gap-[85px] xl:px-[120px] 2xl:my-[150px] 2xl:gap-[100px] 2xl:px-[146px] ">
            <div className="w-1/2">
              <h1 className="text-3xl text-textColor font-bold mb-6">
                How we did it
              </h1>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "30px" }}
              >
                <div
                  style={{ borderLeft: "4px solid gray", height: "100px" }}
                ></div>
                <div>
                  <div>
                    <text className="font-bold text-lg text-textColor">
                      Date
                    </text>
                    {" : "}
                    <text className="text-gray-500 text-lg">22-2-2023</text>
                  </div>
                  <div>
                    <text className="font-bold text-lg text-textColor">
                      Client
                    </text>
                    {" : "}
                    <text className="text-gray-500 text-lg">22-2-2023</text>
                  </div>
                  <div>
                    <text className="font-bold text-lg text-textColor">
                      Category
                    </text>
                    {" : "}
                    <text className="text-gray-500 text-lg">
                      {category && category}
                    </text>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-justify text-lg text-textColor font-semibold ">
                {projectData?.description}
              </p>
            </div>
            <div className="w-1/2 ... ">
              {" "}
              <img src={projectData?.coverImage} />
            </div>
          </div>
          <div>
            <button
              onClick={() => (window.location = projectData?.link)}
              class="bg-white border border-borderColor border-opacity-50 rounded-sm px-4 py-2 flex items-center project-Detail-button"
            >
              <img
                src={ExternalLink}
                alt="visit"
                style={{ width: "20px", height: "20px", marginRight: "4px" }}
              />
              Visit Website
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
