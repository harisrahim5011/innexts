import { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import star from "../assets/logo-small.png"; 

<img className="w-8" src={star} />

export default function NavFinal() {
  const [showMenu, setshowMenu] = useState(false);
  console.log(showMenu);
  return (
    <div className="">
      <div className="mb-2 md:py-2 flex justify-between w-[80vw] mx-auto border-2 rounded-3xl px-4 shadow-sm ">
        <div className="w-20 md:w-32  flex items-center">
          <img src={star} alt="logo"  />
        </div>
        <ul className="hidden  gap-5 md:flex">
          <li className="p-1">
            <a href="">Home</a>
          </li>
          <li className="p-1">
            <a href="">about</a>
          </li>
          <li className="p-1">
            <a href="">Service</a>
          </li>
          <li className="p-1">
            <a href="">contact</a>
          </li>
        </ul>
        <div>
          <button className="bg-blue-500 p-2 rounded-lg w-40 hidden md:inline-block  ">
            Call
          </button>
          <button
            className="bg-transparent md:hidden"
            onClick={() => {
              setshowMenu(!showMenu);
            }}
          >
            <CiBoxList size={25} />
          </button>
        </div>
      </div>

      {/* for mobile device */}
      {      (showMenu)?(
      <ul className=" gap-5 flex flex-col items-center mt-2 md:hidden ">
        <li className="p-1">
          <a href="">Home</a>
        </li>
        <li className="p-1">
          <a href="">about</a>
        </li>
        <li className="p-1">
          <a href="">Service</a>
        </li>
        <li className="p-1">
          <a href="">contact</a>
        </li>
      </ul>
      ):null}
    </div>
  );
}
