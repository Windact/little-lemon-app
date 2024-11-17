// import logo from "./logo.svg"
import { NavLink, Link, Outlet } from "react-router-dom";

import logo from "../logo.svg";

const RootLayout = () => {
    return ( 
        <div className="root-layout">
            <header>
                <nav>
                    <img src={logo} className="App-logo" alt="logo" />
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="reservations">Reservations</NavLink>
                    <NavLink to="orderOnline">Order Online</NavLink>
                    <NavLink to="login">Login</NavLink>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer> This is the footer</footer>
        </div>
     );
}

export default RootLayout;