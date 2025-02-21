import { PartnersSectionBox } from "../../ui/PartnersSectionBox/PartnersSectionBox";
import "./PartnersSection.scss"

import document_img from "../../assets/images/Document.svg"
import calendar_img from "../../assets/images/Calendar.svg"
import chat_img from "../../assets/images/Chat.svg"
import star_img from "../../assets/images/Star.svg"
import wallet2_img from "../../assets/images/Wallet2.svg"
import { BlueButton } from "../BlueBotton/BlueButton";

export const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="partners-section__container">
        <h3 className="partners-section__title">
          Стань нашим партнером и начни зарабатывать:
        </h3>
        <div className="partners-section__subtitle">
          Автоматизируй свой бизнес вместе с нами. Подключись к нашей системе
          бронирования, что бы получать новых клиентов и распределить нагрузку
          равномерно на весь день. Мы предоставляем удобные инструменты для
          формирования отчетов в несколько кликов и многое другое.
        </div>
        <div className="partners-section__boxes">
            <PartnersSectionBox img={document_img} text="Просмотривайте историю заказа"/>
            <PartnersSectionBox img={calendar_img} text="Создание отчета неделя/месяц/год"/>
            <PartnersSectionBox img={chat_img} text="Обратная связь от клиентов"/>
            <PartnersSectionBox img={star_img} text="Контроль качества работы сотрудников"/>
            <PartnersSectionBox img={wallet2_img} text="Бесконтактная оплата работы"/>
        </div>
        <BlueButton name="Стать партнером"/>
      </div>
    </section>
  );
};
