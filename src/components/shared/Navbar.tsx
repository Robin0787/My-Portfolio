import { FaGithub } from "react-icons/fa";
import { RxResume } from "react-icons/rx";
import Container from "../ui/Container";

const Navbar = () => {
  return (
    <nav className=" banner text-white py-2 absolute top-0 left-0 w-full border-b border-gray-600">
      <Container>
        <div className="flex justify-between items-center py-3">
          <div>
            <a
              href="https://drive.google.com/file/d/1YaSl00xHRZKeG8OLaAoa4AXMgCFE3oBU/view"
              target="_blank"
              className="magnify"
            >
              <RxResume size={30} />
            </a>
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
            <div className="space-x-3 flex justify-between items-center">
              <a
                href="https://github.com/Robin0787"
                target="_blank"
                className="magnify"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
