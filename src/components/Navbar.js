import { useState } from "react"
import { BookmarkLogo } from "../Logos"
import { HamburgerIcon, CloseIcon } from "../Icons"

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)

    function toggleNav() {
        setShowNav(!showNav)
    }

    return (
        <nav className="header--nav">
            <a href="."><BookmarkLogo /></a>
            <button className="nav--toggle" onClick={toggleNav}>{showNav ? <CloseIcon /> : <HamburgerIcon />}</button>
            <ul className={`nav--links ${!showNav && "hide"}`}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}