import react from "react"
import logo from "../images/earth.png"

export default function Navbar(){
    return(
        <nav>
            <img src={logo} className="nav--logo" />
            <p className="nav--title">my travel journal.</p>
        </nav>
    )
}