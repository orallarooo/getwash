import "./AppsSection.scss"

import appstore_img from "../../assets/images/appsstore.svg"
import googleplay_img from "../../assets/images/googleplay.svg"
import group_img from "../../assets/images/group.png"

export const AppsSection = () => {
    return ( 
        <section className="apps-section">
            <div className="apps-section__container">
                <div className="apps-section__content">
                    <h3 className="apps-section__title">
                        Хватит тратить свое
                        время в очередях
                    </h3>
                    <p className="apps-section__subtitle">
                        Приложение скоро будет доступно для бета
                        тестирования в AppStore и Google Play
                    </p>
                    <div className="apps-section__box">
                        <img src={appstore_img} alt="" />
                        <img src={googleplay_img} alt="" />
                    </div>
                </div>
                <div className="app-section__right">
                    <img src={group_img} alt="" />
                </div>
            </div>
        </section>
    );
}