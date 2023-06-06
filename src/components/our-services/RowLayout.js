import React from "react";
import ImageWithBorder from "./ImageWithBorder";
import TextContent from "./TextContent";
import { Button } from "react-bootstrap";
export default function RowLayout({
  children,
  border,
  reverse,
  heading,
  withBgColor = false,
  image,
  link,
  withButton = false,
  // even = true
}) {
  return (
    <div
      style={
        withBgColor
          ? { backgroundColor: "rgba(164, 35, 140, 0.15)", padding: "50px" }
          : {}
      }
    >
      <div
        className={`max-h-671px flex h-full justify-between lg:gap-[20px] 2xl:gap-[40px] 2xl:pb-[20px] ${
          border && "border-b border-borderColor"
        } ${reverse && "flex-row-reverse"}`}
      >
        <div className="flex flex-col justify-center">
          <TextContent reverse={reverse} heading={heading}>
            {children}
          </TextContent>
          {withButton && (
            <button
              onClick={()=>window.open(link, "_blank")}
              style={
                !reverse ? { marginRight: "auto" } : { marginLeft: "auto" }
              }
              className="mt-3 bg-accentColor rounded-md text-white font-poppins font-semibold px-[52px] py-[10px]"
            >
              View Demo
            </button>
          )}
        </div>
        <ImageWithBorder imageSource={image} reverse={reverse} />
      </div>
      {/* <button  style={{marginRight:"auto",float:"right"}} className="bg-accentColor rounded-full text-white font-poppins font-semibold px-[52px] py-[10px]">
        View Demo
      </button> */}
    </div>
  );
}
