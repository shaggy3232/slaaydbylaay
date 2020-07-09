import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "./navbar.css"
import logo from "../../Assets/logo.jpeg"
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className = "navbar" light expand="md">
        <NavbarBrand className= "navbrand" href="/"><img className= "navbrand" src = {logo}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem className = "navItem">
              <NavLink >Get in touch
              </NavLink>
            </NavItem>
            <NavItem className = "navItem">
             <NavLink>Gallery</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Braids
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Lashes
                </DropdownItem>
             
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>Instagram: SlaaydbyLaay </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;