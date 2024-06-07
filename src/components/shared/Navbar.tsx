import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center banner text-white py-5 px-10 absolute top-0 left-0 w-full">
      <div>
        <h2 className="text-5xl font-bold logo magnify p-3">R</h2>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-3">
          <li>
            <a href="#" className="menu-item magnify ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="menu-item magnify">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="menu-item magnify">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="menu-item magnify">
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div>
        <FaBars size={20} className="icon magnify stickyCursor " />
      </div>
    </nav>
  );
};

export default Navbar;
