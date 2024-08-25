import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const username = localStorage.getItem("username");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <header id="home">
      <h1>
        <Link to="/">Domazo</Link>
      </h1>
      <nav className="nav ">
        <ul className={`${isMenuOpen ? "visible" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/carts">
              <i
                className="fa-solid fa-cart-shopping fa-bounce"
                style={{ color: "#000000" }}
              ></i>
            </Link>
          </li>
          {username ? (
            <li>
              <Link className="home-signUp" onClick={handleLogout}>
                logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/signup" className="home-signUp">
                Sign up
              </Link>
              <Link to="/login" className="home-signUp">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
