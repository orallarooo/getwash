import "./Footer.scss"

import get_logo from "../../assets/images/GetWashFooterlogo.svg"
import { ButtonAccess } from "../ButtonAccess/ButtonAccess";

export const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer__container">
                <a href="#" className="logo">
                    <img src={get_logo} alt="" />
                </a>
                <nav className="footer__nav">
                    <ul className="footer__nav-items">
                        <li className="footer__nav-item">
                            <a href="#" className="footer__nav-link">Как использовать</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="footer__nav-link">Партнерам</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="footer__nav-link">Скачать</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="footer__nav-link">Отзывы</a>
                        </li>
                    </ul>
                </nav>
                <ButtonAccess />
            </div>
        </footer>
    );
}