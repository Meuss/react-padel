import "../styles/nav.css";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/store";
import { gsap } from "gsap";
import Nav from "./Nav";
import { closeMenu } from "../store/mobileMenuSlice";

const MobileMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.mobileMenu.open);
  const wrapper = useRef<HTMLDivElement>(null);
  const mobmenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(closeMenu());
  }, [location, dispatch]);

  useLayoutEffect(() => {
    gsap.defaults({ ease: "power3.inOut", duration: 1 });
    if (isOpen) {
      gsap.to(mobmenu.current, { xPercent: 100 });
    } else {
      gsap.to(mobmenu.current, { xPercent: 0 });
    }
  }, [isOpen]);

  return (
    <div ref={wrapper}>
      <div
        className="absolute -left-full z-10 h-full w-full flex-1 bg-zinc-900 p-4 md:hidden"
        ref={mobmenu}
      >
        <Nav mobile={true} />
      </div>
    </div>
  );
};

export default MobileMenu;
