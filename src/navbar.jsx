import React from "react";
import LogoImg from "./images/logo.svg";
import CartImg from "./images/icon-cart.svg";
import AvatarImg from "./images/image-avatar.png";
const NavBar = () => {
  return(
    <>
      <div className="navbar">
          <div className="logo-menu">
            <img src={LogoImg} alt="logo" />
            <ul className="navlist">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        <div className="cart-pic">
          <div className="cart">
            <img src={CartImg} alt="cart img" />
          </div>
          <img className="img-avatar" src={AvatarImg} alt="avatar img" />
        </div>
      </div>
      <div className="line-bottom"></div>
    </>
  )
}

export default NavBar;