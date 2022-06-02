import HeroIllustration from "../images/illustration-hero.svg"

export default function Header() {
    return (
        <header>
            <div className="header--hero">
                <img className="hero--img" src={HeroIllustration} alt="" />
                <div className="hero--backdrop" />
            </div>
            <div className="header--intro">
                <h1 className="intro--heading">A Simple Bookmark Manager</h1>
                <p className="intro--paragraph">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="intro--buttons">
                    <button className="buttons--blue">Get it on Chrome</button>
                    <button className="buttons--white">Get it on Firefox</button>
                </div>
            </div>
        </header>
    )
}