import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).catch((error) => {
      console.error("Error changing language:", error);
    });
  };

  const langBtn = (language: string) => {
    return (
      <button
        className={i18n.language === language ? "text-primary-500" : ""}
        onClick={() => changeLanguage(language)}
      >
        {language.toUpperCase()}
      </button>
    );
  };

  return (
    <div className="flex gap-4">
      {langBtn("en")}
      {langBtn("fr")}
    </div>
  );
};

export default LanguageSwitcher;
