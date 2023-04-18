import React from "react";
import ImageWithBorder from "./ImageWithBorder";
import TextContent from "./TextContent";
export default function RowLayout({
  children,
  border,
  reverse,
  heading,
  image,
}) {
  return (
    <div
      className={`max-h-670px flex h-full justify-between lg:gap-[20px] 2xl:gap-[40px] 2xl:pb-[80px] ${
        border && "border-b border-borderColor"
      } ${reverse && "flex-row-reverse"}`}
    >
      <TextContent reverse={reverse} heading={heading}>
        {children}
      </TextContent>
      <ImageWithBorder imageSource={image} reverse={reverse} />
    </div>
  );
}
