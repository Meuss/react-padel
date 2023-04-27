import "../styles/nav.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/store";
import Nav from "./Nav";
import { closeMenu } from "../store/mobileMenuSlice";

const MobileMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.mobileMenu.open);

  useEffect(() => {
    dispatch(closeMenu());
  }, [location, dispatch]);

  return (
    <div
      className={`absolute z-10 h-full w-full flex-1 bg-zinc-900 p-4 transition-all duration-500 md:hidden ${
        isOpen ? "" : "-translate-x-full"
      }`}
    >
      <Nav mobile={true} />
    </div>
  );
};

export default MobileMenu;
