import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


export default function SocialMediaIcons() {
  return (
    <div className="flex justify-around md:justify-center [&>*]:size-10">
      <FaInstagram />
      <CiFacebook />
      <CiTwitter />
    </div>
  );
}


