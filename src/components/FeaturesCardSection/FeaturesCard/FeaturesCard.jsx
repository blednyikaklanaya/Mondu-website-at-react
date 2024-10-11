/* eslint-disable react/prop-types */

import "./FeaturesCard.css";

export default function FeaturesCard ( { img, title, text, reverse } ) {
    return (
        <>
            <div className={reverse ? "features-card reverse" : "features-card"}>
                <img className="features-card__img" src={img}/>

                <div className="features-card__text-block">
                    <h3 className="features-card__title">
                        {title}
                    </h3>
                    <p className="features-card__text">
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}