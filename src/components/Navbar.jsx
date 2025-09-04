import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "./Image";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-6 text-2xl font-bold">
        <Image src="logo.png" className="size-8" alt="logo" w={32} h={32} />
        <span>KULUNCAKLI.</span>
      </div>
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <IoCloseOutline /> : <RxHamburgerMenu />}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-6 font-medium text-lg absolute top-16 bg-[#e6e6ff] ${
            open ? "right-0" : "-right-[100%]"
          } transition-all ease-in-out`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </a>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
