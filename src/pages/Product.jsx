import React, { useEffect, useState } from "react";
import Banner from "../components/our-services/Banner";
import MainCover from "../assets/images/Product.svg";
import RowLayout from "../components/our-services/RowLayout";
import ServiceImage1 from "../assets/images/service-image-1.jpg";
import ServiceImage2 from "../assets/images/service-image-2.jpg";
import { backendUrl } from "../constants";
import axios from "axios";
import { Loader, Title } from "@mantine/core";

function Product() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Website Development",
      image: ServiceImage1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled it to make a tysape specimen book. It has survived not only a five centuries, but also the leap into electronic typesetting.",
    },
    {
      id: 2,
      title: "CRM Based Solutions",
      image: ServiceImage2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled it to make a tysape specimen book. It has survived not only a five centuries, but also the leap into electronic typesetting.",
    },
    {
      id: 3,
      title: "Health Based Solutions",
      image: ServiceImage1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled it to make a tysape specimen book. It has survived not only a five centuries, but also the leap into electronic typesetting.",
    },
    {
      id: 4,
      title: "E-commerce Based Solutions",
      image: ServiceImage2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled it to make a tysape specimen book. It has survived not only a five centuries, but also the leap into electronic typesetting.",
    },
  ]);
  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/products").then((res) => {
      setProducts(res.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <Banner backgroundImage={MainCover}>Our Products</Banner>
      {isLoading ? (
        <Loader
          size={"xl"}
          color="purple"
          style={{ margin: "auto", marginBlock: "100px" }}
        />
      ) : (
        <div className="offers my-[70px] flex flex-col gap-[40px] px-[30px] sm:my-[80px] sm:gap-[45px] sm:px-[50px] md:my-[100px] md:gap-[55x] md:px-[80px] lg:my-[115px] lg:gap-[70px] lg:px-[100px] xl:my-[130px] xl:gap-[85px] xl:px-[120px] 2xl:my-[150px] 2xl:gap-[100px] 2xl:px-[146px] ">
          {products.length ? (
            products.map((product, index) => {
              return (
                <RowLayout
                  withBgColor
                  withButton
                  border
                  reverse={index % 2 === 0 ? false : true}
                  heading={product.title}
                  image={product.image}
                  style={{ backgroundImage: "red" }}
                >
                  {product.description}
                </RowLayout>
              );
            })
          ) : (
            <Title>No Products Available</Title>
          )}
        </div>
      )}
    </>
  );
}

export default Product;
