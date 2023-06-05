import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../constants";
import { Loader, Title } from "@mantine/core";

const TeamCards = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileCards, setProfileCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/teamMembers").then((res) => {
      setProfileCards(res.data.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="flex justify-center px-6 gap-10 items-center flex-wrap mt-16">
      {isLoading ? (
        <Loader
          size={"xl"}
          color="purple"
          style={{ margin: "auto", marginBlock: "100px" }}
        />
      ) : profileCards.length ? (
        profileCards.map((item) => (
          <div className="flex items-center justify-center text-black my-5">
            <div className="flex flex-col gap-4">
              <img
                alt="user"
                src={item.teamMemberImage}
                onClick={()=>window.location.href(item?.githubLink)}
                className="xs:w-[350px] aspect-square object-cover rounded-2xl cursor-pointer"
              />
              <div className="">
                <h1 className="font-bold text-xl">{item.teamMemberName}</h1>
                <p className="font-poppins">{item.teamMemberTitle}</p>
                <p className="text-xs">{item?.officialPhone}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Title>No Team Member Found.</Title>
      )}
    </div>
  );
};

export default TeamCards;
