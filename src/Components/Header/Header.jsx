import "./Header.scss";

import get_img_logo from "../../assets/images/GetWash.svg";
import { ButtonAccess } from "../ButtonAccess/ButtonAccess";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import { useMenu } from "../MenuContext/MenuContext";

export const Header = () => {
    const { isOpen, toggleMenu } = useMenu();

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="logo">
          <img src={get_img_logo} alt="" />
        </a>
        <nav className={`header__nav ${isOpen ? "mobile" : ""}`}>
            <ul className="header__nav-items">
                <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                    Как использовать
                </a>
                </li>
                <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                    Партнерам
                </a>
                </li>
                <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                    Скачать
                </a>
                </li>
                <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                    Отзывы
                </a>
                </li>
            </ul>
            <ButtonAccess />
        </nav>
        <BurgerMenu />
      </div>
    </header>
  );
};
