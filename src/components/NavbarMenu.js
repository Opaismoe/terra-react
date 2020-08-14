import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import brand from "../terralemon.svg";
import './NavbarMenu.css'

const NavbarMenu = ({ isVisible, setIsVisible }) => {
  const [active, setActive] = useState("home")
  
  const handleNavClick = (e) => {
    setActive(e.target.href)
  }
  
  useEffect(() => {
    
  })

  return (
    <Menu style={style.navbar} borderless fixed="top">
      <Menu.Item name="Home">
        <Link to="/">
          <Image src={brand} style={style.image} />
        </Link>
      </Menu.Item>
      <Menu.Menu className="menu-right" position="right" style={style.rightMenu}>
      <Menu.Item as={Link} to="/projecten" style={style.menuItem} name="projecten" active={active === "projecten"} onClick={() => handleNavClick}>
        Projecten
      </Menu.Item>
      <Menu.Item as={Link} to="/cases" style={style.menuItem} name="cases" active={active === "cases"} onClick={() => handleNavClick}>
        Cases
      </Menu.Item>
      <Menu.Item as={Link} to="/nieuws" style={style.menuItem} name="nieuws" active={active === "nieuws"} onClick={() => handleNavClick}>
        Nieuws
      </Menu.Item>
      <Menu.Item as={Link} to="/over" style={style.menuItem} name="over" active={active === "over"} onClick={() => handleNavClick}>
        Over Terralemon
      </Menu.Item>
        <Button style={style.menuButton} icon onClick={() => setIsVisible(!isVisible)}>
          <Icon name="bars" />
        </Button>
      </Menu.Menu>
    </Menu>
  );
}

const style = {
  navbar: {
    marginBottom: 0,
    height: `120px`,
    border: `none`,
  },
  menuButton: {
    background: `none`,
  },
  menuItem: {
    color: `#00b1dd`,
    fontWeight: `bold`,
    textTransform: `uppercase`,
  },
}

export default NavbarMenu;
