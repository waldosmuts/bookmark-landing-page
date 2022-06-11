import { useEffect, useState } from "react"
import { BookmarkLogo, BookmarkLogoInverse } from "../Logos"
import { HamburgerIcon, CloseIcon, FacebookIcon, TwitterIcon } from "../Icons"

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth)
        })
    }, [])

    function toggleNav() {
        setShowNav(!showNav)
    }

    document.querySelector("body").style.overflow = showNav ? "hidden" : "visible"

    return (
        <nav className={`header--nav ${showNav || innerWidth > 1100 ? "show" : ""}`}>
            <a className="nav--logo" href=".">{showNav && innerWidth < 1100 ? <BookmarkLogoInverse /> : <BookmarkLogo />}</a>
            <button className="nav--toggle" onClick={toggleNav}>{showNav ? <CloseIcon /> : <HamburgerIcon />}</button>
            <ul className={`nav--links ${showNav || innerWidth > 1100 ? "show" : ""}`}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Login</li>
                <div className="links--social"><FacebookIcon /><TwitterIcon /></div>
            </ul>
            {(showNav && innerWidth < 1100) && < div className="nav--backdrop" />}
        </nav>
    )
}