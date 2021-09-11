import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ShowCon,
  ShowCon1,
  ShowCon2,
  HoldConIcon,
  OtherCon1,
  OtherCon2
} from "./NavBar.element";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../Image/logo-2.png"
import { AppContext } from "../../GlobalAuth/GlobalAuth"
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import "./Allstyle.css"
import SignDisplay from "./SignDisplay";
import ShowDisplay from "./ShowDisplay"


const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);
  const { current } = useContext(AppContext)
  const { data } = useContext(AppContext)
  const [toggleLog, settoggleLog] = useState(false)
  const [cssChange, setcssChange] = useState(true)
  const [show, setShow] = useState(true);

  const diSignOut = () => {
    setShow((prev) => !prev)
  };

  const diSignOut1 = () => {
    setShow(!show)
  };

  const changeCss = () => {
    setcssChange(!cssChange)
  }

  const HandleLog = () => {
    settoggleLog(!toggleLog)
  }

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={logo} />
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/explorlisting">Explor Listing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/dashoard">Dashboard</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/cartpage">
                {" "}
                <ShoppingBasketIcon />{" "}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="#">


                {
                  current ?
                    <div >

                      <div>{
                        show ? <div>
                          <ShowCon onClick={diSignOut}>
                            <AccountCircleIcon />
                            <HoldConIcon>
                              <ShowCon1>
                                {data && data.firstname}
                              </ShowCon1>
                            </HoldConIcon>
                            <ShowCon2>
                              <IoMdArrowDropdownCircle />
                            </ShowCon2>
                          </ShowCon>
                        </div> :
                          <div>
                            <OtherCon1>
                              <ShowCon onClick={diSignOut}>
                                <AccountCircleIcon />
                                <HoldConIcon>
                                  <ShowCon1>
                                    {data && data.firstname}
                                  </ShowCon1>
                                  <ShowCon2>
                                    <IoMdArrowDropdownCircle />
                                  </ShowCon2>
                                </HoldConIcon>
                              </ShowCon>

                            </OtherCon1>

                          </div>
                      }

                      </div>



                    </div>


                    :
                    <SignDisplay />
                }
              </NavLinks>
            </NavItem>
          </NavMenu>

          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign-In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
