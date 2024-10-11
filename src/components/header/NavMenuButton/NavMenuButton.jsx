import { useState } from "react";
//hook

import NavMenu from "./NavMenu/NavMenu";
//component

import NavMenuIcon from "../../../sourceImg/icon/navMenuFooter/navMenu.svg";
import NavMenuIconClose from "../../../sourceImg/icon/navMenuFooter/closeCross.svg";
// icons

import "./NavMenuButton.css";
//style

export default function NavMenuButton () {

    const [onClickNav, setOnClickNav] = useState(false);

    const handleClick = () => {
        setOnClickNav(() => {
            return !onClickNav;
        })  
        console.log(onClickNav);
    }

    return (
        <>
            <a onClick={handleClick} className="button-nav-menu">
                <img className="nav-menu__icon" src={onClickNav ? NavMenuIconClose : NavMenuIcon}/>
            </a>
            {onClickNav && <NavMenu />}
        </>
    )
}