/* eslint-disable react/prop-types */

import "./FeaturesBloks.css"


export default function FeaturesBlocks( { img, title, text } ) {
    return (
        <>
            <div className="features-blocks">
                <img src={img} />
                <h4 className="features-bloks__title">
                    {title}
                </h4>
                <p className="features-bloks__text">
                    {text}
                </p>
            </div>
        </>
    )
}