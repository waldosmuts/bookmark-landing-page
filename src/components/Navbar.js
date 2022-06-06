import { useState } from "react"
import { BookmarkLogo, BookmarkLogoInverse } from "../Logos"
import { HamburgerIcon, CloseIcon, FacebookIcon, TwitterIcon } from "../Icons"

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)

    function toggleNav() {
        setShowNav(!showNav)
    }

    document.querySelector("body").style.overflow = showNav ? "hidden" : "visible"

    return (
        <nav className={`header--nav ${showNav || window.innerWidth > 768 ? "show" : ""}`}>
            <a className="nav--logo" href=".">{showNav ? <BookmarkLogoInverse /> : <BookmarkLogo />}</a>
            <button className="nav--toggle" onClick={toggleNav}>{showNav ? <CloseIcon /> : <HamburgerIcon />}</button>
            <ul className={`nav--links ${showNav || window.innerWidth > 768 ? "show" : ""}`}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Login</li>
                <div className="links--social"><FacebookIcon /><TwitterIcon /></div>
            </ul>
            {showNav && <div className="nav--backdrop" />}
        </nav>
    )
}