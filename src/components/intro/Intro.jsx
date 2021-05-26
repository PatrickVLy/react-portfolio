
import "./intro.css"
import hero from "./hero.jpg"

export default function Intro() {
    return (
        <div className="intro" id="intro">
                <div className="left">
                <img className="hero" src={hero} alt="hero"/>
                </div>
                <div className="right">
                <div className="container">
    <div className="box">

        <div className="title">
            <span className="block"></span>
            <h1>PATRICK LY<span></span></h1>
        </div>

        <div className="role">
            <div className="block"></div>
            <p>Full Stack Developer</p>
        </div>

    </div>
</div>
                </div>
        </div>
    )
}
