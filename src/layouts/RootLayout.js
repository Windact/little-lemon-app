import { NavLink, Link, Outlet } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";



import logo from "../logo.svg";

const RootLayout = () => {
    return ( 
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="reservations">Reservations</NavLink>
                    <NavLink to="orderOnline">Order Online</NavLink>
                    <NavLink to="login">Login</NavLink>
                </nav>
            </header>
            <main className="content">
                <Outlet></Outlet>
            </main>
            <footer>
                <img src="/images/logo-footer.png" alt="logo footer" />
                <div className="footer-navigation">
                    <h2>Doormat Navigation</h2>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="help">Help</Link>
                    <Link to="reservations">Reservations</Link>
                    <Link to="orderOnline">Order Online</Link>
                    <Link to="login">Login</Link>
                </div>
                <div className="footer-contact">
                    <h2>Contact</h2>
                    <p>This is a address</p>
                    <p>This is a phone number</p>
                    <p>This is an email</p>
                </div>
                <div className="footer-socials">
                    <h2>Social Media Links</h2>
                    <a href="https://www.facebook.com"><FaFacebookSquare className="social-icon" /> LittleLemon
                    </a>
                    <a href="https://www.instagram.com"><FaSquareInstagram  className="social-icon"/> @LittleLemon
                    </a>
                    <a href="https://www.twitter.com"><FaSquareXTwitter className="social-icon" /> @LittleLemon
                    </a>
                </div>
            </footer>
        </div>
     );
}

export default RootLayout;