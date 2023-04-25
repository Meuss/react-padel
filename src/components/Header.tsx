import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="bg-primary-600 py-4">
        <div className="container text-center">
          <span className="font-bold">
            A project to play around while learning React
          </span>
        </div>
      </div>
      <div className="bg-zinc-900 py-4 text-white">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <Logo />
            <i>React&nbsp;Padel</i>
          </Link>
          <div className=" font-bold">Langswitcher</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
