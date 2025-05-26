import { Link } from "react-router-dom";
import Error404 from "../../assets/404.svg";
import ErrorText from "../../assets/errorText.svg";
import "./ErrorPage.css";

export default function ErrorPage() {
    return (
        <>
            <div className="error">
                <img src={Error404} alt="error-404" className="error404"/>
                <img src={ErrorText} alt="error-text" className="errorText"/>
                <Link to="/">Retour sur la page accueil</Link>
            </div>
        </>
    )  
}