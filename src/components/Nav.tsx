import "../styles/nav.css";
import { NavLink } from "react-router-dom";

type TutorialLink = {
  to: string;
  label: string;
  children?: TutorialLink[];
};

const tutorials: TutorialLink[] = [
  { to: "/", label: "Welcome" },
  {
    to: "/shots",
    label: "Shots",
    // children: [
    //   { to: "/shots/bandeja", label: "Bandeja" },
    //   { to: "/shots/volley", label: "Volley" },
    //   { to: "/shots/lob", label: "Lob" },
    // ],
  },
  { to: "/tips", label: "Tips" },
  { to: "/rackets", label: "Rackets" },
];
const Nav = () => {
  return (
    <nav>
      <ul>
        {tutorials.map((link) => (
          <li key={link.to} className="text-md mb-2">
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
