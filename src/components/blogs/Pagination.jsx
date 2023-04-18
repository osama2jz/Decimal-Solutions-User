import React from "react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

const Pagination = (props) => {
  console.log("@@@@", props);
  const pages = new Array(Math.ceil(props.length / 6)).fill(1, 0);
  console.log("@@@@", pages);

  const [chevronColor, setChevronColor] = React.useState("black");
  const [chevronRightColor, setChevronRightColor] = React.useState("black");

  return (
    <div className="flex text-black justify-center items-center">
      <div
        className=" m-1 rounded-full border-2 w-16 h-16 flex justify-center items-center hover:bg-[#A4238F] duration-200"
        onMouseEnter={() => {
          setChevronColor("#fff");
        }}
        onMouseLeave={() => {
          setChevronColor("black");
        }}
        onClick={() => {
          props.page > 0 && props.setPage(props.page - 1);
        }}
      >
        <ChevronLeft
          size={32}
          style={{
            color: chevronColor,
            margin: "10px",
            cursor: props.page === 0 ? "not-allowed" : "pointer",
          }}
        />
      </div>
      {pages.map((page, index) => (
        <div
          onClick={() => {
            props.setPage(index);
          }}
          // onMouseEnter={() => {
          //   setChevronColor("#fff");
          // }}
          // onMouseLeave={() => {
          //   setChevronColor("black");
          // }}
          key={index}
          className=" m-1 rounded-full border-2 w-16 h-16 flex justify-center items-center "
          style={{
            cursor: "pointer",
            backgroundColor: props.page === index ? "#A4238F" : "white",
          }}
        >
          <h1
            className=" p-8 text-2xl"
            style={{
              color: props.page === index ? "#fff" : "black",
            }}
          >
            {index + 1}
          </h1>
        </div>
      ))}
      <div
        className=" m-1 rounded-full border-2 w-16 h-16 flex justify-center items-center hover:bg-[#A4238F] duration-200 "
        onClick={() => {
          props.page < pages.length - 1 && props.setPage(props.page + 1);
        }}
        onMouseEnter={() => {
          setChevronRightColor("#fff");
        }}
        onMouseLeave={() => {
          setChevronRightColor("black");
        }}
      >
        <ChevronRight
          size={32}
          color={chevronRightColor}
          style={{
            margin: "10px",
            cursor: props.page < pages.length - 1 ? "pointer" : "not-allowed",
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
