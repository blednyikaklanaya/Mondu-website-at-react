import "./NavMenu.css";

export default function NavMenu() {
    return (
        <>
            <div className="nav-menu">

                <ul className="nav-menu__links">
                    <li className="nav-menu__link">Demo</li>
                    <li className="nav-menu__link">Why Mondu</li>
                    <li className="nav-menu__link">Resources</li>
                    <li className="nav-menu__link">Contact us</li>
                    <li className="nav-menu__link">Log in</li>
                </ul>
                <button className="nav-menu__button">Get started</button>

            </div>
        </>
    )
}