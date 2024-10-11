/* eslint-disable react/prop-types */
import "./BrandsBlock.css";

export default function BrandsBlock ( { img, title, text } ) {
    return (
        <>
            <div className="brands-block">
                <img className="brands-block__icon" src={img}/>

                <div className="brands-block__text-div">

                    <h4 className="brands-block__title">
                        {title}
                    </h4>
                    <p className="brands-block__text">
                        {text}
                    </p>
                    
                </div>
            </div>
        </>
    )
}