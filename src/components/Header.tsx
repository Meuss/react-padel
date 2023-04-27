import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
import Burger from "./Burger";
import { useTranslation } from "react-i18next";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="bg-primary-600 py-4">
        <div className="container text-center">
          <span className="font-bold">{t("header")}</span>
        </div>
      </div>
      <div className="bg-zinc-900 py-4 text-white">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <Logo />
            <i>React&nbsp;Padel</i>
          </Link>
          <Burger />
          <div className="hidden font-bold md:block">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
