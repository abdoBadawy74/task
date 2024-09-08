import {Link}  from "react-router-dom";
import logo from "../assets/navbar-logo.svg";
import icon from "../assets/site-icon.png";
export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="logo" href="#">
            <img src={logo} alt="logo" />
            Black IN Dashboard
          </div>
          <Link className="navbar-btn">
            <img src={icon} alt="logo" width={"25px"} height={"25px"} />
            go to website
          </Link>
        </div>
      </nav>
    </header>
  );
}
