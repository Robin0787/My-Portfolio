import { FaBars } from "react-icons/fa6";
import Container from "../ui/Container";

const Navbar = () => {
  return (
    <nav className=" banner text-white py-2 absolute top-0 left-0 w-full border-b border-gray-600">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-5xl font-bold logo magnify p-3 pl-0">R</h2>
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
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
