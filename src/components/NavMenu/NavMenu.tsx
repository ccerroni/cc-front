
import { NavLink } from "react-router-dom"
import { MENU } from "../../App";
import { MenuItem } from "../../models/MenuItem";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Navbar from "react-bootstrap/esm/Navbar";
import { Container } from "react-bootstrap";
import "./NavMenu.css";

export const NavMenu: React.FC = () => {
  const getDropdownMenu = (itemWithChildren: MenuItem) => (
    <NavDropdown title={itemWithChildren.name} id={`nav-dropdown-${itemWithChildren.name.replace(' ', '')}`}>
      {itemWithChildren.children?.map((item: MenuItem) => (
        !item.children ? 
        <NavDropdown.Item key={item.url} className="item">
          <NavLink to={item.url} className={({ isActive }) => getClassLink(isActive)}>{item.name}</NavLink>
        </NavDropdown.Item>
          : getDropdownMenu(item)
      ))}
    </NavDropdown>

  );

  const getClassLink = (isActive: boolean) => {
    return isActive ? 'active' : 'item';
  }

  const getMenuItem = (item: MenuItem) => {
    return !item.children ? (
      <Nav.Item>
        <Nav.Link>
          <NavLink to={item.url} className={({ isActive }) => getClassLink(isActive)}>{item.name}</NavLink>
        </Nav.Link>
      </Nav.Item>
    ) : getDropdownMenu(item)
  };

  return (

    <Navbar className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {MENU.map((item) =>
              getMenuItem(item)
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
