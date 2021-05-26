import { useState } from "react"

import "./contact.css"


export default function Contact() {
    const[message,setMessage] = useState(false)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="main"><h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email"></input>
                <textarea placeholder="message"></textarea>
                <button type="submit">Send</button>
                {message && <span>Thanks, I'll replay as soon as I can</span>}
            </form>
            </div>
        </div>
    )
}
