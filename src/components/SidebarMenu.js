import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

const SidebarMenu = ({ isVisible, setIsVisible }) => {
  return (
    <Sidebar
      as={Menu}
      animation="push"
      onHide={() => setIsVisible(false)}
      visible={isVisible}
      size="massive"
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
