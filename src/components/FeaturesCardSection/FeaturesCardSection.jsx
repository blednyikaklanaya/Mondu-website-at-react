
import accountCard from "../../sourceImg/img/cardFeatures/accountCard.png";
import convertCard from "../../sourceImg/img/cardFeatures/convertCard.png";
import holdCard from "../../sourceImg/img/cardFeatures/holdCard.png";
import paymentCard from "../../sourceImg/img/cardFeatures/paymentCard.png";
//load image

import "./FeaturesCardSection.css"; //style

import FeaturesCard from "./FeaturesCard/FeaturesCard"; //component

export default function FeaturesCardSection () {
    return (
        <>
            <section className="section section__features-card">
                <div className="container container__faetures-card">
                <FeaturesCard img={paymentCard} title={"Receive Payment"} text={"Say Goodbye to Late Payments and Long Processing Times - Our Streamlined Payment System Makes Getting Paid Faster and Easier Than Ever Before"} />
                <FeaturesCard reverse={true} img={accountCard} title={"Global Account"} text={"Expand Your Business Globally with One Account for Worldwide Payments - Collect Payments from Customers in Any Country, Currency or Language"} />
                <FeaturesCard img={holdCard} title={"Hold"} text={"Seamlessly hold 49 currencies and manage enterprise cross-border cash flows, transfers and liquidity on one intuitive platform."} />
                <FeaturesCard reverse={true} img={convertCard} title={"Convert"} text={"Save Big on Currency Conversion Fees and Get More for Your Money with Our Bank-Beating FX Rates - Simplify Your Global Transactions Today"} />
                </div>
            </section>
        </>
    )
}