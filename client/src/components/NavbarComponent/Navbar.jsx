import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { userSelector } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { signOutSucess } from "../../redux/user/userSlice";
export default function Navbar() {
  const dispatch=useDispatch()
  const [dropdown, setdropdown] = useState(false);
  const {currentUser}=useSelector(userSelector)
  console.log(currentUser)
  const handleDropdown = () => {
    setdropdown(!dropdown);
  };

  const handleSignout=async()=>{
    try{
      const res = await fetch('/api/auth/signout')
      const data=await res.json()
      if(data.success===false){
        console.log(data.message)
      }
      toast('SignOut Successful', {
        position: 'top-right',
        autoClose: 2000, 
        type: 'Suceesfull', 
      });
      dispatch(signOutSucess())

    }catch(error){

    }
  }


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
          {
            currentUser?(<NavLink to={'/profile'}><li>{currentUser.name}</li></NavLink>):<NavLink to={'/sign-in'}>Sign-in</NavLink>
          }
          {currentUser?(<li onClick={handleSignout}>SignOut</li>):''}
        </ul>
      </div>
    </nav>
  );
}
