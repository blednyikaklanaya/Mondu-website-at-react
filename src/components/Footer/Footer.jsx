import logoFooter from "../../sourceImg/icon/logoFooter.svg";
import socialIcons from "../../sourceImg/img/footerImg/Socialicons.png";
//components

import "./Footer.css";
//style

export default function Footer() {
    return (
        <>
            <footer className="section section__footer">
                <div className="container container__footer">

                    <div className="footer__link-div">

                        <div className="link-block">
                            <h4 className="link-block__title">
                                Products
                            </h4>
                            <ul>
                                <li className="footer-link">Global Account</li>
                                <li className="footer-link">Multi-Currency Wallet</li>
                                <li className="footer-link">Payment Links - Payins</li>
                                <li className="footer-link">FX</li>
                            </ul>
                        </div>

                        <div className="link-block">
                            <h4 className="link-block__title">
                                Products
                            </h4>
                            <ul>
                                <li className="footer-link">Wallet-to-wallet</li>
                                <li className="footer-link">Corporate Cards</li>
                                <li className="footer-link">Treasury Management</li>
                                <li className="footer-link">API</li>
                            </ul>
                        </div>

                        <div className="link-block">
                            <h4 className="link-block__title">
                                Resources
                            </h4>
                            <ul>
                                <li className="footer-link">Partners</li>
                                <li className="footer-link">Developers</li>
                                <li className="footer-link">Community</li>
                            </ul>
                        </div>

                        <div className="link-block">
                            <h4 className="link-block__title">
                                Company
                            </h4>
                            <ul>
                                <li className="footer-link">FAQ</li>
                                <li className="footer-link">Privacy policy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__other-info-div">
                        <img className="footer__logo" src={logoFooter}/>
                        <h3 className="author">© 2023 Mondo. All Rights Reserved.</h3>
                        <img className="footer__social-icon" src={socialIcons}/>
                    </div>

                </div>
            </footer>
        </>
    )
}

