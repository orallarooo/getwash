import "./Header.scss"

import get_img_logo from "../../assets/images/GetWash.svg"
import { ButtonAccess } from "../ButtonAccess/ButtonAccess";

export const Header = () => {
    return ( 
        <header className="header">
            <div className="header__container">
                <div className="logo">
                    <img src={get_img_logo} alt="" />
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-items">
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Как использовать</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Партнерам</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Скачать</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Отзывы</a>
                        </li>
                    </ul>
                </nav>
                <ButtonAccess />
            </div>
        </header>
    );
}