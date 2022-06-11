import { useMemo, useState } from "react"

import SimpleFeatureIllustration from "../images/illustration-features-tab-1.svg"
import SpeedyFeatureIllustration from "../images/illustration-features-tab-2.svg"
import EasyFeatureIllustration from "../images/illustration-features-tab-3.svg"

import { ChromeLogo, FirefoxLogo, OperaLogo } from "../Logos"
import Question from "./Question"

export default function Main() {
    const [feature, setFeature] = useState("simple")

    const faqData = useMemo(() => {
        return [
            {
                id: 1,
                question: "What is Bookmark?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
            },
            {
                id: 2,
                question: "How can I request a new browser?",
                answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
            },
            {
                id: 3,
                question: "Is there a mobile app?",
                answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
            },
            {
                id: 4,
                question: "What about other Chromium browsers?",
                answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
            },
        ]
    }, [])

    const faqElements = useMemo(() => {
        return faqData.map(question => {
            return <Question key={question.id} question={question.question} answer={question.answer} />
        })
    }, [faqData])

    function changeFeature(newFeature) {
        setFeature(newFeature)
    }

    function FeatureSection() {
        if (feature === "simple") {
            return (
                <>
                    <div className="features-body--illustration">
                        <img id="simple-illustration" src={SimpleFeatureIllustration} alt="" />
                    </div>
                    <div className="features-body--backdrop">
                        <div className="backdrop--inner" />
                    </div>
                    <div className="features-body--content">
                        <h3 className="content--heading">Bookmark in one click</h3>
                        <p className="content--paragraph">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        {window.innerWidth > 768 && <button className="content--info">More Info</button>}
                    </div>
                </>

            )
        } else if (feature === "speedy") {
            return (
                <>
                    <div className="features-body--illustration">
                        <img id="speedy-illustration" src={SpeedyFeatureIllustration} alt="" />
                    </div>
                    <div className="features-body--backdrop">
                        <div className="backdrop--inner" />
                    </div>
                    <div className="features-body--content">
                        <h3 className="content--heading">Intelligent search</h3>
                        <p className="content--paragraph">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        {window.innerWidth > 768 && <button className="content--info">More Info</button>}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="features-body--illustration">
                        <img id="easy-illustration" src={EasyFeatureIllustration} alt="" />
                    </div>
                    <div className="features-body--backdrop">
                        <div className="backdrop--inner" />
                    </div>
                    <div className="features-body--content">
                        <h3 className="content--heading">Share your bookmarks</h3>
                        <p className="content--paragraph">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                        {window.innerWidth > 768 && <button className="content--info">More Info</button>}
                    </div>
                </>
            )
        }
    }

    function InstallButton() {
        return (
            <button className="extension--install">{"Add & Install Extension"}</button>
        )
    }

    return (
        <main>
            <h2 className="main--features-heading">Features</h2>
            <p className="main--features-paragraph">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <div className="main--features-select">
                <button className={`features-select--button ${feature === "simple" && "selected"}`} onClick={() => changeFeature("simple")}>Simple Bookmarking</button>
                <button className={`features-select--button ${feature === "speedy" && "selected"}`} onClick={() => changeFeature("speedy")}>Speedy Searching</button>
                <button className={`features-select--button ${feature === "easy" && "selected"}`} onClick={() => changeFeature("easy")}>Easy Sharing</button>
            </div>
            <div className="main--features-body">
                <FeatureSection />
            </div>
            <div className="main--extension">
                <h2 className="extension--heading">Download the extension</h2>
                <p className="extension--paragraph">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
                <div className="extension--browser">
                    <div className="browser--card">
                        <ChromeLogo />
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <InstallButton />
                    </div>
                    <div className="browser--card">
                        <FirefoxLogo />
                        <h3>Add to Firefox</h3>
                        <p>Minimum version 55</p>
                        <InstallButton />
                    </div>
                    <div className="browser--card">
                        <OperaLogo />
                        <h3>Add to Opera</h3>
                        <p>Minimum version 46</p>
                        <InstallButton />
                    </div>
                </div>
            </div>
            <div className="main--faq">
                <h2>Frequently Asked Questions</h2>
                <p className="faq--paragraph">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
                <div className="faq--questions">
                    {faqElements}
                </div>
                <button className="faq--info">More Info</button>
            </div>
        </main>
    )
}