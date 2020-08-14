import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import "./SidebarMenu.css"

const SidebarMenu = ({ isVisible, setIsVisible }) => {
  const [activePath, setActivePath] = useState("home");

  const handleNavClick = (e) => {
    let path = e.target.href.split("/").pop();
    setActivePath(path);
    setIsVisible(!isVisible)
  };

  useEffect(() => {
    const setPath = () => {
      setActivePath(window.location.pathname.split("/").pop())
    }
    setPath()
  })
  
  return (
    <Sidebar
      as={Menu}
      animation="scale down"
      onHide={() => setIsVisible(false)}
      visible={isVisible}
      size="massive"
      direction="left"
      vertical
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
      <Menu.Item
          as={Link}
          to="/projecten"
          style={style.menuItem}
          name="projecten"
          active={activePath === "projecten"}
          onClick={handleNavClick}
        >
          Projecten
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/cases"
          style={style.menuItem}
          name="cases"
          active={activePath === "cases"}
          onClick={handleNavClick}
        >
          Cases
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/nieuws"
          style={style.menuItem}
          name="nieuws"
          active={activePath === "nieuws"}
          onClick={handleNavClick}
        >
          Nieuws
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/over"
          style={style.menuItem}
          name="over"
          active={activePath === "over"}
          onClick={handleNavClick}
        >
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
