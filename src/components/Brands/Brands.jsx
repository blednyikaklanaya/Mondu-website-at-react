import settings from "../../sourceImg/icon/brandsIcon/settings.svg";
import scale from "../../sourceImg/icon/brandsIcon/scale.svg";
import ethernet from "../../sourceImg/icon/brandsIcon/ethernet.svg";
import done from "../../sourceImg/icon/brandsIcon/done.svg";

import "./Brands.css";

import BrandsBlock from "./BrandsBlock/BrandsBlock";

export default function Brands () {
    return (
        <>
            <section className="section section-brans">
                <div className="container container-brands">

                    <h2 className="brands__title">
                        Why global brands choose us?
                    </h2>

                    <div className="brands__blocks">
                        <BrandsBlock img={settings} title={"Protection"} text={"Robust security features and protocols to guarantee the safety of your funds and accounts."}/>
                        <BrandsBlock img={ethernet} title={"Security"} text={"Our security systems and procedures are based on the highest international standards including PCI Level 1 compliance."}/>
                        <BrandsBlock img={scale} title={"Seamless integration"} text={"Our systems can be seamlessly integrated with existing payment systems and workflows."}/>
                        <BrandsBlock img={done} title={"Compliance"} text={"We have our Financial Transactions and Reports Analysis Centre of Canada (Fintrac) licence."}/>
                    </div>

                </div>
            </section>
        </>
    )
}