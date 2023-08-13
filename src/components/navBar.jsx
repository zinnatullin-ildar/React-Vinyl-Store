import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav mt-2" role="button">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                    Main Page
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/product">
                    Product Card
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/basket">
                    Basket
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/add">
                    Add Product
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    Login Page
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">
                    Register Page
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;
