import React, { useState, useRef, useEffect } from "react";
import { FaCalendarDays, FaPlus } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { IoAttachOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuBookOpen } from "react-icons/lu";


const Card = () => {
  const [files, setFiles] = useState([]);
  const [attachmentCount, setAttachmentCount] = useState(0);
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Save the file name to the state array
    setFiles((prevFiles) => [...prevFiles, selectedFile.name]);

    // Save the files array to localStorage
    localStorage.setItem("files", JSON.stringify([...files, selectedFile.name]));
  };

  // const uploadFile = () => {
  //   // Simulate an API call to upload the file to the server
  //   // ...

  //   setAttachmentCount((prevCount) => prevCount + 1);
  // };

  const handleAttachClick = () => {
    fileInputRef.current.click();
    setAttachmentCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("files"));
    if (storedFiles) {
      setFiles(storedFiles);
    }
  }, []);

  const handleTextClick = () => {
    setIsFullTextVisible(true);
  };


  return (
    <div className="bg-white p-2 mt-3 w-auto ">
      <div className="flex justify-between ">
        <div className="flex">
          <div className="avatar">
            <div className="w-[20px] h-[20px] rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
            </div>
          </div>
          <h1 className="ml-1 font-bold text-sm">Client Name</h1>
        </div>
        <div className="flex">
          <div className="avatar">
            <div className="w-[20px] h-[20px] rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
            </div>
          </div>
          <h1 className="ml-1 font-bold text-sm">Client Name</h1>
        </div>
      </div>

      <div className="flex justify-between mt-5">
          <div className="flex">
            <LuBookOpen size={15} className="mt-2 mr-1"/>
          <h1 onClick={handleTextClick}>
            {isFullTextVisible
              ? " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, incidunt!"
              : "Lorem ipsum dolor sit amet consectetur ..."}
          </h1>  
            </div>      
          <div className="flex btn btn-xs">
          <FaCalendarDays size={10} className="" />10/4
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="avatar">
          <div className="w-[20px] h-[20px] rounded-full mt-1">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-[20px] h-[20px] rounded-full mt-1">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
          </div>
        </div>
        <div className="avatar bg-[#F2F4F7] p-1 rounded-full">
          <div className="w-[25px] h-[20px] rounded-full">
            <p className="flex">12 <FaPlus size={10} className="mt-2" /></p>
          </div>
        </div>
        <div className="flex">
          <LuMessagesSquare size={20} className="mt-1 mr-1" />
          15
        </div>
        <div className="flex">
          <div className="w-[25px] h-[20px] rounded-full" onClick={handleAttachClick}>
            <IoAttachOutline size={20} className="mt-1 mr-1 cursor-pointer" />
          </div>
          {files.length}
        </div>
        <div className="flex">
          <MdOutlineCalendarMonth size={20} className="mt-1 mr-1" />
          9-12-23
        </div>
      </div>

      {/* Hidden file input for file upload */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Card;
