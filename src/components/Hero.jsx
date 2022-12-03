import React from "react";
import Upload from "../components/Upload";
import FileUpload from "../components/FileUpload";

function Hero() {
  return (
    <div className="w-full h-screen dark:bg-gray-900 flex items-center justify-center">
      {/* <Upload /> */}
      <FileUpload />
    </div>
  );
}

export default Hero;
