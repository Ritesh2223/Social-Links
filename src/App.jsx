import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane, FaLinkedin, FaLink, FaGithub, FaSnapchat, FaSnapchatGhost, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const App = () => {
  // ------------ DATA-------------
  const data = [
    {
      id: 1,
      icon: <FaLink size={25} />,
      name: "TextUtils",
      url: "https://ritesh2223.github.io/TextUtils/",
    },
    {
      id: 2,
      icon: <FaGithub size={26} />,
      name: "GitHub",
      url: "https://github.com/Ritesh2223",
    },
    {
      id: 3,
      icon: <FaLinkedin size={25} />,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/ritesh-goriya29072202/",
    },
  ];
  // ------------ DATA-------------
  return (
    <div className="gradient-background flex items-center justify-center flex-col">
      {/* ----------- Animations-------START */}
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/* ------------- Animations-------END */}
      <div className=" flex items-center justify-center flex-col ">
        {/* ------------- IMAGE ----- START */}
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img
            className=" mix-blend-difference w-[100px] rounded-full bg-black "
            src="https://i.postimg.cc/nccHtr8x/pngwing-com.png"
            alt=""
          />
          <h2 className=" text-white text-[1.65rem] font-bold">
            Ritesh Goriya
          </h2>
          <div className=" w-[360px] text-center">
            <p className=" text-white text-[1rem] font-medium">
              Web Developer 
            </p>
          </div>
        </div>
        {/* ----------- IMAGE ----- END */}
        {/* -------------- SOCIAL LINKS ---- START */}
        <div className=" mt-8 space-y-4">
          {/* ------------ CARDS ----- START */}

          {data.map((i) => (
            <Link
              to={i.url}
              target="_blank"
              key={i.id}
              className=" flex items-center gap-2 w-[320px] bg-white bg-opacity-20 border border-white text-white backdrop-blur-lg rounded drop-shadow-lg p-3 px-4 cursor-pointer hover:bg-opacity-40"
            >
              {i.icon}
              <p className=" font-medium ">{i.name}</p>
            </Link>
          ))}

          {/* ------- Fiver and Upwork Link START ---------- */}
          <div className=" z-40 flex items-center justify-between space-x-3 ">
            <Link
              to={"https://www.instagram.com/ritesh_goriya"}
              className="flex-1 flex items-center gap-2 bg-white bg-opacity-20 border border-white text-white backdrop-blur-lg rounded drop-shadow-lg p-3 px-4 cursor-pointer hover:bg-opacity-40 font-medium text-center"
            >
              <FaInstagram size={26} />
              Instagram
            </Link>
            <Link 
              to={"https://www.snapchat.com/add/ritesh_goriya?share_id=Mbb7FBCwxSI&locale=en-IN"}
              className="flex-1 flex items-center gap-2 bg-white bg-opacity-20 border border-white text-white backdrop-blur-lg rounded drop-shadow-lg p-3 px-4 cursor-pointer hover:bg-opacity-40 font-medium text-center">
            <FaSnapchatGhost size={26} />
              Snapchat
            </Link>
          </div>
          {/* ------- Fiver and Upwork Link END ---------- */}
          {/* --------- CARDS ----- END */}
        </div>
        {/* -------- SOCIAL LINKS ---- END */}

        <div className=" w-[320px] text-justify mt-6 text-[10.38px] text-white">
        </div>
      </div>
    </div>
  );
};

export default App;
