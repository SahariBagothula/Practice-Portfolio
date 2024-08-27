import "./Navbar.css";
import s from "../../assets/s.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const switchTheme = (e) => {
        e.target.checked ? document.querySelector('body').setAttribute('data-theme', 'light') : document.querySelector('body').setAttribute('data-theme', 'dark');
    }

  return (
    <>
      <nav className="navbar">
        <img className="logo" src={s} alt="not found" />
        <div className="nav-items">
          <NavLink to="/" className="nav-items-list">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-items-list">
            About
          </NavLink>
          <NavLink to="/projects" className="nav-items-list">
            Projects
          </NavLink>
          <NavLink to="/blogs" className="nav-items-list">
            Blogs
          </NavLink>
        </div>
        <div className="lightMode-darkMode">
          <label className="switch">
            <input type="checkbox" onChange={switchTheme}/>
            <span className="slider round"></span>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
