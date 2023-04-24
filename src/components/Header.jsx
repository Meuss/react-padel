import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="bg-myColor-500 py-4">
        <div className="container text-center">
          <span className="font-bold">
            A project to play around while learning React
          </span>
        </div>
      </div>
      <div className="bg-black py-4 text-white">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="logo" width="50px" className="" />
            <i>React Padel</i>
          </Link>
          <div className=" font-bold">Langswitcher</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
