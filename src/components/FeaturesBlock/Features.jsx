
import gridFeatures from "../../sourceImg/icon/featuresIcon/grid-features.png";
import ethernetFeatures from "../../sourceImg/icon/featuresIcon/ethernet-features.png";
import menFeatures from "../../sourceImg/icon/featuresIcon/men-features.png";
// load icon

import "./Features.css" //style

import FeaturesBlocks from "./FeaturesBloks/FeaturesBloks" //component

export default function Features() {
    return (
        <>
            <section className="section section-features">

                <div className="container container-features">

                    <h2 className="title-block__features">Features</h2>
                    <div className="features-text">
                        <h3 className="features-text__title">
                            Discover the Advantages of Using Mondu
                        </h3>
                        <p className="features-text__p">
                            Make informed decisions for your online business with our real-time analytics and insights. stay ahead of the competition in a fast-paced online marketplace with mondo
                        </p>
                    </div>

                    <div className="features-text__info-block">
                        <FeaturesBlocks img={gridFeatures} title={"Advance Cutting Edge Tech"} text={"leveraging on the best and advanced information processing techniques to ensure Zero or no transactions timeouts with speed"}/>
                        <FeaturesBlocks img={ethernetFeatures} title={"Global reach and support"} text={"Mondu supports over 100 different currencies, making it easy for users to send and receive payments from anywhere in the world, regardless of their location or currency."} />
                        <FeaturesBlocks img={menFeatures} title={"User-friendly interface"} text={"Mondu has been designed to be extremely user-friendly, with a simple and intuitive interface that makes it easy for anyone to use."}/>
                    </div>

                </div>

            </section>
        </>
    )
}