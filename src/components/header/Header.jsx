import { useEffect, useState } from "react";
//hooks

import NavMenuButton from "./NavMenuButton/NavMenuButton";
//component

import "./Header.css";
//style

import logoSmall from "../../sourceImg/icon/logoSmall.svg";
import dropDownArrow from "../../sourceImg/icon/vector.svg"
//icons

export default function Header() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 450); // if width < 450pixel to render components
        };

        handleResize(); //check width before mounting

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }; //remove event
    }, []);

    return (
        <>
            <section className="header">
                <div className="container header-container">

                    <img src={logoSmall} />

                    <li className="header-links">
                        <ul className="header-link">Demo</ul> <img className="dropDownArrow" src={dropDownArrow} />
                        <ul className="header-link">Why Mondu</ul>
                        <ul className="header-link">Resources</ul> <img className="dropDownArrow" src={dropDownArrow} />
                        <ul className="header-link">Contact us</ul>
                    </li>

                    <a className="log-button">Log in</a>

                    <button className="header-button">Get started</button>
                    {isMobile && <NavMenuButton />} 
                    {/* if width < 450 pixel - render components */}
                </div>
            </section>
        </>
    )
}