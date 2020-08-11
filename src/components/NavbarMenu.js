import React from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import brand from "../terralemon.svg";

const NavbarMenu = ({ isVisible, setIsVisible }) => {
  return (
    <Menu style={style.navbar} borderless={true}>
      <Menu.Item name="Home">
        <Image src={brand} style={style.image} />
      </Menu.Item>
      <Menu.Menu position="right">
      <Menu.Item as="a" style={style.menuItem}>
        Projecten
      </Menu.Item>
      <Menu.Item as="a" style={style.menuItem}>
        Nieuws
      </Menu.Item>
      <Menu.Item as="a" style={style.menuItem}>
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
  }
}

export default NavbarMenu;
