import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../images/react.svg";

const Welcome = () => {
  return (
    <div className="flex-1">
      <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold">
        <span>Welcome to</span>
        <ReactLogo />
        <span>Padel</span>
      </h2>
      <div className="grid grid-cols-3 gap-20">
        <Link
          to="/shots"
          className="flex flex-col items-center justify-center rounded border p-4 shadow-sm"
        >
          Shots
        </Link>
        <Link
          to="/rackets"
          className="flex flex-col items-center justify-center rounded border p-4 shadow-sm"
        >
          Rackets
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
