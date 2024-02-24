import React from "react";
import logo from "../../assets/logo.png"
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        {/* <div className="search">
          <label htmlFor="search">
            <CiSearch />
          </label>
          <input type="text" name="search" />
        </div> */}
       
      </nav>
    </>
  );
};

export default Header;
