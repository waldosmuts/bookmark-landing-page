import { useState } from "react"

export default function Question({ question, answer }) {
    const [isToggled, setIsToggled] = useState(false)

    function toggleDropdown() {
        setIsToggled(!isToggled)
    }

    function ArrowIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={isToggled ? "hsl(0, 94%, 66%)" : "#5267DF"} strokeWidth="3" d="M1 1l8 8 8-8" /></svg>
        )
    }

    return (
        <>
            <div className="questions--dropdown" onClick={toggleDropdown}>
                <div className="dropdown--toggle">
                    <h3>{question}</h3>
                    <div className="dropdown--arrow" style={isToggled ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }}>
                        <ArrowIcon />
                    </div>
                </div>
                <div className="dropdown--answer" style={isToggled ? { display: "block" } : { display: "none" }}>
                    <p>{answer}</p>
                </div>
            </div>

        </>
    )
}