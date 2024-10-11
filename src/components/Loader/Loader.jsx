import "./Loader.css";
import logo from "../../sourceImg/icon/Logo.svg";

export default function Loader() {
    return (
        <>
            <div className="container-loader">
                <img className="loader" src={logo} />
            </div> 
        </>
    )
}