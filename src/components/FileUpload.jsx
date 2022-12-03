import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "JPEG", "MP3", "MP4", "MKV", "TXT"];

// This is just a design for now
// I will add the functionality with Lighthouse Later

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        label={"Upload Any file here"}
        hoverTitle={"Drop the files here!"}
        name="file"
        types={fileTypes}
      />

      <button
        type="button"
        class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
      >
        Submit Files
      </button>
    </div>
  );
}

export default DragDrop;
