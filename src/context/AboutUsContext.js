import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { backendUrl } from "../constants";

export const UserContext = createContext({});
const AboutUsProvider = (props) => {
  const [aboutUs, setAboutUs] = useState(
    JSON.parse(localStorage.getItem("aboutUs"))?.userType
  );

  const getMyData = () => {
    axios
      .get(backendUrl + "/api/v1/web/contactUs")
      .then((res) => {
        console.log(" about us in context", res.data?.data[0]);
        setAboutUs(res.data?.data[0]);
        localStorage.setItem("aboutUs", JSON.stringify(res.data?.data[0]));
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMyData();
  }, []);

  //   const token = localStorage.getItem("token");
  const values = {
    aboutUs,
    setAboutUs,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default AboutUsProvider;
