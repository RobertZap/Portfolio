import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:border-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">
          <a href="#" className="">
            <BiHomeAlt />
          </a>
          <a href="#" className="">
            <BiUser />
          </a>
          <a href="#" className="">
            <BsClipboardData />
          </a>
          <a href="#" className="">
            <BsBriefcase />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
