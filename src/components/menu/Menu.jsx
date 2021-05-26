import "./menu.css"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+ (menuOpen && "active")}>
           <ul>
            <li onClick={()=>setMenuOpen(false)}><a href="#aboutme">ABOUT ME</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#portfolio">PORTFOLIO</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#contact">CONTACT</a></li>
            </ul> 
        </div>
    )
}
