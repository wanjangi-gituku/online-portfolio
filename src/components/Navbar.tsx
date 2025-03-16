import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import ListNavabar from "./ListNavabar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-transparent px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Wanjang'i
      </a>

      <ListNavabar
        navUlClass="hidden md:flex gap-10"
        iconsUlClass="hidden md:flex gap-5"
      />

      {isOpen ? (
        <BsX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ListNavabar
            navUlClass="flex flex-col gap-8"
            iconsUlClass="flex flex-wrap gap-5"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
