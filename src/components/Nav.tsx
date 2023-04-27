import "../styles/nav.css";
import { NavLink } from "react-router-dom";

type TutorialLink = {
  to: string;
  label: string;
  children?: TutorialLink[];
};

interface NavProps {
  mobile?: boolean;
}

const tutorials: TutorialLink[] = [
  { to: "/", label: "Welcome" },
  {
    to: "/shots",
    label: "Shots",
  },
  { to: "/tips", label: "Tips" },
  { to: "/rackets", label: "Rackets" },
];
const Nav: React.FC<NavProps> = ({ mobile = false }) => {
  return (
    <nav className={`${mobile ? "" : ""}`}>
      <ul>
        {tutorials.map((link) => (
          <li
            key={link.to}
            className={`font-bold ${
              mobile ? "mb-6 text-center text-2xl" : "text-md mb-2"
            }`}
          >
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
            {link.children && (
              <ul className="mb-4 mt-2">
                {link.children.map((child) => (
                  <li key={child.to} className="text-md mb-2">
                    <NavLink to={child.to}>{child.label}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
