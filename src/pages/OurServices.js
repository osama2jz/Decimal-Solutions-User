import React, { useEffect, useState } from "react";
import Banner from "../components/our-services/Banner";
import MainCover from "../assets/images/main-cover.jpg";
import RowLayout from "../components/our-services/RowLayout";
import ServiceImage1 from "../assets/images/service-image-1.jpg";
import ServiceImage2 from "../assets/images/service-image-2.jpg";
import axios from "axios";
import { backendUrl } from "../constants";
import { Loader, Title } from "@mantine/core";

export default function OurServices() {
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Website Development",
      image: ServiceImage1,
      description:
        "To give your business a progressive outlook, we create a website precisely tailored to your needs. Our highly qualified and creative team employs the latest technologies like MongoDB, Express, React, and Node (MERN Stack) to give your website visitors a phenomenal experience. The websites developed are fully responsive and customizable for Desktop, Mobile, and Tablet. We take care of everything from website designing to development, so you just sit back and enjoy engaging visits to your website.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      image: ServiceImage2,
      description:
        "Our team works on bringing your brand to people’s pockets, by making high-performance mobile apps for your business. To bring glory to mobile app development, our experts employ React Native framework. We can create customizable mobile apps for you that works perfectly on multiple platforms including Android and iOS. You will get a secure, responsive, stable, and user-friendly mobile app to boost your business.",
    },
    {
      id: 3,
      title: "Graphic Design",
      image: ServiceImage1,
      description:
        "To communicate the story behind your brand/product to your customers in visuals; our graphic designing team uses the perfect color combinations, images, artistic designs, typography, and animations. Our experts create a customized and professional art, just for your business, that helps draw more attention and make a lasting impression on your customers. ",
    },
    {
      id: 4,
      title: "Digital Marketing",
      image: ServiceImage2,
      description:
        "Promoting your brand is an important milestone if you want to achieve your commercial objectives. To increase visibility and customer engagement on your website, our digital marketing strategists develop a comprehensive strategy after monitoring and evaluating customer interaction. These strategies make sure to increase the revenue generated from your website and increase your online presence, leaving a digital footprint on search engines and social media platforms.",
    },
    {
      id: 5,
      title: "ERP Business Solutions",
      image: ServiceImage1,
      description:
        "Enterprise resource planning (ERP) software is increasingly becoming essential for managing business needs. Our experienced and enthusiastic team is all set to provide the best ERP solutions to efficiently manage departments like Finance, HR, Supply Chain, Procurement, Manufacturing, Inventory, Marketing, etc. It will make it easy for you to manage your day-to-day business activities, providing enough room for more productivity.",
    },
    {
      id: 6,
      title: "AR/VR Game Development",
      image: ServiceImage2,
      description:
        "Merging the real and virtual to make your business stand out among others is what our AR/VR development team does. The animations created through these technologies give your website a unique look and engage more customers. Our developers create AR and VR apps for iPad, iPhone, Android, and Windows. By combining technology and creativity, we create unique spaces and experiences for you and your business. ",
    },
  ]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/services").then((res) => {
      setServices(res.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <Banner backgroundImage={MainCover}>Our Services</Banner>
      {isLoading ? (
        <Loader
          size={"xl"}
          color="purple"
          style={{ margin: "auto", marginBlock: "100px" }}
        />
      ) : (
        <div className="offers my-[70px] flex flex-col gap-[40px] px-[30px] sm:my-[80px] sm:gap-[45px] sm:px-[50px] md:my-[100px] md:gap-[55x] md:px-[80px] lg:my-[115px] lg:gap-[70px] lg:px-[100px] xl:my-[130px] xl:gap-[85px] xl:px-[120px] 2xl:my-[150px] 2xl:gap-[100px] 2xl:px-[146px] ">
          {services.length ? (
            services.map((service, index) => {
              return (
                <RowLayout
                  border
                  reverse={index % 2 === 0 ? false : true}
                  heading={service.title}
                  image={service.coverImage}
                >
                  {service.description}
                </RowLayout>
              );
            })
          ) : (
            <Title>No Serivces Available</Title>
          )}
        </div>
      )}
    </>
  );
}
