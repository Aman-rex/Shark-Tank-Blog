import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { userSelector } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from 'react-redux';
export default function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  const {currentUser}=useSelector(userSelector)

  const handleDropdown = () => {
    setdropdown(!dropdown);
  };

  return (
    <nav>
      <div className="nav_container">
        <Link to={"/"}>
          {" "}
          <h4>SharkTankBlog</h4>
        </Link>
        <form className="searchbar">
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </form>
        <ul className="nav-menu">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>Community</li>
          </NavLink>
          <div>
            <li onClick={handleDropdown} className="season">
              Seasons
            </li>
            {dropdown ? (
              <ul className="season_list">
                <NavLink to={"/about"}>
                  <li>Season 1</li>
                </NavLink>
                <NavLink to={"/about"}>
                  <li>Season 2</li>
                </NavLink>
                <NavLink to={"/about"}>
                  <li>Season 3</li>
                </NavLink>
              </ul>
            ) : (
              ""
            )}
          </div>
          <NavLink to={"/sign-in"}>
            <li>{currentUser?currentUser.name:'Sign-in'}</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
