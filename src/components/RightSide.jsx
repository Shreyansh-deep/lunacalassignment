import React, { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../assets/1.avif";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.jpg";

const RightSide = () => {
  const [imgArray, setImgArray] = useState([img1, img2, img3, img4, img5]);
  const [activeTab, setActiveTab] = useState("aboutMe");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddImage = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = handleFileChange;
    fileInput.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    readImageFile(file);
  };

  const readImageFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImgArray([...imgArray, imageDataUrl]);
      toast("Images added to Gallery!");
    };
    reader.readAsDataURL(file);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "aboutMe":
        return (
          <>
            <p className="text-gray-300 my-4">
              Hello! I'm Shreyansh deep, working as a Frontend developer for 1+
              years of experience.
            </p>
            <p className="text-gray-400 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </>
        );
      case "experiences":
        return (
          <>
            <p className="text-gray-300 my-4">
              This is Experience tab, I have 2+ years of experience and 1+ year
              of experience in ReactJS.
            </p>
            <p className="text-gray-400 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </>
        );
      case "recommended":
        return (
          <>
            <p className="text-gray-300 my-4">This is Recommended tab.</p>
            <p className="text-gray-400 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </>
        );
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-rightBg rounded-2xl h-72 px-8 py-4 overflow-y-scroll scrollbar scrollbar-thumb-gray-300 ">
        <FaRegQuestionCircle className="text-gray-400" />
        <div className="flex justify-around text-gray-300 bg-darkGray py-1 rounded-2xl ">
          <p
            className={`cursor-pointer hover:bg-gray-400 rounded-2xl text-center px-8 py-3 ${
              activeTab === "aboutMe" ? "focus" : ""
            }`}
            onClick={() => handleTabClick("aboutMe")}
          >
            About Me
          </p>
          <p
            className={`cursor-pointer hover:bg-gray-400 rounded-2xl text-center px-8 py-3 ${
              activeTab === "experiences" ? "focus" : ""
            }`}
            onClick={() => handleTabClick("experiences")}
          >
            Experiences
          </p>
          <p
            className={`cursor-pointer hover:bg-gray-400 rounded-2xl text-center px-8 py-3 ${
              activeTab === "recommended" ? "focus" : ""
            }`}
            onClick={() => handleTabClick("recommended")}
          >
            Recommended
          </p>
        </div>
        <div className="h-36 overflow-y-scroll scrollbar scrollbar-thumb-gray-300" >
          {renderContent()}
        </div>
      </div>
      <div className="px-6 border-2 border-rightBg shadow-xl"></div>
      <div className="flex flex-col px-8 py-4 bg-rightBg rounded-2xl h-72 ">
        <div className="flex justify-between mb-8">
          <div className="bg-darkGray px-6 py-3 w-32 h-fit text-white text-center rounded-xl">
            Gallery
          </div>

          <div
            className="text-white rounded-3xl border-t-white border-t-2 border-b-gray-700 hover:bg-darkGray border-b-2 shadow-[0_4px_0_0_rgba(0,0,0,0.25)] backdrop-blur-md px-5 py-2 h-fit cursor-pointer"
            onClick={handleAddImage}
          >
            + ADD IMAGE
          </div>
          <ToastContainer />
          <div className="flex gap-4">
            <div
              className="bg-btnBg hover:bg-gray-700 h-fit  rounded-full p-2 "
              style={{
                filter: "drop-shadow(0 0 10px rgba(169, 169, 169, 0.5))",
              }}
            >
              <IoMdArrowRoundBack size={24} color="#6f787c" />
            </div>
            <div
              className="bg-btnBg hover:bg-gray-700 h-fit rounded-full p-2 "
              style={{
                filter: "drop-shadow(0 0 10px rgba(169, 169, 169, 0.5))",
              }}
            >
              <IoMdArrowRoundForward size={24} color="#6f787c" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 overflow-y-scroll scrollbar scrollbar-thumb-gray-300 ">
          {imgArray.map((item, index) => {
            return (
              <img
                src={item}
                alt=""
                className="w-48 h-40 rounded-2xl mb-6"
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="px-6 border-2 border-rightBg shadow-xl"></div>
    </div>
  );
};

export default RightSide;
