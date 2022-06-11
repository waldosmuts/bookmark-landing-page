import { useForm } from "react-hook-form"
import { BookmarkLogoDark } from "../Logos"
import { ErrorIcon, FacebookIcon, TwitterIcon } from "../Icons"

export default function Footer() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <footer>
            <div className={`footer--contact ${errors.email && "error"}`}>
                <h3>35,000+ already joined</h3>
                <h2>Stay up-to-date with what we’re doing</h2>
                <form className="contact--form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form--input-container">
                        <input className="input-container--input" {...register("email", {
                            required: true,
                            // eslint-disable-next-line
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                        })} placeholder="Enter your email address" />
                        {errors.email && <div className="input-container--error-icon" children={<ErrorIcon />} alt="" />}
                        {errors.email && <div className="input-container--alert">Whoops, make sure it's an email</div>}
                    </div>
                    <button type="submit">Contact Us</button>
                </form>
            </div>
            <div className="footer--nav">
                <nav className="nav--links">
                    <a href="."><BookmarkLogoDark /></a>
                    <button>Features</button>
                    <button>Pricing</button>
                    <button>Contact</button>
                </nav>
                <div className="nav--social">
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
            <div className="footer--credit">
                <span>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.</span>
                <span>Coded by <a href="https://github.com/waldosmuts" target="_blank" rel="author noreferrer">Waldo Smuts</a>.</span>
            </div>
        </footer >
    )
}