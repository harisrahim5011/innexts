import { CiBoxList } from "react-icons/ci";
import NavTest from "./NavTest";

export default function Navbar() {
  return (
    <nav className="flex  justify-between my-0 w-full md:h-16  border-2 sm:justify-between  ">
      <div className="w-20 md:w-32  content-center">
        <img src=".././Images/logo-small.png" alt="" className="logoItem" />
      </div>
      <div className=" nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8  ">
          {/* flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 */}
          {/* nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5 */}
          {/* items-center space-x-3  aboslute lg:flex border-2 h-[50vw] top-[-16] left-0 w-full */}
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
      </div>

      <div className="lg:hidden border-2 self-center">
        <CiBoxList size={25} />
      </div>
      {/* <NavTest></NavTest> */}
      <button className="bg-blue-500 self-center p-2 rounded-lg w-40 hidden lg:block ">
        Call
      </button>
    </nav>
  );
}
