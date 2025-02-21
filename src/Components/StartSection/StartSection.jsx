import { SectionBox } from "../../ui/StartSectionBox/SectionBox";

import "./StartSection.scss"

import download_img from "../../assets/images/Download.svg";
import location_img from "../../assets/images/Location.svg";
import filter_img from "../../assets/images/Filter.svg";
import wallet_img from "../../assets/images/Wallet.svg";


export const StartSection = () => {
  return (
    <section className="start-section">
      <div className="start-section__container">
        <div className="start-section__left">
        </div>
        <div className="start-section__right">
          <h2 className="start-section__title">
              Быстрый старт:
          </h2>
          <div className="start-section__boxes">
            <SectionBox img={download_img} title="Скачай и зарегистрируйся" text="Наше приложение доступно в Apple Store и Google Play"/>
            <SectionBox img={location_img} title="Выбери ближайшую автомойку" text="Из свободных поблизости или оставь заказ на удобное время"/>
            <SectionBox img={filter_img} title="Выбери дополнительные услуги" text="Можешь их добавить к своему основному заказу"/>
            <SectionBox img={wallet_img} title="Оплати внутри приложения " text="Бесконтактная оплата внутри приложения и прозрачные цены"/>
          </div>
        </div>
      </div>
    </section>
  );
};
