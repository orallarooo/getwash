import "./SectionBox.scss"

export const SectionBox = ({img,title,text}) => {
    return ( 
        <div className="section-box">
            <div className="section-box__img">
                <img src={img} alt="" />
            </div>
            <div className="section-box__text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}