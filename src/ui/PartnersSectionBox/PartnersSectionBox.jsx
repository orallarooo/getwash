import "./PartnersSectionBox.scss"

export const PartnersSectionBox = ({img, text}) => {
    return ( 
        <div className="partners-box">
            <div className="partners-box__img">
                <img src={img} alt="" />
            </div>
            <p>{text}</p>
        </div>
     );
}