import { Link } from "react-router-dom";
import shotsImage from "../images/shots.jpg";
import tipsImage from "../images/tips.jpg";
import racketsImage from "../images/rackets.jpg";

import { ReactComponent as ReactLogo } from "../images/react.svg";

const links = [
  { to: "shots", label: "Shots", image: shotsImage },
  { to: "tips", label: "Tips", image: tipsImage },
  { to: "rackets", label: "Rackets", image: racketsImage },
];

const Welcome = () => {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-3 gap-20">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex flex-col items-center gap-2 rounded-xl bg-cover bg-center py-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.027),rgba(0, 0, 0, 0.3)), url(${link.image})`,
            }}
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary-800">
              <span className="text-2xl font-bold text-primary-50">
                {link.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
