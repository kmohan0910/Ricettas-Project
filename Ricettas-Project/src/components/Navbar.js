import "./Navbar.css"
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to ="/" className="brand">
                <h1>Mohan's Ricettas</h1>
                </Link>
                <Link to="/Create">
                  Create Recipie
                </Link>
            </nav>
            
        </div>
    )
}