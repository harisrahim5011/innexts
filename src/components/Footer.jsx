import JoinNewsLater from "./JoinNewsLater";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <div className=" gap-5 md:flex md:justify-evenly items-center w-full  flex-wrap">
      <JoinNewsLater></JoinNewsLater>
      <SocialMediaIcons></SocialMediaIcons>
    </div>
  );
}
