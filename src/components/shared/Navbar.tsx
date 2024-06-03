const Navbar = () => {
  return (
    <nav className="flex justify-between items-center banner text-white py-8 px-10 absolute top-0 left-0 w-full">
      <div>
        <p>Logo</p>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-3">
          <li>
            <a href="#" className="menu-item magnet hideCursor">
              About
            </a>
          </li>
          <li>
            <a href="#" className="menu-item magnet hideCursor">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="menu-item magnet hideCursor">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="menu-item magnet hideCursor">
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://www.google.com/s2/favicons?domain=Facebook.com&sz=40"
          alt="facebook"
          className="rounded-full magnet"
        />
      </div>
    </nav>
  );
};

export default Navbar;
