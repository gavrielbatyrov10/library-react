import React from "react";
import Logo from "../components/assets/Library.svg";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/"> </Link>
                        <figure className="footer__logo">
<img src={Logo} alt="" className="Footer__logo--img" />
                        </figure>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span href="/" className="footer__link no-cursor">About</span>
                        <Link to="/books" className="footer__link">Books</Link>
                        <Link to="/cart" className="footer__link">Cart</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; 2023 Library</div>
                </div>
                </div>
        </footer>
    )

}

export default Footer;
