import { useState, useEffect } from "react";

import "./SponsorBlock.css";

import SponsorLogo from "../../sourceImg/icon/sponsorLogo/SponsorLogo.svg";

export default function SponsorBlock() {

    const [isVisible, setIsVisible] = useState("hide");

    useEffect(() => {
        const handleScroll = () => {
            const currenScrollY = window.scrollY; // write Y cordinate

            if (currenScrollY > 120) { 
                setIsVisible("sponsor-logo-image");
            } //chek when entered the zone
        };

        window.addEventListener('scroll', handleScroll); // add Event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <section className="sponsorBlock">
                <div className="container container-sponsorBlock">

                    <h3 className="sponsors-title">
                        The trusted way to pay and get paid globally
                    </h3>
                    <div className="sponsor-line-image">
                        <img
                            src={SponsorLogo}
                            className={isVisible}
                        />
                    </div>

                </div>
            </section>
        </>
    )
}