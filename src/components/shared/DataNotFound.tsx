import React from "react";
import ImageWrapper from "./ImageWrapper";
import { IMAGES } from "@/constants/images";

const DataNotFound = ({ message }: { message: string }) => {
  return (
    <div className="w-full max-w-dvh flex flex-col items-center justify-center h-full gap-2 mx-auto">
      <ImageWrapper
        src={IMAGES.COMMON.DATA_NOT_FOUND}
        alt="Data Not Found"
        className={{
          container: "w-1/2",
        }}
      />
      <p className="text-text-dark dark:text-white">{message}</p>
    </div>
  );
};

export default DataNotFound;
