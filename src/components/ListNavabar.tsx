import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

type ListNavabarprops = { iconsUlClass: string; navUlClass: string };

const ListNavabar = ({ navUlClass, iconsUlClass }: ListNavabarprops) => {
  return (
    <>
      <ul className={navUlClass}>
        <a href="#home" className="links">
          <li>Home</li>
        </a>

        <a href="#tech" className="links">
          <li>Tech</li>
        </a>

        <a href="#projects" className="links">
          <li>Projects</li>
        </a>

        <a href="#contacts" className="links">
          <li>Contacts</li>
        </a>
      </ul>

      <ul className={iconsUlClass}>
        <a href="https://www.linkedin.com/in/wanjang-i-gituku" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
        </a>

        <a href="https://x.com/WanjangiG" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white hover:opacity-100">
            <BsTwitterX />
          </li>
        </a>

        <a href="https://github.com/Ras-Pekt" target="_blank">
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white hover:opacity-100">
            <BsGithub />
          </li>
        </a>
      </ul>
    </>
  );
};

export default ListNavabar;
