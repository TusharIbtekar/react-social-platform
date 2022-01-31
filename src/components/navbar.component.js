import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
                <Link className="navbar-brand p-2 flex-grow-1" to="/">
                    Social Platform
                </Link>

                <Link className="navbar-link p-2" to="/signup">
                    Sign Up
                </Link>
                <Link className="navbar-link p-2" to="/login">
                    Login
                </Link>

                
            </nav>
        </>
    );
}
 
export default Navbar;