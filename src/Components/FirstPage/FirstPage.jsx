import vector_img from "../../assets/images/Arrow1.png";
import { BlueButton } from "../BlueBotton/BlueButton";

import "./FirstPage.scss";

export const FirstPage = () => {
  return (
    <section className="first-page">
      <div className="first-page__container">
        <div className="first-page__content">
          <h1 className="first-page__title">
            Поиск ближайшей свободной автомойки и бронирование на удобное время.
            <span>
              <img src={vector_img} alt="" />
            </span>
          </h1>
          <div className="first-page__subtitle">
                Мы поможем сохранить ваше время для более 
                интересных занятий, чем стоять в очереди.
          </div>
          <BlueButton name="Получить доступ"/>
        </div>
      </div>
    </section>
  );
};
