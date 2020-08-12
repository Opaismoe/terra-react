import React from "react";
import { Link } from 'react-router-dom'
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const SidebarMenu = ({ isVisible, setIsVisible }) => {
  return (
    <Sidebar
      as={Menu}
      animation="scale down"
      onHide={() => setIsVisible(false)}
      visible={isVisible}
      size="massive"
      direction="top"
      vertical
      fluid
      borderless={true}
      fitted="horizontally"
    >
      <Menu.Item
        as="a"
        onClick={() => setIsVisible(!isVisible)}
        position="right"
      >
        <Icon name="close" />
      </Menu.Item>
      <Menu.Item as="a" style={style.menuItem}>
        Projecten
      </Menu.Item>
      <Menu.Item as="a" style={style.menuItem}>
        Nieuws
      </Menu.Item>
      <Menu.Item as="a" style={style.menuItem}>
        Over Terralemon
      </Menu.Item>
    </Sidebar>
  );
};

const style = {
  menuItem: {
    color: `#00b1dd`,
    fontWeight: `bold`,
    textTransform: `uppercase`,
  }
}

export default SidebarMenu;
